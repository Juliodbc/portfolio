import githubData from '@/data/projetos.github.json';
import { projetosManuais } from '@/data/projetos.manual';
import type { Projeto, ProjetoGithub } from '@/types/Projeto';

const repositoriosCobertosPorEstudo: Record<string, string[]> = {
  'burro-bluetooth': ['bluetooth'],
  'galeria-de-fotos': ['galeria-fotos'],
  smartevent: ['smartevent'],
  vaultpos: ['vaultpos'],
};
const normalizar = (valor: string) => valor.toLocaleLowerCase('pt-BR').replace(/[^a-z0-9]/g, '');
const idsManuais = new Set(projetosManuais.flatMap((projeto) => [
  normalizar(projeto.id), normalizar(projeto.titulo), ...(repositoriosCobertosPorEstudo[projeto.id] ?? []).map(normalizar),
]));

const outrosProjetos: Projeto[] = (githubData as ProjetoGithub[])
  .filter((repo) => !idsManuais.has(normalizar(repo.id)))
  .map((repo, index) => ({
    id: repo.id, titulo: repo.titulo, resumo: repo.resumo, contexto: 'TODO', solucao: 'TODO', desafios: ['TODO'],
    aprendizados: 'TODO', stack: [...(repo.linguagem ? [repo.linguagem] : []), ...repo.topicos], papel: 'TODO',
    periodo: 'TODO', status: 'TODO', prints: [], repositorio: repo.url, demo: repo.demo ?? '', video: '',
    destaque: false, ordem: index + 1,
  }));

export const projetos: Projeto[] = [...projetosManuais.toSorted((a, b) => a.ordem - b.ordem), ...outrosProjetos];
