<template><span class="status-chip" :class="{ live: online }"><span class="status-dot" aria-hidden="true"></span>{{ label }}</span></template>
<script setup lang="ts">withDefaults(defineProps<{ label: string; online?: boolean }>(), { online: false });</script>
<style scoped>
.status-chip { display: inline-flex; align-items: center; gap: .55rem; width: fit-content; min-height: 2rem; border: 1px solid var(--portfolio-border); border-radius: var(--radius-pill); padding: .35rem .75rem; color: var(--portfolio-text-muted); background: var(--portfolio-surface); font: 500 .72rem var(--portfolio-font-mono); }
.status-dot { width: .45rem; height: .45rem; border-radius: 50%; background: var(--portfolio-text-disabled); }
.live { border-color: color-mix(in srgb, var(--portfolio-online) 28%, var(--portfolio-border)); color: var(--portfolio-text); }
.live .status-dot { background: var(--portfolio-online); box-shadow: 0 0 0 .25rem color-mix(in srgb, var(--portfolio-online) 13%, transparent); }
.live .status-dot { animation: status-pulse 2.3s ease-out infinite; }
@keyframes status-pulse { 50% { box-shadow: 0 0 0 .5rem color-mix(in srgb, var(--portfolio-online) 0%, transparent); } }
</style>
