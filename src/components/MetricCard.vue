<template><article class="metric-card"><span class="metric-value">{{ value }}</span><span class="metric-label">{{ label }}</span><span class="metric-mark" aria-hidden="true">↗</span></article></template>
<script setup lang="ts">defineProps<{ value: string | number; label: string }>();</script>
<style scoped>
.metric-card { position: relative; display: grid; gap: .3rem; min-height: 6.8rem; padding: 1.1rem 1.25rem; overflow: hidden; border: 1px solid var(--portfolio-border); border-radius: var(--radius-card); background: linear-gradient(145deg, var(--portfolio-surface-raised), var(--portfolio-surface)); }
.metric-value { color: var(--portfolio-accent); font: 600 clamp(1.65rem, 4vw, 2.3rem)/1 var(--portfolio-font-display); letter-spacing: -.06em; }
.metric-label { color: var(--portfolio-text-muted); font-size: .78rem; }.metric-mark { position: absolute; top: 1rem; right: 1rem; color: var(--portfolio-text-disabled); }
</style>
