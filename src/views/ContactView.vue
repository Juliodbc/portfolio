<template>
  <PageFrame>
    <div class="page-intro"><p class="eyebrow">04 / {{ t('contact.eyebrow') }}</p><h1>{{ t('contact.title') }}</h1><p class="intro-copy">{{ t('contact.subtitle') }}</p></div>
    <div class="contact-layout section-block">
      <section class="channels"><SecaoTitulo :title="t('contact.channels')" :eyebrow="t('nav.contact')" /><BotaoContato label="GitHub" href="https://github.com/Juliodbc" :icon="logoGithub" :external="true" />
        <a class="channel-placeholder" :href="perfil.linkedin" target="_blank" rel="noreferrer"><ion-icon :icon="logoLinkedin" aria-hidden="true" /><div><b>{{ t('contact.linkedin') }}</b><span>{{ perfil.linkedin.replace('https://www.', '') }}</span></div></a>
        <a class="channel-placeholder" :href="`mailto:${perfil.email}`"><ion-icon :icon="mailOutline" aria-hidden="true" /><div><b>{{ t('contact.email') }}</b><span>{{ perfil.email }}</span></div></a>
        <a class="channel-placeholder whatsapp-link" :href="`https://wa.me/${perfil.whatsapp.replace(/\D/g, '')}`" target="_blank" rel="noreferrer"><ion-icon :icon="logoWhatsapp" aria-hidden="true" /><div><b>{{ t('contact.whatsapp') }}</b><span>{{ perfil.whatsapp }}</span></div></a>
        <div class="resume-card surface-card"><div><b>{{ t('contact.resume') }}</b><span>{{ t('contact.resumeFile') }} {{ perfil.curriculo }}</span></div><a class="resume-download" :href="resumeUrl" :download="perfil.curriculo">{{ t('home.resume') }}</a></div>
      </section>
      <section class="message-card surface-card"><p class="eyebrow">{{ t('contact.message') }}</p><h2>{{ t('contact.tell') }}</h2><form @submit.prevent="sendMessage"><label>{{ t('contact.subject') }}<input v-model="subject" required maxlength="100" :placeholder="t('contact.subjectPlaceholder')" /></label><label>{{ t('contact.messageLabel') }}<textarea v-model="message" required rows="5" maxlength="1200" :placeholder="t('contact.messagePlaceholder')" /></label><button class="send-button" type="submit">{{ t('contact.send') }} <span aria-hidden="true">&rarr;</span></button></form><p v-if="formFeedback" class="form-feedback" role="status">{{ formFeedback }}</p></section>
    </div>
    <section class="share-card section-block"><div><p class="eyebrow">{{ t('contact.shareHeading') }}</p><h2>{{ t('contact.shareTitle') }}</h2></div><button class="share-button" type="button" @click="sharePortfolio">{{ shareLabel }} <span aria-hidden="true">&rarr;</span></button></section>
  </PageFrame>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue';
