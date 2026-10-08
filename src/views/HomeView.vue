<template>
  <PageFrame>
    <section class="hero">
      <div class="hero-copy">
        <StatusChip label="Disponível para projetos" :online="true" />
        <p class="hero-greeting">PORTFÓLIO <span>/ 2026</span></p>
        <h1>Olá, eu sou<br /><span>o Julio.</span></h1>
        <p class="hero-role">{{ perfil.cargo }} <span>· {{ perfil.cidade }}</span></p>
        <p class="hero-lede">Construo experiências web e mobile com atenção ao que acontece por trás da tela.</p>
        <div class="button-row hero-actions">
          <RouterLink to="/projetos" class="action-primary">Ver projetos <span aria-hidden="true">↗</span></RouterLink>
          <span class="action-secondary" aria-disabled="true" title="TODO: adicionar arquivo PDF">Baixar currículo <span>TODO</span></span>
        </div>
      </div>
      <div class="hero-art" aria-label="Monograma JC cercado por tecnologias em órbita">
        <div class="orbit orbit-one"></div><div class="orbit orbit-two"></div><div class="orbit orbit-three"></div>
        <div class="orbit-chip chip-vue">Vue</div><div class="orbit-chip chip-ts">TS</div><div class="orbit-chip chip-ionic">Ionic</div>
        <div class="monogram"><span>JC</span><i>SC · BR</i></div>
        <div class="art-caption">DESIGN <b>·</b> WEB <b>·</b> MOBILE</div>
      </div>
    </section>

    <section class="metric-grid" aria-label="Resumo do portfólio">
      <MetricCard :value="String(projetos.length).padStart(2, '0')" label="Projetos no portfólio" />
      <MetricCard :value="String(habilidades.length).padStart(2, '0')" label="Tecnologias e ferramentas" />
      <MetricCard :value="String(projetosGithub.length).padStart(2, '0')" label="Repositórios públicos" />
    </section>

    <section class="section-block">
      <SecaoTitulo title="Trabalho em destaque" eyebrow="Selecionados">
        <RouterLink to="/projetos" class="section-link">Todos os projetos <span>↗</span></RouterLink>
      </SecaoTitulo>
      <div class="project-grid"><CardProjeto v-for="projeto in destaques" :key="projeto.id" :project="projeto" /></div>
    </section>

    <section class="closing-card section-block">
      <div><p class="eyebrow">PRÓXIMO PASSO</p><h2>Tem um projeto em mente?</h2><p>Vamos conversar sobre o que você está construindo.</p></div>
      <RouterLink to="/contato" class="action-primary">Fale comigo <span aria-hidden="true">↗</span></RouterLink>
    </section>
  </PageFrame>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import CardProjeto from '@/components/CardProjeto.vue';
