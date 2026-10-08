<template>
  <PageFrame>
    <div v-if="project" class="detail-page">
      <RouterLink to="/projetos" class="back-link"><span aria-hidden="true">&larr;</span> {{ t('detail.back') }}</RouterLink>
      <header class="detail-header"><div><p class="eyebrow">{{ t('detail.case') }} <span>/ {{ project.periodo }}</span></p><h1>{{ project.titulo }}</h1><p class="detail-summary">{{ project.resumo }}</p></div><StatusChip :label="project.status" /></header>
      <div class="detail-meta surface-card"><div><span>{{ t('detail.role') }}</span><p>{{ project.papel }}</p></div><div><span>{{ t('detail.period') }}</span><p>{{ project.periodo }}</p></div><div class="meta-stack"><span>STACK</span><div class="tech-list"><ChipTecnologia v-for="tech in project.stack" :key="tech" :label="tech" /></div></div></div>
      <div class="case-grid section-block"><section class="case-copy"><p class="eyebrow">01 / {{ t('detail.context') }}</p><p>{{ project.contexto }}</p></section><section class="case-copy"><p class="eyebrow">02 / {{ t('detail.solution') }}</p><p>{{ project.solucao }}</p></section><section class="case-copy"><p class="eyebrow">03 / {{ t('detail.challenges') }}</p><ul><li v-for="(challenge, index) in project.desafios" :key="index">{{ challenge }}</li></ul></section><section class="case-copy"><p class="eyebrow">04 / {{ t('detail.learning') }}</p><p>{{ project.aprendizados }}</p></section></div>
      <section class="section-block"><SecaoTitulo :title="t('detail.gallery')" :eyebrow="t('detail.images')" /><div v-if="project.prints.length" class="gallery"><img v-for="image in project.prints" :key="image" :src="image" :alt="`${project.titulo} screenshot`" loading="lazy" /></div><p v-else class="gallery-empty">{{ t('detail.noImages') }}</p></section>
      <section class="detail-actions section-block"><div><p class="eyebrow">{{ t('detail.more') }}</p><h2>{{ t('detail.live') }}</h2></div><div class="button-row"><BotaoContato v-if="validLink(project.repositorio)" :label="t('detail.repo')" :href="project.repositorio" :icon="logoGithub" :external="true" /><BotaoContato v-if="validLink(project.demo)" :label="t('detail.demo')" :href="project.demo" :icon="openOutline" :external="true" /><BotaoContato v-if="validLink(project.video)" :label="t('detail.video')" :href="project.video" :icon="playCircleOutline" :external="true" /><span v-if="!validLink(project.repositorio) && !validLink(project.demo) && !validLink(project.video)" class="missing-link">{{ t('detail.linksTodo') }}</span></div></section>
      <nav class="project-pagination" :aria-label="t('detail.case')"><RouterLink v-if="previous" :to="`/projetos/${previous.id}`">&larr; <span>{{ t('detail.prev') }}</span><b>{{ previous.titulo }}</b></RouterLink><span v-else></span><RouterLink v-if="next" :to="`/projetos/${next.id}`" class="next">{{ t('detail.next') }} &rarr;<b>{{ next.titulo }}</b></RouterLink></nav>
    </div>
    <div v-else class="not-found surface-card"><p class="eyebrow">{{ t('detail.notFound') }}</p><h1>{{ t('detail.notFoundTitle') }}</h1><RouterLink to="/projetos" class="section-link">{{ t('detail.backToProjects') }} <span>&rarr;</span></RouterLink></div>
  </PageFrame>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import BotaoContato from '@/components/BotaoContato.vue';