import { IonIcon } from '@ionic/vue';
import { Capacitor } from '@capacitor/core';
import { Haptics, ImpactStyle } from '@capacitor/haptics';
import { Share } from '@capacitor/share';
import { logoGithub, logoLinkedin, logoWhatsapp, mailOutline } from 'ionicons/icons';
import BotaoContato from '@/components/BotaoContato.vue';
import PageFrame from '@/components/PageFrame.vue';
import SecaoTitulo from '@/components/SecaoTitulo.vue';
import { useLocale } from '@/composables/useLocale';
import { perfil } from '@/data/perfil';
const { t, locale } = useLocale();
const subject = ref('');
const message = ref('');
const formFeedback = ref('');
const shareKey = ref('contact.share');
const shareLabel = computed(() => t(shareKey.value));
const resumeUrl = `${import.meta.env.BASE_URL}${perfil.curriculo}`;
function sendMessage() {
  if (Capacitor.isNativePlatform()) void Haptics.impact({ style: ImpactStyle.Light }).catch(() => undefined);
  if (perfil.email !== 'TODO') {
    window.location.href = `mailto:${perfil.email}?subject=${encodeURIComponent(subject.value)}&body=${encodeURIComponent(message.value)}`;
    formFeedback.value = t('contact.emailReady');
    return;
  }
  if (perfil.whatsapp !== 'TODO') {
    const number = perfil.whatsapp.replace(/\D/g, '');
    window.open(`https://wa.me/${number}?text=${encodeURIComponent(`${subject.value}\n\n${message.value}`)}`, '_blank', 'noopener,noreferrer');
    formFeedback.value = t('contact.whatsappReady');
    return;
  }
  formFeedback.value = t('contact.missing');
}
async function sharePortfolio() {
  if (Capacitor.isNativePlatform()) void Haptics.impact({ style: ImpactStyle.Light }).catch(() => undefined);
  const data = { title: 'Portfolio — Julio Correa', text: locale.value === 'pt' ? 'Conheça o portfólio de Julio Correa.' : 'Explore Julio Correa’s portfolio.', url: window.location.origin };
  try {
    if (Capacitor.isNativePlatform()) { await Share.share(data); return; }
    if (navigator.share) await navigator.share(data);
    else if (navigator.clipboard) { await navigator.clipboard.writeText(data.url); shareKey.value = 'contact.copied'; }
    else shareKey.value = 'contact.shareUnavailable';
  } catch { shareKey.value = 'contact.shareCanceled'; }
}
</script>
<style scoped>
.page-intro{max-width:48rem;padding-top:2rem}.page-intro h1{margin:.8rem 0;font:600 clamp(2.7rem,9vw,5.1rem)/.98 var(--portfolio-font-display);letter-spacing:-.08em}.page-intro h1 span{color:var(--portfolio-accent)}.intro-copy{color:var(--portfolio-text-muted);line-height:1.6}.contact-layout{display:grid;gap:1.25rem}.channels{display:grid;gap:.75rem;align-content:start}.channels .section-heading{margin-bottom:.4rem}.channel-placeholder{display:flex;min-height:4rem;align-items:center;gap:.85rem;border:1px solid var(--portfolio-border);border-radius:1rem;padding:.75rem 1rem;background:var(--portfolio-surface)}.channel-placeholder>ion-icon{color:var(--portfolio-accent);font-size:1.2rem}.channel-placeholder div,.resume-card div{display:grid;gap:.2rem}.channel-placeholder b,.resume-card b{font-size:.83rem}.channel-placeholder span,.resume-card span{color:var(--portfolio-text-disabled);font: .67rem var(--portfolio-font-mono)}.resume-card{display:flex;align-items:center;justify-content:space-between;gap:.8rem;padding:1rem}.resume-card button{min-height:2.75rem;border:1px solid var(--portfolio-border);border-radius:var(--radius-pill);padding:0 .8rem;color:var(--portfolio-text-disabled);background:transparent;font: .64rem var(--portfolio-font-mono)}.message-card h2,.share-card h2{margin:.2rem 0 1.2rem;font:600 1.6rem var(--portfolio-font-display);letter-spacing:-.04em}.message-card form{display:grid;gap:.9rem}.message-card label{display:grid;gap:.45rem;color:var(--portfolio-text-muted);font-size:.75rem}.message-card input,.message-card textarea{width:100%;border:1px solid var(--portfolio-border);border-radius:.8rem;padding:.85rem;color:var(--portfolio-text);background:var(--portfolio-background);font-size:.82rem;resize:vertical}.message-card input::placeholder,.message-card textarea::placeholder{color:var(--portfolio-text-disabled)}.send-button,.share-button{display:flex;min-height:2.9rem;align-items:center;justify-content:center;gap:.7rem;border:1px solid var(--portfolio-accent);border-radius:var(--radius-pill);padding:.7rem 1rem;color:white;background:var(--portfolio-accent);font-weight:600;font-size:.8rem;cursor:pointer}.send-button:hover,.share-button:hover{background:var(--portfolio-accent-pressed)}.form-feedback{color:var(--portfolio-text-muted);font-size:.75rem;line-height:1.5}.share-card{display:flex;flex-direction:column;align-items:start;justify-content:space-between;gap:1rem}.share-card h2{margin:0}
.whatsapp-link{text-decoration:none;color:inherit}.whatsapp-link:hover{border-color:var(--portfolio-accent)}
.resume-download{display:inline-flex;min-height:2.75rem;align-items:center;border:1px solid var(--portfolio-accent);border-radius:var(--radius-pill);padding:0 .9rem;color:var(--portfolio-on-accent);background:var(--portfolio-accent);font-size:.68rem;font-weight:600;text-decoration:none;white-space:nowrap;transition:transform .2s,box-shadow .2s}.resume-download:hover{transform:translateY(-2px);box-shadow:0 8px 20px var(--portfolio-accent-glow)}
.channel-placeholder,.resume-card { transition: transform .3s cubic-bezier(.2,.8,.2,1), border-color .3s, background .3s; }.channel-placeholder:hover { transform: translateX(4px); border-color: color-mix(in srgb, var(--portfolio-accent) 40%, var(--portfolio-border)); background: var(--portfolio-surface-raised); }
.channel-placeholder>ion-icon { transition: transform .3s cubic-bezier(.2,.8,.2,1), filter .3s; }.channel-placeholder:hover>ion-icon { transform: scale(1.12); filter: drop-shadow(0 0 7px var(--portfolio-accent-glow)); }
.message-card,.share-card { box-shadow: var(--shadow-card); }.message-card { position: relative; overflow: hidden; }.message-card::after { position: absolute; top: -7rem; right: -7rem; width: 14rem; aspect-ratio: 1; border: 1px solid color-mix(in srgb, var(--portfolio-accent) 18%, transparent); border-radius: 50%; content: ''; pointer-events: none; }
.message-card input,.message-card textarea { transition: border-color .25s, box-shadow .25s, background .25s; }.message-card input:focus,.message-card textarea:focus { border-color: var(--portfolio-accent); background: var(--portfolio-surface); box-shadow: 0 0 0 4px var(--portfolio-accent-glow); outline: none; }
.send-button,.share-button { box-shadow: 0 8px 24px var(--portfolio-accent-glow), inset 0 1px 0 rgb(255 255 255 / 18%); transition: transform .25s, box-shadow .25s, background .25s; }.send-button:hover,.share-button:hover { transform: translateY(-2px); box-shadow: 0 13px 30px var(--portfolio-accent-glow), inset 0 1px 0 rgb(255 255 255 / 18%); }.send-button:active,.share-button:active { transform: translateY(0) scale(.98); }
@media(min-width:760px){.contact-layout{grid-template-columns:.9fr 1.1fr;gap:1.5rem}.share-card{flex-direction:row;align-items:center}}
</style>
