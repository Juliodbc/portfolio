<template><nav class="floating-tabs" :aria-label="t('nav.main')"><RouterLink v-for="item in items" :key="item.to" :to="item.to" class="tab-link" :class="{ active: isActive(item.to) }" :aria-current="isActive(item.to) ? 'page' : undefined"><ion-icon :icon="item.icon" aria-hidden="true" /><span>{{ t(item.key) }}</span></RouterLink></nav></template>
<script setup lang="ts">
import { IonIcon } from '@ionic/vue';
import { callOutline, homeOutline, personOutline, layersOutline } from 'ionicons/icons';
import { useRoute } from 'vue-router';
import { useLocale } from '@/composables/useLocale';
const route = useRoute();
const { t } = useLocale();
const items = [{ key: 'nav.home', to: '/inicio', icon: homeOutline }, { key: 'nav.projects', to: '/projetos', icon: layersOutline }, { key: 'nav.about', to: '/sobre', icon: personOutline }, { key: 'nav.contact', to: '/contato', icon: callOutline }];
function isActive(path: string) { return route.path === path || (path === '/projetos' && route.path.startsWith('/projetos/')); }
</script>
<style scoped>
.floating-tabs { position: fixed; z-index: 20; right: 50%; bottom: max(1rem, env(safe-area-inset-bottom)); display: flex; width: min(94vw, 27rem); justify-content: space-between; gap: .25rem; transform: translateX(50%); border: 1px solid color-mix(in srgb, var(--portfolio-border-strong) 65%, transparent); border-radius: var(--radius-pill); padding: .4rem; background: color-mix(in srgb, var(--portfolio-surface-raised) 84%, transparent); box-shadow: 0 16px 52px rgb(0 0 0 / 32%), inset 0 1px 0 rgb(255 255 255 / 5%); backdrop-filter: blur(22px) saturate(145%); }
.tab-link { display: flex; min-width: 0; min-height: 2.75rem; flex: 1; align-items: center; justify-content: center; gap: .4rem; border-radius: var(--radius-pill); color: var(--portfolio-text-muted); text-decoration: none; font-size: .74rem; font-weight: 600; transition: background .35s, color .25s, transform .25s; }.tab-link ion-icon { font-size: 1.05rem; transition: transform .3s cubic-bezier(.2,.8,.2,1); }.tab-link:hover { color: var(--portfolio-text); transform: translateY(-1px); }.tab-link:hover ion-icon { transform: translateY(-2px) scale(1.08); }.tab-link.active { color: var(--portfolio-on-accent); background: linear-gradient(135deg, color-mix(in srgb, var(--portfolio-accent) 88%, white), var(--portfolio-accent)); box-shadow: 0 5px 18px var(--portfolio-accent-glow), inset 0 1px 0 rgb(255 255 255 / 22%); }
@media (max-width: 380px) { .tab-link { flex-direction: column; gap: .05rem; font-size: .62rem; } }
</style>
