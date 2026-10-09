export type NivelHabilidade = 'Base' | 'Intermediário' | 'Em estudo';
export type AreaHabilidade = 'Front-end' | 'Mobile' | 'Back-end' | 'Ferramentas';

export interface Habilidade {
  nome: string;
  area: AreaHabilidade;
  nivel: NivelHabilidade;
}
