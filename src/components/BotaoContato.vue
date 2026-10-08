<template><a class="contact-button" :class="{ primary }" :href="href" :target="external ? '_blank' : undefined" :rel="external ? 'noreferrer' : undefined"><ion-icon v-if="icon" :icon="icon" aria-hidden="true" /><span>{{ label }}</span><ion-icon v-if="external" :icon="openOutline" class="external-icon" aria-hidden="true" /></a></template>
<script setup lang="ts">
import { IonIcon } from '@ionic/vue';
import { openOutline } from 'ionicons/icons';
withDefaults(defineProps<{ label: string; href: string; icon?: string; primary?: boolean; external?: boolean }>(), { primary: false, external: false });
</script>
<style scoped>
.contact-button { display: inline-flex; align-items: center; justify-content: center; gap: .65rem; min-height: 3rem; border: 1px solid var(--portfolio-border); border-radius: var(--radius-pill); padding: .75rem 1rem; color: var(--portfolio-text); background: var(--portfolio-surface-raised); text-decoration: none; font-weight: 600; font-size: .84rem; transition: transform .2s, border-color .2s; }
.contact-button:hover { transform: translateY(-2px); border-color: var(--portfolio-accent); }.contact-button ion-icon { font-size: 1rem; }.contact-button.primary { border-color: var(--portfolio-accent); color: white; background: var(--portfolio-accent); }.contact-button.primary:hover { background: var(--portfolio-accent-pressed); }.external-icon { margin-left: .15rem; color: var(--portfolio-text-muted); }
</style>
