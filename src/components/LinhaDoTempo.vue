<template><ol class="timeline"><li v-for="item in items" :key="item.id"><span class="timeline-marker" aria-hidden="true"></span><div class="timeline-copy"><span class="timeline-period">{{ item.periodo }}</span><h3>{{ item.titulo }}</h3><p>{{ item.descricao }}</p></div></li></ol></template>
<script setup lang="ts">
import type { EventoDaLinhaDoTempo } from '@/types/EventoDaLinhaDoTempo';
defineProps<{ items: EventoDaLinhaDoTempo[] }>();
</script>
<style scoped>
.timeline { display: grid; gap: 1.25rem; margin: 0; padding: 0; list-style: none; } li { display: grid; grid-template-columns: 1.25rem 1fr; gap: .85rem; padding: .9rem 1rem; border: 1px solid transparent; border-radius: 1rem; transition: transform .3s, border-color .3s, background .3s; } li:hover { transform: translateX(5px); border-color: var(--portfolio-border); background: color-mix(in srgb, var(--portfolio-surface) 68%, transparent); }
.timeline-marker { position: relative; width: .65rem; height: .65rem; margin: .2rem auto 0; border: 2px solid var(--portfolio-background); border-radius: 50%; background: var(--portfolio-accent); box-shadow: 0 0 0 .3rem var(--portfolio-accent-glow), 0 0 18px var(--portfolio-accent-glow); transition: transform .35s; }li:hover .timeline-marker { transform: scale(1.18); } li:not(:last-child) .timeline-marker::after { position: absolute; top: .9rem; left: 50%; width: 1px; height: 4rem; background: linear-gradient(var(--portfolio-border-strong), transparent); content: ''; }
.timeline-period { color: var(--portfolio-accent); font: .68rem var(--portfolio-font-mono); } h3 { margin: .3rem 0; font-size: .95rem; } p { margin: 0; color: var(--portfolio-text-muted); font-size: .8rem; line-height: 1.55; }
</style>
