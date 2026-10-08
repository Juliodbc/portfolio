<template>
  <PageFrame>
    <div class="page-intro"><p class="eyebrow">02 / FERRAMENTAS</p><h1>O que sei <span>fazer.</span></h1><p class="intro-copy">Tecnologias agrupadas por área, com nível qualitativo informado no perfil.</p></div>
    <section v-for="area in areas" :key="area" class="section-block"><SecaoTitulo :title="area" eyebrow="Habilidades" /><div class="skill-grid"><GaugeRing v-for="skill in getSkills(area)" :key="skill.nome" :name="skill.nome" :level="skill.nivel" /></div></section>
    <section class="study-panel surface-card section-block"><div><p class="eyebrow">EM MOVIMENTO</p><h2>Estudando agora</h2></div><div class="study-chips"><ChipTecnologia v-for="skill in emEstudo" :key="skill.nome" :label="skill.nome" /></div></section>
    <p class="skill-note">Os anéis são uma representação visual do nível indicado; “TODO” sinaliza que o nível ainda precisa ser confirmado.</p>
  </PageFrame>
</template>
<script setup lang="ts">
import ChipTecnologia from '@/components/ChipTecnologia.vue';
import GaugeRing from '@/components/GaugeRing.vue';
import PageFrame from '@/components/PageFrame.vue';
import SecaoTitulo from '@/components/SecaoTitulo.vue';
import { habilidades } from '@/data/habilidades';
import type { AreaHabilidade } from '@/types/Habilidade';
const areas: AreaHabilidade[] = ['Front-end', 'Mobile', 'Back-end', 'Ferramentas'];
const getSkills = (area: AreaHabilidade) => habilidades.filter((skill) => skill.area === area && skill.nivel !== 'Em estudo');
const emEstudo = habilidades.filter((skill) => skill.nivel === 'Em estudo');
</script>
<style scoped>
.page-intro{max-width:44rem;padding-top:2rem}.page-intro h1{margin:.8rem 0;font:600 clamp(2.8rem,9vw,5.2rem)/.98 var(--portfolio-font-display);letter-spacing:-.08em}.page-intro h1 span{color:var(--portfolio-accent)}.intro-copy{color:var(--portfolio-text-muted);line-height:1.6}.study-panel{display:flex;flex-direction:column;gap:1.2rem}.study-panel h2{margin:0;font:600 1.5rem var(--portfolio-font-display)}.study-chips{display:flex;flex-wrap:wrap;gap:.6rem}.skill-note{margin-top:1rem;color:var(--portfolio-text-disabled);font-size:.72rem;line-height:1.5}
@media(min-width:700px){.study-panel{flex-direction:row;align-items:center;justify-content:space-between}}
</style>
