import { ref, watch } from 'vue';
import { messages, type TranslationKey } from '@/i18n/messages';

export type Locale = 'pt' | 'en';
const savedLocale = typeof localStorage === 'undefined' ? null : localStorage.getItem('portfolio-locale');
export const activeLocale = ref<Locale>(savedLocale === 'en' ? 'en' : 'pt');

watch(activeLocale, (locale) => {
  if (typeof document !== 'undefined') {
    document.documentElement.lang = locale === 'pt' ? 'pt-BR' : 'en';
    document.title = messages[locale].meta_title;
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', messages[locale].meta_title);
    document.querySelector('meta[name="description"]')?.setAttribute('content', messages[locale].meta_description);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', messages[locale].meta_description);
  }
  if (typeof localStorage !== 'undefined') localStorage.setItem('portfolio-locale', locale);
}, { immediate: true });

export function useLocale() {
  function t(key: TranslationKey | string): string {
    const dictionaryKey = key.replaceAll('.', '_') as TranslationKey;
    return messages[activeLocale.value][dictionaryKey] ?? key;
  }
  function toggleLocale() { activeLocale.value = activeLocale.value === 'pt' ? 'en' : 'pt'; }
  return { locale: activeLocale, t, toggleLocale };
}
