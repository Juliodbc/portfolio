export type StatusProjeto =
  | 'Em desenvolvimento'
  | 'Concluído'
  | 'Em pausa'
  | 'TODO'
  | string;

export interface Projeto {
  id: string;
  titulo: string;
  resumo: string;
  contexto: string;
  solucao: string;
  desafios: string[];
  aprendizados: string;
  stack: string[];
  papel: string;
  periodo: string;
  status: StatusProjeto;
  prints: string[];
  repositorio: string;
  demo: string;
  video: string;
  destaque: boolean;
  ordem: number;
}

export interface ProjetoGithub {
  id: string;
  titulo: string;
  resumo: string;
  linguagem: string | null;
  topicos: string[];
  url: string;
  demo: string | null;
  estrelas: number;
  criadoEm: string;
  atualizadoEm: string;
  semDescricao: boolean;
}
