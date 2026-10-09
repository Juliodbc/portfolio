import { ref, watch } from 'vue';
export type Theme = 'dark' | 'light';
const initial = typeof localStorage === 'undefined' ? null : localStorage.getItem('portfolio-theme');
export const activeTheme = ref<Theme>(initial === 'light' ? 'light' : 'dark');

watch(activeTheme, (theme) => {
  if (typeof document !== 'undefined') document.documentElement.classList.toggle('theme-light', theme === 'light');
  if (typeof document !== 'undefined') document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'light' ? '#f6f3ef' : '#0a0a0c');
  if (typeof localStorage !== 'undefined') localStorage.setItem('portfolio-theme', theme);
}, { immediate: true });

export function useTheme() {
  function toggleTheme() { activeTheme.value = activeTheme.value === 'dark' ? 'light' : 'dark'; }
  return { theme: activeTheme, toggleTheme };
}
