<template>
  <PageFrame>
    <div class="page-intro"><p class="eyebrow">01 / {{ t('about.eyebrow') }}</p><h1>{{ t('about.title') }}</h1><p class="intro-copy">{{ t('about.subtitle') }}</p></div>
    <section class="about-grid section-block">
      <article class="identity-card surface-card"><div class="avatar">JC</div><p class="eyebrow">{{ localProfile.cidade }}</p><h2>{{ localProfile.nomeCompleto }}</h2><p class="muted">{{ localProfile.cargo }}</p><StatusChip :label="t('status.available')" :online="true" /></article>
      <div class="about-copy"><SecaoTitulo :title="t('about.from')" :eyebrow="t('about.presentation')" /><p class="body-copy">{{ localProfile.bio }}</p><div class="section-subhead"><h3>{{ t('about.work') }}</h3><span>TODO</span></div><p class="body-copy">TODO</p><RouterLink to="/habilidades" class="section-link">{{ t('skills.title') }} <span>&rarr;</span></RouterLink></div>
    </section>
    <section class="section-block" v-reveal><SecaoTitulo :title="t('about.path')" :eyebrow="t('about.education')" /><LinhaDoTempo :items="localizedTimeline" /></section>
    <section class="surface-card seeking-card section-block" v-reveal><p class="eyebrow">{{ t('about.now') }}</p><h2>{{ t('about.seeking') }}</h2><p>{{ localProfile.objetivo }}</p><RouterLink to="/contato" class="section-link">{{ t('nav.contact') }} <span>&rarr;</span></RouterLink></section>
  </PageFrame>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import LinhaDoTempo from '@/components/LinhaDoTempo.vue';
import PageFrame from '@/components/PageFrame.vue';
import SecaoTitulo from '@/components/SecaoTitulo.vue';
import StatusChip from '@/components/StatusChip.vue';
import { useLocale } from '@/composables/useLocale';
import { linhaDoTempo } from '@/data/linha-do-tempo';
import { perfil } from '@/data/perfil';
import { localizeProfile, localizeTimeline } from '@/i18n/profileTranslations';
const { locale, t } = useLocale();
const localProfile = computed(() => localizeProfile(perfil, locale.value));
const localizedTimeline = computed(() => linhaDoTempo.map((item) => localizeTimeline(item, locale.value)));
</script>
<style scoped>
.page-intro { max-width: 43rem; padding-top: 2rem; }.page-intro h1 { margin: .8rem 0; font: 600 clamp(3rem, 10vw, 5.5rem)/.98 var(--portfolio-font-display); letter-spacing: -.08em; }.page-intro h1 span { color: var(--portfolio-accent); }.intro-copy,.muted { color: var(--portfolio-text-muted); line-height: 1.6; }
.about-grid { display: grid; gap: 1.5rem; }.identity-card { display: flex; flex-direction: column; align-items: start; gap: .6rem; }.avatar { display: grid; width: 6rem; aspect-ratio: 1; place-items: center; margin-bottom: 1rem; border: 1px solid var(--portfolio-accent); border-radius: 1.6rem; color: var(--portfolio-accent); background: var(--portfolio-accent-glow); font: 600 2.7rem var(--portfolio-font-display); letter-spacing: -.1em; }.identity-card .eyebrow { margin: .3rem 0 0; }.identity-card h2 { margin: 0; font: 600 1.4rem var(--portfolio-font-display); }.identity-card .muted { margin: 0 0 .5rem; font-size: .85rem; }.about-copy .section-heading { margin-bottom: 1rem; }.body-copy { color: var(--portfolio-text-muted); font-size: .94rem; line-height: 1.8; }.section-subhead { display: flex; justify-content: space-between; margin-top: 1.5rem; }.section-subhead h3 { margin: 0; font-size: 1rem; }.section-subhead span { color: var(--portfolio-text-disabled); font: .62rem var(--portfolio-font-mono); }.seeking-card h2 { margin: 0; font: 600 1.7rem var(--portfolio-font-display); }.seeking-card > p:not(.eyebrow) { color: var(--portfolio-text-muted); }
@media(min-width:760px){.about-grid{grid-template-columns:.75fr 1.25fr;gap:3rem;align-items:start}.identity-card{position:sticky;top:1rem}}
</style>
