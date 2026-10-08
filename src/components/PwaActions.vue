<template>
  <div class="pwa-actions">
    <span v-if="!online" class="offline-label" role="status">{{ locale === 'pt' ? 'OFFLINE' : 'OFFLINE' }}</span>
    <button class="utility-button" type="button" :aria-label="locale === 'pt' ? 'Mudar idioma para inglês' : 'Switch language to Portuguese'" @click="toggleLocale">{{ locale === 'pt' ? 'EN' : 'PT' }}</button>
    <button class="utility-button theme-button" type="button" :aria-label="theme === 'dark' ? (locale === 'pt' ? 'Ativar tema claro' : 'Switch to light theme') : (locale === 'pt' ? 'Ativar tema escuro' : 'Switch to dark theme')" @click="toggleTheme">{{ theme === 'dark' ? '☼' : '◐' }}</button>
    <button v-if="canInstall" class="install-button" type="button" @click="install">{{ locale === 'pt' ? 'Instalar' : 'Install' }}</button>
  </div>
</template>
<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { useLocale } from '@/composables/useLocale';
import { useTheme } from '@/composables/useTheme';
interface InstallPrompt extends Event { prompt: () => Promise<void>; userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }> }
const { locale, toggleLocale } = useLocale();
const { theme, toggleTheme } = useTheme();
const online = ref(typeof navigator === 'undefined' ? true : navigator.onLine);
const installPrompt = ref<InstallPrompt | null>(null);
const canInstall = ref(false);
function updateNetwork() { online.value = navigator.onLine; }
function captureInstall(event: Event) { event.preventDefault(); installPrompt.value = event as InstallPrompt; canInstall.value = true; }
async function install() {
  if (!installPrompt.value) return;
  await installPrompt.value.prompt();
  await installPrompt.value.userChoice;
  installPrompt.value = null;
  canInstall.value = false;
}
onMounted(() => { window.addEventListener('online', updateNetwork); window.addEventListener('offline', updateNetwork); window.addEventListener('beforeinstallprompt', captureInstall); });
onBeforeUnmount(() => { window.removeEventListener('online', updateNetwork); window.removeEventListener('offline', updateNetwork); window.removeEventListener('beforeinstallprompt', captureInstall); });
</script>
<style scoped>
.pwa-actions{display:flex;align-items:center;gap:.35rem}.utility-button,.install-button{display:grid;min-width:2.35rem;min-height:2.35rem;place-items:center;border:1px solid var(--portfolio-border);border-radius:var(--radius-pill);padding:0 .55rem;color:var(--portfolio-text-muted);background:var(--portfolio-surface);font:600 .65rem var(--portfolio-font-mono);cursor:pointer}.theme-button{font-size:1rem}.install-button{display:block;border-color:var(--portfolio-accent);color:var(--portfolio-text);background:var(--portfolio-accent);font-family:var(--portfolio-font-body)}.offline-label{color:var(--portfolio-accent);font: .57rem var(--portfolio-font-mono);letter-spacing:.08em}
</style>
