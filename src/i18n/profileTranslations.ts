import type { Perfil } from '@/types/Perfil';
import type { EventoDaLinhaDoTempo } from '@/types/EventoDaLinhaDoTempo';
import type { Locale } from '@/composables/useLocale';

export function localizeProfile(profile: Perfil, locale: Locale): Perfil {
  if (locale !== 'en') return profile;
  return {
    ...profile,
    cargo: 'Full Stack Developer in Training',
    bio: 'I am an IT Technician student at Senac Joinville and a developer in training. I have been practicing web and mobile development with Vue, Ionic, and TypeScript, building projects to turn ideas into clear, useful interfaces.',
    comoTrabalho: 'I like to understand the problem before starting, break work into small steps, and keep code organized. In my projects, I practice reusable components, responsive layouts, and validation of key flows. I am open to learning from code reviews and collaborating with others.',
    objetivo: 'I am looking for an internship or junior role in web or mobile development where I can apply what I know, learn from an experienced team, and contribute to useful solutions. I am especially interested in frontend work and applications built with Vue, TypeScript, and Ionic.',
    curriculo: 'Not available yet',
  };
}

const englishTimeline: Record<string, { titulo: string; descricao: string; periodo: string }> = {
  'cisco-seguranca-digital': {
    titulo: 'Digital Security — Cisco',
    descricao: 'Complementary training in digital security, covering practical ways to recognize online risks and protect accounts, devices, and personal information.',
    periodo: 'Complementary course',
  },
  'senac-tecnico-informatica': {
    titulo: 'IT Technician — Senac Joinville',
    descricao: 'Technical education in Information Technology, building a foundation in computing, programming logic, software development, and problem solving.',
    periodo: 'Technical education',
  },
};

export function localizeTimeline(item: EventoDaLinhaDoTempo, locale: Locale): EventoDaLinhaDoTempo {
  const translation = locale === 'en' ? englishTimeline[item.id] : undefined;
  return translation ? { ...item, ...translation } : item;
}
