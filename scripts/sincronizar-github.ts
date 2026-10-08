import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { projetosManuais } from '../src/data/projetos.manual';
import type { ProjetoGithub } from '../src/types/Projeto';

interface RepositorioGithubApi {
  name: string;
  full_name: string;
  description: string | null;
  language: string | null;
  topics?: string[];
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  created_at: string;
  updated_at: string;
  fork: boolean;
  archived: boolean;
}

const API_URL = 'https://api.github.com/users/Juliodbc/repos?per_page=100&sort=updated';
const OUTPUT_PATH = resolve(dirname(fileURLToPath(import.meta.url)), '../src/data/projetos.github.json');
const OMITTED_PROFILE_REPOSITORY = 'juliodbc/juliodbc';
const MANUAL_REPOSITORY_NAMES = new Set([
  ...projetosManuais.map((projeto) => projeto.id.toLowerCase()),
  'bluetooth',
  'galeria-fotos',
  'smartevent',
]);

async function buscarRepositorios(): Promise<RepositorioGithubApi[]> {
  let resposta: Response;

  try {
    resposta = await fetch(API_URL, {
      headers: {
        Accept: 'application/vnd.github+json',
        'User-Agent': 'juliodbc-portfolio-sync',
      },
    });
  } catch (erro) {
    const detalhe = erro instanceof Error ? erro.message : String(erro);
    throw new Error(`Falha de rede ao consultar o GitHub: ${detalhe}`);
  }

  if (resposta.status === 403 || resposta.status === 429) {
    const reset = resposta.headers.get('x-ratelimit-reset');
    const quando = reset ? ` Tente novamente após ${new Date(Number(reset) * 1000).toLocaleString('pt-BR')}.` : '';
    throw new Error(`Limite da API do GitHub atingido (HTTP ${resposta.status}).${quando}`);
  }

  if (!resposta.ok) {
    throw new Error(`A API do GitHub respondeu HTTP ${resposta.status} ${resposta.statusText}.`);
  }

  const restante = resposta.headers.get('x-ratelimit-remaining');
  if (restante === '0') {
    console.warn('Aviso: a consulta usou a última requisição disponível da API do GitHub.');
  }

  const dados: unknown = await resposta.json();
  if (!Array.isArray(dados)) {
    throw new Error('A resposta da API do GitHub veio em formato inesperado.');
  }
  return dados as RepositorioGithubApi[];
}

async function sincronizar(): Promise<void> {
  const repositorios = await buscarRepositorios();
  const ignorados: Array<{ nome: string; motivo: string }> = [];
  const incluidos: ProjetoGithub[] = [];

  for (const repo of repositorios) {
    const nome = repo.full_name || repo.name;
    if (repo.fork) {
      ignorados.push({ nome, motivo: 'fork' });
      continue;
    }
    if (repo.archived) {
      ignorados.push({ nome, motivo: 'arquivado' });
      continue;
    }
    if (nome.toLowerCase() === OMITTED_PROFILE_REPOSITORY) {
      ignorados.push({ nome, motivo: 'repositório de perfil' });
      continue;
    }
    if (MANUAL_REPOSITORY_NAMES.has(repo.name.toLowerCase())) {
      ignorados.push({ nome, motivo: 'estudo de caso manual prioritário' });
      continue;
    }

    incluidos.push({
      id: repo.name,
      titulo: repo.name,
      resumo: repo.description?.trim() || 'sem descrição',
      linguagem: repo.language,
      topicos: repo.topics ?? [],
      url: repo.html_url,
      demo: repo.homepage?.trim() || null,
      estrelas: repo.stargazers_count,
      criadoEm: repo.created_at,
      atualizadoEm: repo.updated_at,
      semDescricao: !repo.description?.trim(),
    });
  }

  incluidos.sort((a, b) => Date.parse(b.atualizadoEm) - Date.parse(a.atualizadoEm));
  await mkdir(dirname(OUTPUT_PATH), { recursive: true });
  await writeFile(OUTPUT_PATH, `${JSON.stringify(incluidos, null, 2)}\n`, 'utf8');

  const semDescricao = incluidos.filter((repo) => repo.semDescricao).map((repo) => repo.titulo);
  const camposTodo = projetosManuais.flatMap((projeto) => {
    const campos = Object.entries(projeto)
      .filter(([, valor]) =>
        typeof valor === 'string'
          ? valor.includes('TODO')
          : Array.isArray(valor) && valor.some((item) => typeof item === 'string' && item.includes('TODO')),
      )
      .map(([campo]) => campo);
    return campos.length ? [`${projeto.titulo} (${campos.join(', ')})`] : [];
  });
  console.log(`Sincronização concluída: ${incluidos.length} repositório(s) incluído(s).`);
  console.log(`Ignorados: ${ignorados.length}${ignorados.length ? ` — ${ignorados.map((repo) => `${repo.nome} (${repo.motivo})`).join(', ')}` : ''}`);
  console.log(`Sem descrição: ${semDescricao.length ? semDescricao.join(', ') : 'nenhum'}`);
  console.log(`Estudos de caso com campos TODO: ${camposTodo.length ? camposTodo.join('; ') : 'nenhum'}`);
  console.log(`Arquivo atualizado: ${OUTPUT_PATH}`);
}

sincronizar().catch((erro: unknown) => {
  const mensagem = erro instanceof Error ? erro.message : String(erro);
  console.error(`Não foi possível sincronizar os repositórios: ${mensagem}`);
  process.exitCode = 1;
});
