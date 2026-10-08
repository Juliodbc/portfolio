<template>
  <PageFrame>
    <section class="not-found surface-card">
      <p class="eyebrow">404 / {{ t('detail.notFound') }}</p>
      <div class="error-orbit" aria-hidden="true"><span>404</span></div>
      <h1>{{ t('detail.notFoundTitle') }}</h1>
      <p>{{ locale === 'pt' ? 'O caminho que você abriu não existe ou foi movido.' : 'The page you opened does not exist or has moved.' }}</p>
      <RouterLink to="/inicio" class="home-link">{{ t('nav.home') }} <span aria-hidden="true">&rarr;</span></RouterLink>
    </section>
  </PageFrame>
</template>
<script setup lang="ts">
import PageFrame from '@/components/PageFrame.vue';
import { useLocale } from '@/composables/useLocale';
const { locale, t } = useLocale();
</script>
<style scoped>
.not-found{max-width:42rem;margin:3rem auto;text-align:center}.error-orbit{position:relative;display:grid;width:10rem;aspect-ratio:1;place-items:center;margin:1rem auto 2rem;border:1px solid var(--portfolio-border);border-radius:50%;color:var(--portfolio-accent);font:600 2.3rem var(--portfolio-font-display)}.error-orbit::before,.error-orbit::after{position:absolute;inset:1rem;border:1px solid var(--portfolio-accent-glow);border-radius:50%;content:'';transform:rotate(32deg) scaleY(.4)}.error-orbit::after{transform:rotate(-42deg) scaleY(.55)}h1{font:600 clamp(2rem,7vw,3.5rem)/1 var(--portfolio-font-display);letter-spacing:-.06em}.not-found>p:not(.eyebrow){color:var(--portfolio-text-muted)}.home-link{display:inline-flex;min-height:2.75rem;align-items:center;gap:.6rem;margin-top:.5rem;color:var(--portfolio-text);text-decoration:none;font-weight:600}.home-link span{color:var(--portfolio-accent)}
</style>
