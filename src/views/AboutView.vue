<template>
  <PageFrame>
    <div class="page-intro"><p class="eyebrow">01 / QUEM SOU</p><h1>Sobre <span>mim.</span></h1><p class="intro-copy">Um pouco do caminho, do que me move e do que estou buscando.</p></div>
    <section class="about-grid section-block">
      <article class="identity-card surface-card"><div class="avatar">JC</div><p class="eyebrow">{{ perfil.cidade }}</p><h2>{{ perfil.nomeCompleto }}</h2><p class="muted">{{ perfil.cargo }}</p><StatusChip label="Disponível para projetos" :online="true" /></article>
      <div class="about-copy"><SecaoTitulo title="De onde venho" eyebrow="Apresentação" /><p class="body-copy">{{ perfil.bio }}</p><div class="section-subhead"><h3>Como trabalho</h3><span>TODO</span></div><p class="body-copy">TODO</p><RouterLink to="/habilidades" class="section-link">Ver habilidades <span>↗</span></RouterLink></div>
    </section>
    <section class="section-block"><SecaoTitulo title="Percurso" eyebrow="Linha do tempo" /><LinhaDoTempo :items="linhaDoTempo" /></section>
    <section class="surface-card seeking-card section-block"><p class="eyebrow">AGORA</p><h2>O que busco</h2><p>{{ perfil.objetivo }}</p><RouterLink to="/contato" class="section-link">Entre em contato <span>↗</span></RouterLink></section>
  </PageFrame>
</template>
<script setup lang="ts">
import LinhaDoTempo from '@/components/LinhaDoTempo.vue';
import PageFrame from '@/components/PageFrame.vue';
import SecaoTitulo from '@/components/SecaoTitulo.vue';
import StatusChip from '@/components/StatusChip.vue';
import { linhaDoTempo } from '@/data/linha-do-tempo';
import { perfil } from '@/data/perfil';
</script>
<style scoped>
.page-intro { max-width: 43rem; padding-top: 2rem; }.page-intro h1 { margin: .8rem 0; font: 600 clamp(3rem, 10vw, 5.5rem)/.98 var(--portfolio-font-display); letter-spacing: -.08em; }.page-intro h1 span { color: var(--portfolio-accent); }.intro-copy,.muted { color: var(--portfolio-text-muted); line-height: 1.6; }
.about-grid { display: grid; gap: 1.5rem; }.identity-card { display: flex; flex-direction: column; align-items: start; gap: .6rem; }.avatar { display: grid; width: 6rem; aspect-ratio: 1; place-items: center; margin-bottom: 1rem; border: 1px solid var(--portfolio-accent); border-radius: 1.6rem; color: var(--portfolio-accent); background: var(--portfolio-accent-glow); font: 600 2.7rem var(--portfolio-font-display); letter-spacing: -.1em; }.identity-card .eyebrow { margin: .3rem 0 0; }.identity-card h2 { margin: 0; font: 600 1.4rem var(--portfolio-font-display); }.identity-card .muted { margin: 0 0 .5rem; font-size: .85rem; }.about-copy .section-heading { margin-bottom: 1rem; }.body-copy { color: var(--portfolio-text-muted); font-size: .94rem; line-height: 1.8; }.section-subhead { display: flex; justify-content: space-between; margin-top: 1.5rem; }.section-subhead h3 { margin: 0; font-size: 1rem; }.section-subhead span { color: var(--portfolio-text-disabled); font: .62rem var(--portfolio-font-mono); }.seeking-card h2 { margin: 0; font: 600 1.7rem var(--portfolio-font-display); }.seeking-card > p:not(.eyebrow) { color: var(--portfolio-text-muted); }
@media(min-width:760px){.about-grid{grid-template-columns:.75fr 1.25fr;gap:3rem;align-items:start}.identity-card{position:sticky;top:1rem}}
</style>
