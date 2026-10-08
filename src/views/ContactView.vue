<template>
  <PageFrame>
    <div class="page-intro"><p class="eyebrow">04 / CONVERSA</p><h1>Vamos falar <span>sobre ideias.</span></h1><p class="intro-copy">Escolha um canal direto ou deixe uma mensagem para abrir no seu app de e-mail ou WhatsApp.</p></div>
    <div class="contact-layout section-block">
      <section class="channels"><SecaoTitulo title="Canais diretos" eyebrow="Contato" />
        <BotaoContato label="GitHub" href="https://github.com/Juliodbc" :icon="logoGithub" :external="true" />
        <div class="channel-placeholder"><ion-icon :icon="logoLinkedin" aria-hidden="true" /><div><b>LinkedIn</b><span>{{ perfil.linkedin }}</span></div></div>
        <div class="channel-placeholder"><ion-icon :icon="mailOutline" aria-hidden="true" /><div><b>E-mail</b><span>{{ perfil.email }}</span></div></div>
        <div class="channel-placeholder"><ion-icon :icon="logoWhatsapp" aria-hidden="true" /><div><b>WhatsApp</b><span>{{ perfil.whatsapp }}</span></div></div>
        <div class="resume-card surface-card"><div><b>Currículo em PDF</b><span>Arquivo local: {{ perfil.curriculo }}</span></div><button type="button" disabled>TODO</button></div>
      </section>
      <section class="message-card surface-card"><p class="eyebrow">MENSAGEM RÁPIDA</p><h2>Me conte um pouco.</h2><form @submit.prevent="sendMessage"><label>Assunto<input v-model="subject" required maxlength="100" placeholder="Ex.: oportunidade de estágio" /></label><label>Mensagem<textarea v-model="message" required rows="5" maxlength="1200" placeholder="Oi, Julio! Quero conversar sobre..." /></label><button class="send-button" type="submit">{{ readyToContact ? 'Abrir mensagem' : 'Preparar mensagem' }} <span aria-hidden="true">↗</span></button></form><p v-if="formFeedback" class="form-feedback" role="status">{{ formFeedback }}</p></section>
    </div>
    <section class="share-card section-block"><div><p class="eyebrow">ESPALHE A PALAVRA</p><h2>Compartilhe meu portfólio.</h2></div><button class="share-button" type="button" @click="sharePortfolio">{{ shareLabel }} <span aria-hidden="true">↗</span></button></section>
  </PageFrame>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue';
import { IonIcon } from '@ionic/vue';
import { logoGithub, logoLinkedin, logoWhatsapp, mailOutline } from 'ionicons/icons';
import BotaoContato from '@/components/BotaoContato.vue';
import PageFrame from '@/components/PageFrame.vue';
import SecaoTitulo from '@/components/SecaoTitulo.vue';
import { perfil } from '@/data/perfil';
const subject = ref('');
const message = ref('');
const formFeedback = ref('');
const shareLabel = ref('Compartilhar');
const readyToContact = computed(() => perfil.email !== 'TODO' || perfil.whatsapp !== 'TODO');

function sendMessage() {
  const body = encodeURIComponent(message.value);
  if (perfil.email !== 'TODO') {
    window.location.href = `mailto:${perfil.email}?subject=${encodeURIComponent(subject.value)}&body=${body}`;
    formFeedback.value = 'Sua mensagem está pronta no aplicativo de e-mail.';
    return;
  }
  if (perfil.whatsapp !== 'TODO') {
    const number = perfil.whatsapp.replace(/\D/g, '');
    window.open(`https://wa.me/${number}?text=${encodeURIComponent(`${subject.value}\n\n${message.value}`)}`, '_blank', 'noopener,noreferrer');
    formFeedback.value = 'Sua mensagem está pronta no WhatsApp.';
    return;
  }
  formFeedback.value = 'E-mail e WhatsApp estão como TODO. Use o GitHub para entrar em contato enquanto isso.';
}

async function sharePortfolio() {
  const shareData = { title: 'Portfólio — Julio Correa', text: 'Conheça o portfólio de Julio Correa.', url: window.location.origin };
  try {
    if (navigator.share) await navigator.share(shareData);
    else if (navigator.clipboard) { await navigator.clipboard.writeText(shareData.url); shareLabel.value = 'Link copiado'; }
    else shareLabel.value = 'Compartilhamento indisponível';
  } catch { shareLabel.value = 'Compartilhamento cancelado'; }
}
</script>
<style scoped>
.page-intro{max-width:48rem;padding-top:2rem}.page-intro h1{margin:.8rem 0;font:600 clamp(2.7rem,9vw,5.1rem)/.98 var(--portfolio-font-display);letter-spacing:-.08em}.page-intro h1 span{color:var(--portfolio-accent)}.intro-copy{color:var(--portfolio-text-muted);line-height:1.6}.contact-layout{display:grid;gap:1.25rem}.channels{display:grid;gap:.75rem;align-content:start}.channels .section-heading{margin-bottom:.4rem}.channel-placeholder{display:flex;min-height:4rem;align-items:center;gap:.85rem;border:1px solid var(--portfolio-border);border-radius:1rem;padding:.75rem 1rem;background:var(--portfolio-surface)}.channel-placeholder>ion-icon{color:var(--portfolio-accent);font-size:1.2rem}.channel-placeholder div,.resume-card div{display:grid;gap:.2rem}.channel-placeholder b,.resume-card b{font-size:.83rem}.channel-placeholder span,.resume-card span{color:var(--portfolio-text-disabled);font: .67rem var(--portfolio-font-mono)}.resume-card{display:flex;align-items:center;justify-content:space-between;gap:.8rem;padding:1rem}.resume-card button{min-height:2.4rem;border:1px solid var(--portfolio-border);border-radius:var(--radius-pill);padding:0 .8rem;color:var(--portfolio-text-disabled);background:transparent;font: .64rem var(--portfolio-font-mono)}.message-card h2,.share-card h2{margin:.2rem 0 1.2rem;font:600 1.6rem var(--portfolio-font-display);letter-spacing:-.04em}.message-card form{display:grid;gap:.9rem}.message-card label{display:grid;gap:.45rem;color:var(--portfolio-text-muted);font-size:.75rem}.message-card input,.message-card textarea{width:100%;border:1px solid var(--portfolio-border);border-radius:.8rem;padding:.85rem;color:var(--portfolio-text);background:var(--portfolio-background);font-size:.82rem;resize:vertical}.message-card input::placeholder,.message-card textarea::placeholder{color:var(--portfolio-text-disabled)}.send-button,.share-button{display:flex;min-height:2.9rem;align-items:center;justify-content:center;gap:.7rem;border:1px solid var(--portfolio-accent);border-radius:var(--radius-pill);padding:.7rem 1rem;color:white;background:var(--portfolio-accent);font-weight:600;font-size:.8rem;cursor:pointer}.send-button:hover,.share-button:hover{background:var(--portfolio-accent-pressed)}.form-feedback{color:var(--portfolio-text-muted);font-size:.75rem;line-height:1.5}.share-card{display:flex;flex-direction:column;align-items:start;justify-content:space-between;gap:1rem}.share-card h2{margin:0}
@media(min-width:760px){.contact-layout{grid-template-columns:.9fr 1.1fr;gap:1.5rem}.share-card{flex-direction:row;align-items:center}}
</style>
