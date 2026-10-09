<template>
  <RouterLink :to="`/projetos/${project.id}`" class="project-card">
    <div class="project-cover" :class="`cover-${coverIndex}`"><span class="cover-index">{{ String(displayProject.ordem).padStart(2, '0') }}</span><span class="cover-wordmark">{{ wordmark }}</span><span class="cover-arrow" aria-hidden="true">&rarr;</span></div>
    <div class="project-content"><div class="project-topline"><span>{{ displayProject.periodo }}</span><span class="project-status">{{ displayProject.status }}</span></div><h3>{{ displayProject.titulo }}</h3><p class="project-summary">{{ displayProject.resumo }}</p><div class="project-stack"><ChipTecnologia v-for="tech in displayProject.stack.slice(0, 3)" :key="tech" :label="tech" /></div></div>
  </RouterLink>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import ChipTecnologia from '@/components/ChipTecnologia.vue';
import { useLocale } from '@/composables/useLocale';
import type { Projeto } from '@/types/Projeto';
import { localizeProject } from '@/i18n/projectTranslations';
const props = defineProps<{ project: Projeto }>();
const { locale } = useLocale();
const displayProject = computed(() => localizeProject(props.project, locale.value));
const wordmark = computed(() => displayProject.value.titulo.slice(0, 2).toUpperCase());
const coverIndex = computed(() => Math.abs(displayProject.value.titulo.length % 4));
</script>
<style scoped>
.project-card { display: block; overflow: hidden; border: 1px solid var(--portfolio-border); border-radius: var(--radius-card); color: inherit; background: var(--portfolio-surface); text-decoration: none; transition: transform .22s ease, border-color .22s ease, box-shadow .22s ease; }
.project-card:hover { transform: translateY(-4px); border-color: color-mix(in srgb, var(--portfolio-accent) 48%, var(--portfolio-border)); box-shadow: 0 12px 38px var(--portfolio-accent-glow); }
.project-cover { position: relative; display: grid; min-height: 10rem; place-items: center; overflow: hidden; background: radial-gradient(circle at 68% 27%, var(--portfolio-accent-glow), transparent 33%), linear-gradient(135deg, #202024, #121214); }
.project-cover::before,.project-cover::after { position: absolute; width: 11rem; aspect-ratio: 1; border: 1px solid color-mix(in srgb, var(--portfolio-accent) 42%, transparent); border-radius: 50%; content: ''; transform: rotate(-30deg) scaleY(.45); }
.project-cover::after { width: 8rem; border-color: color-mix(in srgb, white 15%, transparent); transform: rotate(35deg) scaleY(.45); }
.cover-1 { background: radial-gradient(circle at 60% 36%, color-mix(in srgb, #35d5c0 18%, transparent), transparent 35%), #14181a; }.cover-2 { background: radial-gradient(circle at 70% 35%, color-mix(in srgb, #a98cff 21%, transparent), transparent 36%), #17141e; }.cover-3 { background: radial-gradient(circle at 60% 35%, color-mix(in srgb, #ffbe5c 15%, transparent), transparent 36%), #1a1714; }
.cover-index,.cover-arrow { position: absolute; top: 1rem; color: var(--portfolio-text-muted); font: .67rem var(--portfolio-font-mono); }.cover-index { left: 1rem; }.cover-arrow { right: 1rem; color: var(--portfolio-accent); font-size: 1.1rem; }
.cover-wordmark { z-index: 1; color: var(--portfolio-text); font: 600 clamp(2rem, 7vw, 3.2rem)/1 var(--portfolio-font-display); letter-spacing: -.08em; text-shadow: 0 4px 30px rgb(0 0 0 / 42%); }
.project-content { padding: 1.1rem 1.15rem 1.2rem; }.project-topline { display: flex; align-items: center; justify-content: space-between; gap: .7rem; color: var(--portfolio-text-muted); font: .65rem var(--portfolio-font-mono); }.project-status { overflow: hidden; max-width: 65%; text-overflow: ellipsis; white-space: nowrap; }
.project-card { position: relative; isolation: isolate; box-shadow: var(--shadow-card); transition: transform .45s cubic-bezier(.2,.8,.2,1), border-color .35s, box-shadow .45s; }
.project-card:hover { transform: translateY(-7px) scale(1.012); box-shadow: var(--shadow-card-hover); }
.project-cover { min-height: clamp(11rem, 19vw, 14rem); transition: filter .4s; }.project-card:hover .project-cover { filter: saturate(1.18); }
.project-cover::before,.project-cover::after { transition: transform .9s cubic-bezier(.2,.8,.2,1), border-color .4s; }
.project-card:hover .project-cover::before { transform: rotate(20deg) scaleY(.52) scale(1.24); }.project-card:hover .project-cover::after { transform: rotate(-25deg) scaleY(.48) scale(1.18); }
.cover-wordmark { transition: transform .45s cubic-bezier(.2,.8,.2,1), letter-spacing .45s; }.project-card:hover .cover-wordmark { transform: scale(1.08); letter-spacing: -.04em; }
.project-card:focus-visible { outline-offset: 5px; }
h3 { margin: .7rem 0 .4rem; font: 600 1.25rem var(--portfolio-font-display); letter-spacing: -.035em; }.project-summary { display: -webkit-box; min-height: 2.5rem; margin: 0; overflow: hidden; color: var(--portfolio-text-muted); font-size: .8rem; line-height: 1.55; -webkit-box-orient: vertical; -webkit-line-clamp: 2; }.project-stack { display: flex; flex-wrap: wrap; gap: .4rem; margin-top: 1rem; }
</style>