import ChipTecnologia from '@/components/ChipTecnologia.vue';
import PageFrame from '@/components/PageFrame.vue';
import SecaoTitulo from '@/components/SecaoTitulo.vue';
import StatusChip from '@/components/StatusChip.vue';
import { useLocale } from '@/composables/useLocale';
import { projetos } from '@/data/projetos';
import { localizeProject } from '@/i18n/projectTranslations';
import { logoGithub, openOutline, playCircleOutline } from 'ionicons/icons';
const route = useRoute();
const { locale, t } = useLocale();
const sourceProject = computed(() => projetos.find((item) => item.id === String(route.params.id)));
const project = computed(() => sourceProject.value ? localizeProject(sourceProject.value, locale.value) : undefined);
const currentIndex = computed(() => projetos.findIndex((item) => item.id === String(route.params.id)));
const previous = computed(() => currentIndex.value > 0 ? localizeProject(projetos[currentIndex.value - 1], locale.value) : undefined);
const next = computed(() => currentIndex.value >= 0 && currentIndex.value < projetos.length - 1 ? localizeProject(projetos[currentIndex.value + 1], locale.value) : undefined);
const validLink = (value: string) => /^https?:\/\//i.test(value);
</script>
<style scoped>
.back-link{display:inline-flex;min-height:2.75rem;align-items:center;gap:.6rem;color:var(--portfolio-text-muted);text-decoration:none;font-size:.78rem}.back-link span{color:var(--portfolio-accent)}.detail-header{display:flex;flex-direction:column;align-items:start;gap:1rem;padding:1.2rem 0 2rem}.detail-header h1,.not-found h1{margin:.5rem 0;font:600 clamp(2.8rem,9vw,5.4rem)/.98 var(--portfolio-font-display);letter-spacing:-.08em}.detail-header h1{color:var(--portfolio-text)}.detail-header .eyebrow span{color:var(--portfolio-text-muted)}.detail-summary{max-width:48rem;color:var(--portfolio-text-muted);font-size:1.05rem;line-height:1.7}.detail-meta{display:grid;gap:1.1rem}.detail-meta span{color:var(--portfolio-text-disabled);font: .62rem var(--portfolio-font-mono);letter-spacing:.12em}.detail-meta p{margin:.5rem 0 0;color:var(--portfolio-text);font-size:.82rem;line-height:1.6}.tech-list{display:flex;flex-wrap:wrap;gap:.45rem;margin-top:.6rem}.case-grid{display:grid;gap:1.8rem}.case-copy{border-top:1px solid var(--portfolio-border);padding-top:1rem}.case-copy>p:not(.eyebrow),.case-copy li{color:var(--portfolio-text-muted);font-size:.9rem;line-height:1.8}.case-copy ul{display:grid;gap:.6rem;margin:0;padding-left:1.2rem}.case-copy li::marker{color:var(--portfolio-accent)}.gallery{display:grid;grid-template-columns:1fr 1fr;gap:.8rem}.gallery img{width:100%;border:1px solid var(--portfolio-border);border-radius:var(--radius-card);object-fit:cover}.gallery-empty,.missing-link{color:var(--portfolio-text-disabled);font: .72rem var(--portfolio-font-mono)}.detail-actions{display:flex;flex-direction:column;align-items:start;gap:1rem;padding:1.4rem;border:1px solid var(--portfolio-border);border-radius:var(--radius-card);background:var(--portfolio-surface)}.detail-actions h2{margin:0;font:600 1.5rem var(--portfolio-font-display)}.project-pagination{display:flex;justify-content:space-between;gap:1rem;margin-top:2rem;padding-top:1.2rem;border-top:1px solid var(--portfolio-border)}.project-pagination a{display:grid;gap:.4rem;color:var(--portfolio-text-muted);text-decoration:none;font-size:.75rem}.project-pagination a b{color:var(--portfolio-text);font-size:.85rem}.project-pagination .next{text-align:right}.not-found{margin-top:2rem}.not-found h1{font-size:clamp(2rem,7vw,3.5rem)}
@media(min-width:720px){.detail-header{flex-direction:row;align-items:end;justify-content:space-between}.detail-meta{grid-template-columns:1fr 1fr 2fr;align-items:start}.case-grid{grid-template-columns:1fr 1fr;column-gap:2rem}.detail-actions{flex-direction:row;align-items:center;justify-content:space-between}.gallery{grid-template-columns:repeat(3,1fr)}}
</style>
