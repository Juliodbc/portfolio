<template><span class="tech-chip">{{ label }}</span></template>
<script setup lang="ts">defineProps<{ label: string }>();</script>
<style scoped>
.tech-chip { display: inline-flex; align-items: center; min-height: 1.8rem; border: 1px solid var(--portfolio-border); border-radius: var(--radius-pill); padding: .2rem .65rem; color: var(--portfolio-text-muted); font: 500 .68rem var(--portfolio-font-mono); white-space: nowrap; }
</style>
