<template><ol class="timeline"><li v-for="item in items" :key="item.id"><span class="timeline-marker" aria-hidden="true"></span><div class="timeline-copy"><span class="timeline-period">{{ item.periodo }}</span><h3>{{ item.titulo }}</h3><p>{{ item.descricao }}</p></div></li></ol></template>
<script setup lang="ts">
import type { EventoDaLinhaDoTempo } from '@/types/EventoDaLinhaDoTempo';
defineProps<{ items: EventoDaLinhaDoTempo[] }>();
</script>
<style scoped>
.timeline { display: grid; gap: 1.25rem; margin: 0; padding: 0; list-style: none; } li { display: grid; grid-template-columns: 1.25rem 1fr; gap: .85rem; }
.timeline-marker { position: relative; width: .65rem; height: .65rem; margin: .2rem auto 0; border-radius: 50%; background: var(--portfolio-accent); box-shadow: 0 0 0 .3rem var(--portfolio-accent-glow); } li:not(:last-child) .timeline-marker::after { position: absolute; top: .9rem; left: 50%; width: 1px; height: 4rem; background: var(--portfolio-border); content: ''; }
.timeline-period { color: var(--portfolio-accent); font: .68rem var(--portfolio-font-mono); } h3 { margin: .3rem 0; font-size: .95rem; } p { margin: 0; color: var(--portfolio-text-muted); font-size: .8rem; line-height: 1.55; }
</style>
