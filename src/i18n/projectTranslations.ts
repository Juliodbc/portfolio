import type { Projeto } from '@/types/Projeto';
import type { Locale } from '@/composables/useLocale';

const english: Record<string, Partial<Projeto>> = {
  vaultpos: {
    resumo: 'Mobile point-of-sale SaaS for bars, restaurants, and small businesses.',
    contexto: 'Small businesses often rely on paper order slips or expensive, complex systems. VaultPOS is being designed as a lightweight point of sale that can be used at the counter or at the table.',
    solucao: 'A mobile app built with Ionic Vue 3 and TypeScript, with state managed by Pinia and a Supabase backend. The database schema, migrations, TypeScript types, and design system foundation are being developed alongside the screens.',
    desafios: ['Model sales, products, and tables for a SaaS application.', 'Evaluate offline data options for venues with unreliable connectivity.', 'Coordinate design, backend, and documentation work across a small team.'],
    aprendizados: 'Planning data and types before screens, organizing a design system, and coordinating a design-to-code workflow.',
    papel: 'Frontend and mobile development; data architecture.',
    periodo: 'Current project',
    status: 'In development',
  },
  'burro-bluetooth': {
    resumo: 'The Burro card game for Android phones, played over Bluetooth without an internet connection.',
    contexto: 'A three-person team project combining multiplayer game logic with direct communication between devices.',
    solucao: 'An app built with Vue 3, Ionic, Capacitor, and TypeScript. One player hosts a room while others discover it and request to join; the host validates each move. Game logic is separate from the interface, messages use a defined and validated format, and match history is stored in SQLite on the phone.',
    desafios: ['Discover rooms over Bluetooth and support the host advertising a match.', 'Keep moves synchronized and block out-of-turn moves.', 'Handle disconnections, permissions, and Bluetooth being turned off.'],
    aprendizados: 'Integrating native capabilities with Capacitor, designing a message protocol, validating input, and testing game logic in isolation.',
    papel: 'Development as part of a three-person team using pull requests.',
    periodo: 'Academic team project',
    status: 'Completed',
  },
  smartevent: {
    resumo: 'Cross-platform event app built with Vue, Ionic, and Capacitor.',
    contexto: 'A project to practice building a mobile-friendly event interface and organizing application flows with Vue and Ionic.',
    solucao: 'An application written in TypeScript with Vue, Ionic, and Capacitor. Cypress tests cover key flows, and ESLint keeps the codebase consistent.',
    desafios: ['Organize screens and navigation for mobile use.', 'Keep components and styles consistent across the app.', 'Validate key flows with automated Cypress tests.'],
    aprendizados: 'Practice with Vue, Ionic, and Capacitor, TypeScript code organization, and automated checks with Cypress.',
    papel: 'Interface development and test setup.',
    periodo: 'Academic project',
    status: 'Completed',
  },
  'galeria-de-fotos': {
    resumo: 'A photo gallery app that uses the phone camera and storage, with login and a dark theme.',
    contexto: 'A course project to practice native device capabilities: camera, gallery, sharing, location, and permissions.',
    solucao: 'An Ionic Vue and TypeScript app with sign-up and login; the home screen is available only after signing in. A floating button opens the camera or gallery, photos appear in a grid, and each can be deleted or shared through messaging apps. The About screen shows app information, user location, saved theme preferences, and an offline notice.',
    desafios: ['Request and handle camera, gallery, and location permissions.', 'Manage the photo list in memory.', 'Save the theme preference and detect connectivity.'],
    aprendizados: 'Using Capacitor plugins for camera, geolocation, sharing, and preferences; protecting routes; and organizing an Ionic Vue project.',
    papel: 'Full application development as a course project.',
    periodo: 'Course project',
    status: 'Completed',
  },
};

export function localizeProject(project: Projeto, locale: Locale): Projeto {
  if (locale !== 'en') return project;
  const curated = english[project.id];
  if (curated) return { ...project, ...curated };

  const technologies = project.stack.length ? project.stack.slice(0, 2).join(' and ') : 'software';
  const year = project.periodo;
  return {
    ...project,
    resumo: `${project.titulo} is a ${technologies} project published on GitHub.`,
    contexto: `A public repository for ${project.titulo}, available to explore and review on GitHub.`,
    solucao: `The source code and implementation details for this ${technologies} project are available in the repository.`,
    desafios: ['Review the existing code and identify opportunities to improve structure and usability.', 'Continue developing and documenting the project as its scope grows.'],
    aprendizados: `Practice organizing a ${technologies} codebase and iterating on a project through implementation and review.`,
    papel: 'See the public repository for implementation details.',
    periodo: year,
    status: localizeStatus(project.status, locale),
  };
}

export function localizeStatus(value: string, locale: Locale): string {
  if (locale === 'en' && value === 'Em desenvolvimento') return 'In development';
  if (locale === 'en' && value === 'Concluído') return 'Completed';
  return value;
}
