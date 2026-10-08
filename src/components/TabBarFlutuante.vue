<template><nav class="floating-tabs" aria-label="Navegação principal"><RouterLink v-for="item in items" :key="item.to" :to="item.to" class="tab-link" :class="{ active: isActive(item.to) }" :aria-current="isActive(item.to) ? 'page' : undefined"><ion-icon :icon="item.icon" aria-hidden="true" /><span>{{ item.label }}</span></RouterLink></nav></template>
<script setup lang="ts">
import { IonIcon } from '@ionic/vue';
import { callOutline, homeOutline, personOutline, layersOutline } from 'ionicons/icons';
import { useRoute } from 'vue-router';
const route = useRoute();
const items = [{ label: 'Início', to: '/inicio', icon: homeOutline }, { label: 'Projetos', to: '/projetos', icon: layersOutline }, { label: 'Sobre', to: '/sobre', icon: personOutline }, { label: 'Contato', to: '/contato', icon: callOutline }];
function isActive(path: string) { return route.path === path || (path === '/projetos' && route.path.startsWith('/projetos/')); }
</script>
<style scoped>
.floating-tabs { position: fixed; z-index: 20; right: 50%; bottom: max(1rem, env(safe-area-inset-bottom)); display: flex; width: min(94vw, 27rem); justify-content: space-between; gap: .25rem; transform: translateX(50%); border: 1px solid var(--portfolio-border); border-radius: var(--radius-pill); padding: .35rem; background: color-mix(in srgb, var(--portfolio-surface-raised) 92%, transparent); box-shadow: 0 12px 45px rgb(0 0 0 / 36%); backdrop-filter: blur(18px); }
.tab-link { display: flex; min-width: 0; min-height: 2.75rem; flex: 1; align-items: center; justify-content: center; gap: .4rem; border-radius: var(--radius-pill); color: var(--portfolio-text-muted); text-decoration: none; font-size: .74rem; font-weight: 600; transition: background .2s, color .2s; }.tab-link ion-icon { font-size: 1.05rem; }.tab-link.active { color: var(--portfolio-text); background: var(--portfolio-accent); }
@media (max-width: 380px) { .tab-link { flex-direction: column; gap: .05rem; font-size: .62rem; } }
</style>
