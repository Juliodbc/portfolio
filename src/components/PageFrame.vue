<template>
  <ion-page class="frame">
    <header class="topbar">
      <RouterLink to="/inicio" class="brand" :aria-label="locale === 'pt' ? 'Julio Correa - inicio' : 'Julio Correa - home'"><span>JC</span><span>JULIO CORREA</span></RouterLink>
      <RouterLink to="/contato" class="top-contact">{{ t('header.contact') }} <span aria-hidden="true">&rarr;</span></RouterLink>
      <PwaActions />
    </header>
    <ion-content class="frame-content">
      <main class="page-main"><slot /></main>
      <footer class="site-footer"><span>JULIO CORREA <span class="footer-sep">/</span> {{ t('footer.location') }}</span><a href="https://github.com/Juliodbc" target="_blank" rel="noreferrer">{{ t('footer.github') }} &rarr;</a></footer>
    </ion-content>
    <TabBarFlutuante />
  </ion-page>
</template>
<script setup lang="ts">
import { IonContent, IonPage } from '@ionic/vue';
import TabBarFlutuante from '@/components/TabBarFlutuante.vue';
import PwaActions from '@/components/PwaActions.vue';
import { useLocale } from '@/composables/useLocale';
const { locale, t } = useLocale();
</script>
<style scoped>
.frame { background: var(--portfolio-background); }
.topbar { flex-wrap: wrap; position: relative; z-index: 2; display: flex; width: min(100%, var(--content-width)); min-height: 4.5rem; align-items: center; justify-content: space-between; gap: 1rem; margin: 0 auto; padding: 0 clamp(1.1rem, 5vw, 3.25rem); }
.brand { display: flex; align-items: center; gap: .7rem; color: var(--portfolio-text); text-decoration: none; font: 600 .68rem var(--portfolio-font-mono); letter-spacing: .13em; }.brand > span:first-child { display: grid; width: 2rem; height: 2rem; place-items: center; border: 1px solid var(--portfolio-accent); border-radius: .65rem; color: var(--portfolio-accent); font: 700 .78rem var(--portfolio-font-display); letter-spacing: -.05em; }
.top-contact { color: var(--portfolio-text-muted); text-decoration: none; font-size: .78rem; }.top-contact span { padding-left: .4rem; color: var(--portfolio-accent); }
.frame-content { --background: radial-gradient(ellipse at 50% 0%, var(--portfolio-background-raised), var(--portfolio-background) 38rem); }
.page-main { width: min(100%, var(--content-width)); min-height: calc(100% - 5rem); margin: 0 auto; padding: 1.2rem clamp(1.1rem, 5vw, 3.25rem) 8rem; }
.site-footer { display: flex; width: min(100%, var(--content-width)); justify-content: space-between; gap: 1rem; margin: 0 auto; padding: 1.2rem clamp(1.1rem, 5vw, 3.25rem) 7rem; color: var(--portfolio-text-disabled); font: .62rem var(--portfolio-font-mono); letter-spacing: .1em; }.site-footer a { color: var(--portfolio-text-muted); text-decoration: none; }.footer-sep { color: var(--portfolio-accent); padding: 0 .35rem; }
</style>
