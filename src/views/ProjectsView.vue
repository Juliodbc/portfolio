<template>
  <PageFrame>
    <div class="page-intro"><p class="eyebrow">03 / {{ t('projects.eyebrow') }}</p><h1>{{ t('projects.title') }}</h1><p class="intro-copy">{{ t('projects.subtitle') }}</p></div>
    <section class="filters section-block" :aria-label="t('projects.eyebrow')"><label class="search-box"><span aria-hidden="true">&#8981;</span><input v-model="query" type="search" :placeholder="t('projects.search')" :aria-label="t('projects.search')" /></label><div class="filter-row"><button v-for="tech in technologies" :key="tech" class="filter-chip" :class="{ selected: selectedTech === tech }" type="button" @click="selectedTech = tech">{{ tech }}</button></div><p class="results-count">{{ filteredProjects.length }} {{ t('projects.count') }}</p></section>
    <section class="project-grid" aria-live="polite"><CardProjeto v-for="projeto in filteredProjects" :key="projeto.id" :project="projeto" v-reveal /><div v-if="!filteredProjects.length" class="empty-state surface-card"><p class="eyebrow">{{ t('projects.emptyLabel') }}</p><h2>{{ t('projects.empty') }}</h2><button type="button" class="reset-button" @click="resetFilters">{{ t('projects.clear') }}</button></div></section>
  </PageFrame>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue';
import CardProjeto from '@/components/CardProjeto.vue';
import PageFrame from '@/components/PageFrame.vue';
import { useLocale } from '@/composables/useLocale';
import { projetos } from '@/data/projetos';
import { localizeProject } from '@/i18n/projectTranslations';
const { locale, t } = useLocale();
const query = ref('');
const selectedTech = ref('');
const allLocalizedProjects = computed(() => projetos.map((projeto) => localizeProject(projeto, locale.value)));
const technologies = computed(() => [t('projects.all'), ...new Set(allLocalizedProjects.value.flatMap((projeto) => projeto.stack))]);
const filteredProjects = computed(() => {
  const needle = query.value.trim().toLocaleLowerCase(locale.value === 'pt' ? 'pt-BR' : 'en');
  return allLocalizedProjects.value.filter((projeto) => {
    const matchesQuery = !needle || [projeto.titulo, projeto.resumo, ...projeto.stack].join(' ').toLocaleLowerCase().includes(needle);
    const matchesTech = !selectedTech.value || selectedTech.value === t('projects.all') || projeto.stack.includes(selectedTech.value);
    return matchesQuery && matchesTech;
  });
});
function resetFilters() { query.value = ''; selectedTech.value = ''; }
</script>
<style scoped>
.page-intro{max-width:48rem;padding-top:2rem}.page-intro h1{margin:.8rem 0;font:600 clamp(2.8rem,9vw,5.2rem)/.98 var(--portfolio-font-display);letter-spacing:-.08em}.page-intro h1 span{color:var(--portfolio-accent)}.intro-copy{color:var(--portfolio-text-muted);line-height:1.6}
.filters{display:grid;gap:1rem;margin-bottom:1.5rem}.search-box{display:flex;min-height:3rem;align-items:center;gap:.65rem;border:1px solid var(--portfolio-border);border-radius:1rem;padding:0 .9rem;background:var(--portfolio-surface)}.search-box span{color:var(--portfolio-accent);font-size:1.3rem}.search-box input{width:100%;border:0;outline:0;color:var(--portfolio-text);background:transparent;font-size:.85rem}.search-box input::placeholder{color:var(--portfolio-text-disabled)}.filter-row{display:flex;gap:.5rem;overflow-x:auto;padding:.1rem .1rem .4rem}.filter-chip{min-height:2.75rem;flex:0 0 auto;border:1px solid var(--portfolio-border);border-radius:var(--radius-pill);padding:.4rem .8rem;color:var(--portfolio-text-muted);background:transparent;font-size:.72rem;cursor:pointer}.filter-chip.selected{border-color:var(--portfolio-accent);color:white;background:var(--portfolio-accent)}.results-count{margin:0;color:var(--portfolio-text-disabled);font: .65rem var(--portfolio-font-mono)}.empty-state{grid-column:1/-1}.empty-state h2{font:600 1.4rem var(--portfolio-font-display)}.reset-button{min-height:2.75rem;border:0;color:var(--portfolio-accent);background:none;cursor:pointer}
</style>
