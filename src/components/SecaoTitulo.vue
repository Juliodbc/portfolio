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
.section-heading { position: relative; display: flex; align-items: end; justify-content: space-between; gap: var(--space-3); margin: 0 0 var(--space-3); padding-bottom: .9rem; border-bottom: 1px solid color-mix(in srgb, var(--portfolio-border) 72%, transparent); }
.section-heading::after { position: absolute; bottom: -1px; left: 0; width: 2.6rem; height: 1px; background: var(--portfolio-accent); box-shadow: 0 0 14px var(--portfolio-accent-glow); content: ''; transition: width .45s cubic-bezier(.2,.8,.2,1); }
.section-heading:hover::after { width: 5.5rem; }
.eyebrow { margin: 0 0 .55rem; color: var(--portfolio-accent); font: 600 .7rem var(--portfolio-font-mono); letter-spacing: .15em; text-transform: uppercase; }
h2 { margin: 0; font: 600 clamp(1.5rem, 3vw, 2.15rem)/1.1 var(--portfolio-font-display); letter-spacing: -.04em; }
h2 { text-wrap: balance; }
</style>
