import type { Projeto } from '@/types/Projeto';
import type { Locale } from '@/composables/useLocale';

const english: Record<string, Partial<Projeto>> = {
  vaultpos: {
    resumo: 'Mobile point-of-sale SaaS for bars, restaurants, and small businesses.',
    contexto: 'Small businesses often rely on paper order slips or expensive, heavy systems. VaultPOS aims to be a lightweight POS built for a phone, so owners can use it at the counter or at the table.',
    solucao: 'A mobile app built with Ionic Vue 3 and TypeScript, with state managed by Pinia and a Supabase backend. I defined the full database schema, migrations, TypeScript types, and the design system foundation in Figma before building the screens. Development moves screen by screen, from prototype to code.',
    desafios: ['Model the database for sales, products, and tables so it can scale as SaaS.', 'Choose between keeping Supabase or using local SQLite with the venue’s offline needs in mind.', 'Work with a designer (André), backend support (Rafael), and documentation support (Vinícius).'],
    aprendizados: 'Plan data and types before screens, organize a design system, and coordinate a design-to-code workflow.',
    papel: 'Frontend and mobile development; data architecture.', status: 'In development',
  },
  'burro-bluetooth': {
    resumo: 'The Burro card game for Android phones, played over Bluetooth without an internet connection.',
    contexto: 'A three-person team project combining multiplayer game logic with direct communication between devices.',
    solucao: 'An app built with Vue 3, Ionic, Capacitor, and TypeScript. One player hosts a room while others discover it and request to join; the host validates each move. Game logic is separate from the interface, exchanged messages use a defined and validated format, and match history is stored in SQLite on the phone.',
    desafios: ['Discover rooms over Bluetooth (the reference plugin only works as a central, so we investigated how the host could advertise a match).', 'Keep moves synchronized and block out-of-turn moves.', 'Handle disconnections, permissions, and Bluetooth being turned off.'],
    aprendizados: 'Integrate native capabilities with Capacitor, design a message protocol, validate input, and test game logic in isolation.',
    papel: 'Development as part of a three-person team using pull requests. TODO',
  },
  smartevent: {
    solucao: 'A Vue app using Ionic and Capacitor, written in TypeScript, with automated Cypress tests and ESLint. TODO',
  },
  'galeria-de-fotos': {
    resumo: 'A photo gallery app that uses the phone camera and storage, with login and a dark theme.',
    contexto: 'A course project to practice native device capabilities: camera, gallery, sharing, location, and permissions.',
    solucao: 'An Ionic Vue and TypeScript app with sign-up and login; the home screen is available only after signing in. A floating button opens the camera or gallery, photos appear in a grid, and each can be deleted or shared through WhatsApp, Telegram, and other apps. The About screen shows the app version, terms of use and privacy, the user’s location (latitude, longitude, and altitude), a dark theme toggle saved in Preferences, and an offline notice.',
    desafios: ['Request and handle camera, gallery, and location permissions.', 'Manage the photo list in memory.', 'Save the theme preference and detect connectivity.'],
    aprendizados: 'Use Capacitor plugins for camera, geolocation, sharing, and preferences; protect routes; and organize an Ionic Vue project.',
    papel: 'Full development TODO',
  },
};

export function localizeProject(project: Projeto, locale: Locale): Projeto {
  const overrides = locale === 'en' ? english[project.id] : undefined;
  return { ...project, ...overrides };
}

export function localizeStatus(value: string, locale: Locale): string {
  if (locale === 'en' && value === 'Em desenvolvimento') return 'In development';
  if (locale === 'en' && value === 'Concluído') return 'Completed';
  return value;
}
