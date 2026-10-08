<template>
  <PageFrame>
    <div class="page-intro"><p class="eyebrow">02 / {{ t('skills.eyebrow') }}</p><h1>{{ t('skills.title') }}</h1><p class="intro-copy">{{ t('skills.subtitle') }}</p></div>
    <section v-for="area in areas" :key="area.value" class="section-block" v-reveal><SecaoTitulo :title="t(area.key)" :eyebrow="t('skills.section')" /><div class="skill-grid"><GaugeRing v-for="skill in getSkills(area.value)" :key="skill.nome" :name="skill.nome" :level="skill.nivel" /></div></section>
    <section class="study-panel surface-card section-block" v-reveal><div><p class="eyebrow">{{ t('skills.current') }}</p><h2>{{ t('skills.now') }}</h2></div><div class="study-chips"><ChipTecnologia v-for="skill in emEstudo" :key="skill.nome" :label="skill.nome" /></div></section>
    <p class="skill-note">{{ t('skills.note') }}</p>
  </PageFrame>
</template>
<script setup lang="ts">
import ChipTecnologia from '@/components/ChipTecnologia.vue';
import GaugeRing from '@/components/GaugeRing.vue';
import PageFrame from '@/components/PageFrame.vue';
import SecaoTitulo from '@/components/SecaoTitulo.vue';
import { useLocale } from '@/composables/useLocale';
import { habilidades } from '@/data/habilidades';
import type { AreaHabilidade } from '@/types/Habilidade';
const { t } = useLocale();
const areas: Array<{ value: AreaHabilidade; key: string }> = [{ value: 'Front-end', key: 'area.frontend' }, { value: 'Mobile', key: 'area.mobile' }, { value: 'Back-end', key: 'area.backend' }, { value: 'Ferramentas', key: 'area.tools' }];
const getSkills = (area: AreaHabilidade) => habilidades.filter((skill) => skill.area === area && skill.nivel !== 'Em estudo');
const emEstudo = habilidades.filter((skill) => skill.nivel === 'Em estudo');
</script>
<style scoped>
.page-intro{max-width:44rem;padding-top:2rem}.page-intro h1{margin:.8rem 0;font:600 clamp(2.8rem,9vw,5.2rem)/.98 var(--portfolio-font-display);letter-spacing:-.08em}.page-intro h1 span{color:var(--portfolio-accent)}.intro-copy{color:var(--portfolio-text-muted);line-height:1.6}.study-panel{display:flex;flex-direction:column;gap:1.2rem}.study-panel h2{margin:0;font:600 1.5rem var(--portfolio-font-display)}.study-chips{display:flex;flex-wrap:wrap;gap:.6rem}.skill-note{margin-top:1rem;color:var(--portfolio-text-disabled);font-size:.72rem;line-height:1.5}
@media(min-width:700px){.study-panel{flex-direction:row;align-items:center;justify-content:space-between}}
</style>
