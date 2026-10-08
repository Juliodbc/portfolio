<template>
  <header class="section-heading">
    <div><p v-if="eyebrow" class="eyebrow">{{ eyebrow }}</p><h2>{{ title }}</h2></div>
    <slot />
  </header>
</template>
<script setup lang="ts">
defineProps<{ title: string; eyebrow?: string }>();
</script>
<style scoped>
.section-heading { display: flex; align-items: end; justify-content: space-between; gap: var(--space-3); margin: 0 0 var(--space-3); }
.eyebrow { margin: 0 0 .55rem; color: var(--portfolio-accent); font: 600 .7rem var(--portfolio-font-mono); letter-spacing: .15em; text-transform: uppercase; }
h2 { margin: 0; font: 600 clamp(1.5rem, 3vw, 2.15rem)/1.1 var(--portfolio-font-display); letter-spacing: -.04em; }
</style>
