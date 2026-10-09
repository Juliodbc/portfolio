<template>
  <PageFrame>
    <section class="hero">
      <div class="hero-copy">
        <StatusChip :label="t('status.available')" :online="true" />
        <p class="hero-greeting">{{ t('home.label') }} <span>/ 2026</span></p>
        <h1>{{ t('home.greeting') }}<br /><span>Julio.</span></h1>
        <p class="hero-role">{{ localProfile.cargo }} <span>&middot; {{ perfil.cidade }}</span></p>
        <p class="hero-lede">{{ t('home.lede') }}</p>
        <div class="button-row hero-actions">
          <RouterLink to="/projetos" class="action-primary">{{ t('home.projects') }} <span aria-hidden="true">&rarr;</span></RouterLink>
          <a class="action-secondary" :href="resumeUrl" :download="perfil.curriculo">{{ t('home.resume') }} <span aria-hidden="true">&darr;</span></a>
        </div>
      </div>
      <div class="hero-art" :aria-label="t('home.artAlt')">
        <div class="orbit orbit-one"></div><div class="orbit orbit-two"></div><div class="orbit orbit-three"></div>
        <div class="orbit-chip chip-vue">Vue</div><div class="orbit-chip chip-ts">TS</div><div class="orbit-chip chip-ionic">Ionic</div>
        <div class="monogram"><span>JC</span><i>SC &middot; BR</i></div>
        <div class="art-caption">DESIGN <b>&middot;</b> WEB <b>&middot;</b> MOBILE</div>
      </div>
    </section>
    <section class="metric-grid" aria-label="Portfolio summary">
      <MetricCard :value="String(projects.length).padStart(2, '0')" :label="t('home.metricProjects')" />
      <MetricCard :value="String(habilidades.length).padStart(2, '0')" :label="t('home.metricSkills')" />
      <MetricCard :value="String(projectsGithub.length).padStart(2, '0')" :label="t('home.metricRepos')" />
    </section>
    <section class="section-block" v-reveal>
      <SecaoTitulo :title="t('home.featured')" :eyebrow="t('home.selected')"><RouterLink to="/projetos" class="section-link">{{ t('home.allProjects') }} <span>&rarr;</span></RouterLink></SecaoTitulo>
      <div class="project-grid"><CardProjeto v-for="projeto in destaques" :key="projeto.id" :project="projeto" /></div>
    </section>
    <section class="closing-card section-block" v-reveal>
      <div><p class="eyebrow">{{ t('home.next') }}</p><h2>{{ t('home.ctaTitle') }}</h2><p>{{ t('home.ctaBody') }}</p></div>
      <RouterLink to="/contato" class="action-primary">{{ t('home.cta') }} <span aria-hidden="true">&rarr;</span></RouterLink>
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
import { useLocale } from '@/composables/useLocale';
import { habilidades } from '@/data/habilidades';
import { perfil } from '@/data/perfil';
import { projetos } from '@/data/projetos';
import githubData from '@/data/projetos.github.json';
import { localizeProfile } from '@/i18n/profileTranslations';
const { locale, t } = useLocale();
const localProfile = computed(() => localizeProfile(perfil, locale.value));
const resumeUrl = `${import.meta.env.BASE_URL}${perfil.curriculo}`;
const destaques = computed(() => projetos.filter((projeto) => projeto.destaque).slice(0, 4));
const projects = projetos;
const projectsGithub = githubData;
</script>
<style scoped>
.hero { display: grid; align-items: center; gap: 2rem; min-height: 28rem; padding: 1.2rem 0 2rem; }
.hero-copy { position: relative; z-index: 1; }.hero-greeting { margin: 1.5rem 0 .8rem; color: var(--portfolio-text-muted); font: .66rem var(--portfolio-font-mono); letter-spacing: .17em; }.hero-greeting span { color: var(--portfolio-accent); }
h1 { margin: 0; font: 600 clamp(3.5rem, 15vw, 6.5rem)/.9 var(--portfolio-font-display); letter-spacing: -.085em; }h1 span { color: var(--portfolio-accent); }
.hero-role { margin: 1.1rem 0 0; color: var(--portfolio-text); font-size: .95rem; font-weight: 600; }.hero-role span { color: var(--portfolio-text-muted); font-weight: 400; }
.hero-lede { max-width: 27rem; margin: 1rem 0 1.35rem; color: var(--portfolio-text-muted); font-size: 1rem; line-height: 1.65; }
.action-primary,.action-secondary { display: inline-flex; min-height: 3rem; align-items: center; justify-content: center; gap: .7rem; border: 1px solid var(--portfolio-border); border-radius: var(--radius-pill); padding: .75rem 1.1rem; color: var(--portfolio-text); text-decoration: none; font-size: .82rem; font-weight: 600; }.action-primary { border-color: var(--portfolio-accent); color: var(--portfolio-on-accent); background: var(--portfolio-accent); }.action-primary:hover { background: var(--portfolio-accent-pressed); }.action-secondary { color: var(--portfolio-text-muted); background: transparent; }.action-secondary span { color: var(--portfolio-text-disabled); font: .58rem var(--portfolio-font-mono); }
.hero-art { position: relative; display: grid; width: min(76vw, 21rem); aspect-ratio: 1; place-items: center; justify-self: center; }.monogram { z-index: 2; display: grid; width: 8.25rem; aspect-ratio: 1; place-content: center; gap: .4rem; border: 1px solid color-mix(in srgb, var(--portfolio-accent) 45%, var(--portfolio-border)); border-radius: 2.3rem; background: radial-gradient(circle at 50% 30%, #29221e, #151518 70%); box-shadow: 0 0 5rem var(--portfolio-accent-glow), inset 0 0 2rem rgb(255 255 255 / 2%); text-align: center; }.monogram span { color: var(--portfolio-text); font: 600 3.6rem/.8 var(--portfolio-font-display); letter-spacing: -.12em; }.monogram i { color: var(--portfolio-text-muted); font: normal .55rem var(--portfolio-font-mono); letter-spacing: .15em; }
.orbit { position: absolute; width: 95%; height: 43%; border: 1px solid color-mix(in srgb, var(--portfolio-accent) 35%, transparent); border-radius: 50%; transform: rotate(-35deg); }.orbit-two { width: 100%; height: 58%; border-color: color-mix(in srgb, white 12%, transparent); transform: rotate(40deg); }.orbit-three { width: 74%; height: 94%; border-color: color-mix(in srgb, var(--portfolio-accent) 22%, transparent); transform: rotate(55deg); }
.orbit-chip { position: absolute; z-index: 3; border: 1px solid var(--portfolio-border); border-radius: var(--radius-pill); padding: .4rem .65rem; color: var(--portfolio-text); background: var(--portfolio-surface-raised); font: .65rem var(--portfolio-font-mono); }.chip-vue { top: 12%; left: 8%; color: #88e0bb; }.chip-ts { top: 26%; right: 0; color: #8bb8ff; }.chip-ionic { right: 9%; bottom: 12%; color: #9aabff; }.art-caption { position: absolute; bottom: 0; color: var(--portfolio-text-disabled); font: .55rem var(--portfolio-font-mono); letter-spacing: .17em; }.art-caption b { color: var(--portfolio-accent); }
.metric-grid { display: grid; grid-template-columns: 1fr; gap: .75rem; }.closing-card { display: flex; flex-direction: column; align-items: start; justify-content: space-between; gap: 1.5rem; }.closing-card h2 { margin: 0; font: 600 clamp(1.65rem, 5vw, 2.4rem) var(--portfolio-font-display); letter-spacing: -.05em; }.closing-card p:not(.eyebrow) { margin: .65rem 0 0; color: var(--portfolio-text-muted); font-size: .86rem; }
.hero { position: relative; isolation: isolate; padding-top: clamp(2.5rem, 7vw, 5rem); }
.hero-copy > :nth-child(1) { animation: hero-enter .8s .05s both cubic-bezier(.16,1,.3,1); }.hero-copy > :nth-child(2) { animation: hero-enter .8s .12s both cubic-bezier(.16,1,.3,1); }.hero-copy > h1 { animation: hero-enter .9s .2s both cubic-bezier(.16,1,.3,1); }.hero-copy > :nth-child(4) { animation: hero-enter .8s .29s both cubic-bezier(.16,1,.3,1); }.hero-copy > :nth-child(5) { animation: hero-enter .8s .36s both cubic-bezier(.16,1,.3,1); }.hero-copy > :nth-child(6) { animation: hero-enter .8s .44s both cubic-bezier(.16,1,.3,1); }
.hero h1 span { color: transparent; background: linear-gradient(110deg, #ff8a62 5%, var(--portfolio-accent) 52%, #ffb17d 95%); background-clip: text; -webkit-background-clip: text; }
.hero-art { perspective: 900px; filter: drop-shadow(0 24px 60px rgb(0 0 0 / 18%)); animation: art-arrive 1.1s .15s both cubic-bezier(.16,1,.3,1); }.hero-art::before { position: absolute; inset: 12%; border-radius: 50%; background: radial-gradient(circle, var(--portfolio-accent-glow), transparent 68%); content: ''; filter: blur(28px); animation: aura-breathe 7s ease-in-out infinite alternate; }
.monogram { position: relative; transform-style: preserve-3d; backdrop-filter: blur(12px); animation: monogram-float 6s ease-in-out infinite; }.monogram::after { position: absolute; z-index: 0; inset: -1px; border: 1px solid transparent; border-radius: inherit; background: linear-gradient(var(--portfolio-surface), var(--portfolio-surface)) padding-box, conic-gradient(from var(--glow-angle), transparent 18%, color-mix(in srgb, var(--portfolio-accent) 80%, white) 32%, transparent 48%, transparent 72%, color-mix(in srgb, #8b7cff 65%, transparent) 84%, transparent) border-box; content: ''; animation: edge-glow 9s linear infinite; }.monogram > span,.monogram > i { position: relative; z-index: 1; }
.orbit-chip { box-shadow: 0 8px 24px rgb(0 0 0 / 18%); backdrop-filter: blur(12px); animation: chip-float 5s ease-in-out infinite; }.chip-ts { animation-delay: -1.7s; }.chip-ionic { animation-delay: -3.2s; }.art-caption { text-shadow: 0 2px 12px var(--portfolio-background); }
.action-primary,.action-secondary { transition: transform .25s cubic-bezier(.2,.8,.2,1), box-shadow .25s, background .25s, border-color .25s; }.action-primary { box-shadow: 0 8px 26px var(--portfolio-accent-glow), inset 0 1px 0 rgb(255 255 255 / 22%); }.action-primary:hover { transform: translateY(-3px); box-shadow: 0 14px 36px var(--portfolio-accent-glow), inset 0 1px 0 rgb(255 255 255 / 22%); }.action-primary span { transition: transform .25s; }.action-primary:hover span { transform: translateX(4px); }.action-secondary:hover { transform: translateY(-2px); border-color: var(--portfolio-border-strong); }
.metric-grid { gap: .9rem; }.closing-card { position: relative; overflow: hidden; }.closing-card::after { position: absolute; top: -5rem; right: 15%; width: 15rem; aspect-ratio: 1; border: 1px solid color-mix(in srgb, var(--portfolio-accent) 22%, transparent); border-radius: 50%; content: ''; pointer-events: none; }
@keyframes hero-enter { from { opacity: 0; transform: translate3d(0, 1rem, 0); filter: blur(6px); } to { opacity: 1; transform: translate3d(0, 0, 0); filter: blur(0); } }
@keyframes art-arrive { from { opacity: 0; transform: translate3d(0, 1.5rem, 0) rotateX(8deg) scale(.94); } to { opacity: 1; transform: translate3d(0, 0, 0) rotateX(0) scale(1); } }
@keyframes aura-breathe { from { opacity: .5; transform: scale(.82); } to { opacity: 1; transform: scale(1.12); } }
@keyframes monogram-float { 0%,100% { transform: translateY(0) rotateX(0) rotateY(0); } 50% { transform: translateY(-8px) rotateX(2deg) rotateY(-3deg); } }
@keyframes chip-float { 0%,100% { transform: translateY(0) rotate(-2deg); } 50% { transform: translateY(-7px) rotate(2deg); } }
@keyframes edge-glow { to { --glow-angle: 360deg; } }
@media (min-width: 680px) { .hero { grid-template-columns: 1.05fr .95fr; min-height: 32rem; }.hero-art { width: min(33vw, 23rem); }.metric-grid { grid-template-columns: repeat(3,1fr); }.closing-card { flex-direction: row; align-items: center; } }
@media (prefers-reduced-motion: reduce) { .hero-copy > *, .hero-art, .monogram, .orbit-chip { animation: none; } }
</style>
