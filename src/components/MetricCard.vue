<template><article ref="element" class="metric-card"><span class="metric-value">{{ displayValue }}</span><span class="metric-label">{{ label }}</span><span class="metric-mark" aria-hidden="true">&nearr;</span></article></template>
<script setup lang="ts">
import { computed } from 'vue';
import { useCountUp } from '@/composables/useCountUp';
const props = defineProps<{ value: string | number; label: string }>();
const numericValue = Number(props.value);
const { value, element } = useCountUp(Number.isFinite(numericValue) ? numericValue : 0);
const displayValue = computed(() => String(value.value).padStart(String(props.value).length, '0'));
</script>
<style scoped>
.metric-card { position: relative; display: grid; gap: .3rem; min-height: 6.8rem; padding: 1.1rem 1.25rem; overflow: hidden; border: 1px solid var(--portfolio-border); border-radius: var(--radius-card); background: linear-gradient(145deg, var(--portfolio-surface-raised), var(--portfolio-surface)); }
.metric-value { color: var(--portfolio-accent); font: 600 clamp(1.65rem, 4vw, 2.3rem)/1 var(--portfolio-font-display); letter-spacing: -.06em; }
.metric-label { color: var(--portfolio-text-muted); font-size: .78rem; }.metric-mark { position: absolute; top: 1rem; right: 1rem; color: var(--portfolio-text-disabled); }
</style>
