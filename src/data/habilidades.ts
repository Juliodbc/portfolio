import type { Habilidade } from '@/types/Habilidade';

// O nível fica TODO quando não foi informado, evitando atribuir proficiência sem confirmação.
export const habilidades: Habilidade[] = [
  { nome: 'HTML', area: 'Front-end', nivel: 'TODO' },
  { nome: 'CSS', area: 'Front-end', nivel: 'TODO' },
  { nome: 'JavaScript', area: 'Front-end', nivel: 'TODO' },
  { nome: 'TypeScript', area: 'Front-end', nivel: 'TODO' },
  { nome: 'Vue', area: 'Front-end', nivel: 'TODO' },
  { nome: 'React', area: 'Front-end', nivel: 'TODO' },
  { nome: 'Next.js', area: 'Front-end', nivel: 'TODO' },
  { nome: 'Ionic', area: 'Mobile', nivel: 'TODO' },
  { nome: 'Node.js', area: 'Back-end', nivel: 'TODO' },
  { nome: 'Kotlin', area: 'Mobile', nivel: 'Em estudo' },
  { nome: 'Java', area: 'Back-end', nivel: 'Em estudo' },
  { nome: 'PHP', area: 'Back-end', nivel: 'Em estudo' },
];
