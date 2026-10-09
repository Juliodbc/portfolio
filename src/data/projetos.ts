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
  .map((repo, index) => {
    const stack = [...(repo.linguagem ? [repo.linguagem] : []), ...repo.topicos];
    const tecnologia = repo.linguagem ? ` em ${repo.linguagem}` : '';
    const resumo = repo.semDescricao
      ? `Projeto${tecnologia} publicado no GitHub para praticar desenvolvimento e organização de código.`
      : repo.resumo;
    return {
      id: repo.id,
      titulo: repo.titulo,
      resumo,
      contexto: `Repositório público do projeto ${repo.titulo}, com código-fonte disponível para consulta no GitHub.`,
      solucao: `A implementação${tecnologia} e os detalhes técnicos podem ser explorados diretamente no repositório.`,
      desafios: ['Evoluir a estrutura do projeto mantendo o código legível.', 'Documentar as decisões e funcionalidades à medida que o projeto cresce.'],
      aprendizados: `Prática de desenvolvimento${tecnologia}, organização de código e evolução incremental de um projeto.`,
      stack,
      papel: 'Consulte o repositório público para ver a implementação e o escopo atual.',
      periodo: String(new Date(repo.criadoEm).getFullYear()),
      status: 'Em desenvolvimento',
      prints: [],
      repositorio: repo.url,
      demo: repo.demo ?? '',
      video: '',
      destaque: false,
      ordem: index + 1,
    };
  });

export const projetos: Projeto[] = [...projetosManuais.toSorted((a, b) => a.ordem - b.ordem), ...outrosProjetos];
