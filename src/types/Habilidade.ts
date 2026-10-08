export type NivelHabilidade = 'Base' | 'Intermediário' | 'Em estudo' | 'TODO';
export type AreaHabilidade = 'Front-end' | 'Mobile' | 'Back-end' | 'Ferramentas';

export interface Habilidade {
  nome: string;
  area: AreaHabilidade;
  nivel: NivelHabilidade;
}
