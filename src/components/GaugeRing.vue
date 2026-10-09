<template><article class="skill-card"><div class="ring" :class="`level-${ringLevel}`" aria-hidden="true"><span>{{ initials }}</span></div><div class="skill-copy"><h3>{{ name }}</h3><p>{{ displayLevel }}</p></div></article></template>
<script setup lang="ts">
import { computed } from 'vue';
import { useLocale } from '@/composables/useLocale';
const props = defineProps<{ name: string; level: string }>();
const { t } = useLocale();
const ringLevel = computed(() => props.level === 'Em estudo' ? 'study' : props.level === 'Base' ? 'base' : props.level === 'Intermediário' ? 'mid' : 'todo');
const initials = computed(() => props.name.slice(0, 2).toUpperCase());
const displayLevel = computed(() => props.level === 'Em estudo' ? t('level.studying') : props.level === 'Base' ? t('level.base') : props.level === 'Intermediário' ? t('level.intermediate') : props.level);
</script>
<style scoped>
.skill-card { display: flex; align-items: center; gap: .85rem; min-width: 0; padding: .9rem; border: 1px solid var(--portfolio-border); border-radius: 1.1rem; background: color-mix(in srgb, var(--portfolio-surface) 88%, transparent); box-shadow: var(--shadow-card); transition: transform .35s cubic-bezier(.2,.8,.2,1), border-color .3s, box-shadow .35s; }.skill-card:hover { transform: translateY(-4px); border-color: color-mix(in srgb, var(--portfolio-accent) 42%, var(--portfolio-border)); box-shadow: var(--shadow-card-hover); }
.ring { position: relative; display: grid; width: 3.25rem; aspect-ratio: 1; flex: 0 0 auto; place-items: center; border-radius: 50%; background: conic-gradient(var(--portfolio-accent) 0 58%, var(--portfolio-border) 58% 100%); transition: transform .5s cubic-bezier(.2,.8,.2,1), filter .3s; }.skill-card:hover .ring { transform: rotate(24deg) scale(1.06); filter: drop-shadow(0 0 9px var(--portfolio-accent-glow)); }
.ring::before { position: absolute; inset: 4px; border-radius: inherit; background: var(--portfolio-surface); content: ''; }.ring span { position: relative; color: var(--portfolio-text-muted); font: 600 .7rem var(--portfolio-font-mono); }
.level-study { background: conic-gradient(var(--portfolio-accent) 0 38%, var(--portfolio-border) 38% 100%); }.level-mid { background: conic-gradient(var(--portfolio-accent) 0 72%, var(--portfolio-border) 72% 100%); }.level-todo { background: conic-gradient(var(--portfolio-text-disabled) 0 20%, var(--portfolio-border) 20% 100%); }
.skill-copy { min-width: 0; } h3 { margin: 0 0 .25rem; overflow: hidden; color: var(--portfolio-text); font-size: .88rem; text-overflow: ellipsis; white-space: nowrap; } p { margin: 0; color: var(--portfolio-text-muted); font: .67rem var(--portfolio-font-mono); }
.skill-card:hover .ring span { transform: rotate(-24deg); }.ring span { transition: transform .5s cubic-bezier(.2,.8,.2,1); }
</style>
