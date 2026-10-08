<template><article class="skill-card"><div class="ring" :class="`level-${ringLevel}`" aria-hidden="true"><span>{{ initials }}</span></div><div class="skill-copy"><h3>{{ name }}</h3><p>{{ level }}</p></div></article></template>
<script setup lang="ts">
import { computed } from 'vue';
const props = defineProps<{ name: string; level: string }>();
const ringLevel = computed(() => props.level === 'Em estudo' ? 'study' : props.level === 'Base' ? 'base' : props.level === 'Intermediário' ? 'mid' : 'todo');
const initials = computed(() => props.name.slice(0, 2).toUpperCase());
</script>
<style scoped>
.skill-card { display: flex; align-items: center; gap: .85rem; min-width: 0; padding: .9rem; border: 1px solid var(--portfolio-border); border-radius: 1.1rem; background: var(--portfolio-surface); }
.ring { position: relative; display: grid; width: 3.25rem; aspect-ratio: 1; flex: 0 0 auto; place-items: center; border-radius: 50%; background: conic-gradient(var(--portfolio-accent) 0 58%, var(--portfolio-border) 58% 100%); }
.ring::before { position: absolute; inset: 4px; border-radius: inherit; background: var(--portfolio-surface); content: ''; }.ring span { position: relative; color: var(--portfolio-text-muted); font: 600 .7rem var(--portfolio-font-mono); }
.level-study { background: conic-gradient(var(--portfolio-accent) 0 38%, var(--portfolio-border) 38% 100%); }.level-mid { background: conic-gradient(var(--portfolio-accent) 0 72%, var(--portfolio-border) 72% 100%); }.level-todo { background: conic-gradient(var(--portfolio-text-disabled) 0 20%, var(--portfolio-border) 20% 100%); }
.skill-copy { min-width: 0; } h3 { margin: 0 0 .25rem; overflow: hidden; color: var(--portfolio-text); font-size: .88rem; text-overflow: ellipsis; white-space: nowrap; } p { margin: 0; color: var(--portfolio-text-muted); font: .67rem var(--portfolio-font-mono); }
</style>
