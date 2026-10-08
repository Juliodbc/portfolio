import type { Perfil } from '@/types/Perfil';
import type { EventoDaLinhaDoTempo } from '@/types/EventoDaLinhaDoTempo';
import type { Locale } from '@/composables/useLocale';

export function localizeProfile(profile: Perfil, locale: Locale): Perfil {
  if (locale !== 'en') return profile;
  return { ...profile, cargo: 'Full Stack Developer in Training' };
}

const englishTimeline: Record<string, string> = {
  'cisco-seguranca-digital': 'Digital Security course — Cisco',
  'senac-tecnico-informatica': 'IT Technician — Senac Joinville',
};

export function localizeTimeline(item: EventoDaLinhaDoTempo, locale: Locale): EventoDaLinhaDoTempo {
  return locale === 'en' ? { ...item, titulo: englishTimeline[item.id] ?? item.titulo } : item;
}