import MetricCard from '@/components/MetricCard.vue';
import PageFrame from '@/components/PageFrame.vue';
import SecaoTitulo from '@/components/SecaoTitulo.vue';
import StatusChip from '@/components/StatusChip.vue';
import { habilidades } from '@/data/habilidades';
import { perfil } from '@/data/perfil';
import { projetos } from '@/data/projetos';
import githubData from '@/data/projetos.github.json';
const destaques = computed(() => projetos.filter((projeto) => projeto.destaque).slice(0, 4));
const projetosGithub = githubData;
</script>
<style scoped>
.hero { display: grid; align-items: center; gap: 2rem; min-height: 28rem; padding: 1.2rem 0 2rem; }
.hero-copy { position: relative; z-index: 1; }.hero-greeting { margin: 1.5rem 0 .8rem; color: var(--portfolio-text-muted); font: .66rem var(--portfolio-font-mono); letter-spacing: .17em; }.hero-greeting span { color: var(--portfolio-accent); }
h1 { margin: 0; font: 600 clamp(3.5rem, 15vw, 6.5rem)/.9 var(--portfolio-font-display); letter-spacing: -.085em; }h1 span { color: var(--portfolio-accent); }
.hero-role { margin: 1.1rem 0 0; color: var(--portfolio-text); font-size: .95rem; font-weight: 600; }.hero-role span { color: var(--portfolio-text-muted); font-weight: 400; }
.hero-lede { max-width: 27rem; margin: 1rem 0 1.35rem; color: var(--portfolio-text-muted); font-size: 1rem; line-height: 1.65; }
.action-primary,.action-secondary { display: inline-flex; min-height: 3rem; align-items: center; justify-content: center; gap: .7rem; border: 1px solid var(--portfolio-border); border-radius: var(--radius-pill); padding: .75rem 1.1rem; color: var(--portfolio-text); text-decoration: none; font-size: .82rem; font-weight: 600; }.action-primary { border-color: var(--portfolio-accent); color: white; background: var(--portfolio-accent); }.action-primary:hover { background: var(--portfolio-accent-pressed); }.action-secondary { color: var(--portfolio-text-muted); background: transparent; }.action-secondary span { color: var(--portfolio-text-disabled); font: .58rem var(--portfolio-font-mono); }
.hero-art { position: relative; display: grid; width: min(76vw, 21rem); aspect-ratio: 1; place-items: center; justify-self: center; }.monogram { z-index: 2; display: grid; width: 8.25rem; aspect-ratio: 1; place-content: center; gap: .4rem; border: 1px solid color-mix(in srgb, var(--portfolio-accent) 45%, var(--portfolio-border)); border-radius: 2.3rem; background: radial-gradient(circle at 50% 30%, #29221e, #151518 70%); box-shadow: 0 0 5rem var(--portfolio-accent-glow), inset 0 0 2rem rgb(255 255 255 / 2%); text-align: center; }.monogram span { color: var(--portfolio-text); font: 600 3.6rem/.8 var(--portfolio-font-display); letter-spacing: -.12em; }.monogram i { color: var(--portfolio-text-muted); font: normal .55rem var(--portfolio-font-mono); letter-spacing: .15em; }
.orbit { position: absolute; width: 95%; height: 43%; border: 1px solid color-mix(in srgb, var(--portfolio-accent) 35%, transparent); border-radius: 50%; transform: rotate(-35deg); }.orbit-two { width: 100%; height: 58%; border-color: color-mix(in srgb, white 12%, transparent); transform: rotate(40deg); }.orbit-three { width: 74%; height: 94%; border-color: color-mix(in srgb, var(--portfolio-accent) 22%, transparent); transform: rotate(55deg); }
.orbit-chip { position: absolute; z-index: 3; border: 1px solid var(--portfolio-border); border-radius: var(--radius-pill); padding: .4rem .65rem; color: var(--portfolio-text); background: var(--portfolio-surface-raised); font: .65rem var(--portfolio-font-mono); }.chip-vue { top: 12%; left: 8%; color: #88e0bb; }.chip-ts { top: 26%; right: 0; color: #8bb8ff; }.chip-ionic { right: 9%; bottom: 12%; color: #9aabff; }.art-caption { position: absolute; bottom: 0; color: var(--portfolio-text-disabled); font: .55rem var(--portfolio-font-mono); letter-spacing: .17em; }.art-caption b { color: var(--portfolio-accent); }
.metric-grid { display: grid; grid-template-columns: 1fr; gap: .75rem; }.closing-card { display: flex; flex-direction: column; align-items: start; justify-content: space-between; gap: 1.5rem; }.closing-card h2 { margin: 0; font: 600 clamp(1.65rem, 5vw, 2.4rem) var(--portfolio-font-display); letter-spacing: -.05em; }.closing-card p:not(.eyebrow) { margin: .65rem 0 0; color: var(--portfolio-text-muted); font-size: .86rem; }
@media (min-width: 680px) { .hero { grid-template-columns: 1.05fr .95fr; min-height: 32rem; }.hero-art { width: min(33vw, 23rem); }.metric-grid { grid-template-columns: repeat(3,1fr); }.closing-card { flex-direction: row; align-items: center; } }
</style>
