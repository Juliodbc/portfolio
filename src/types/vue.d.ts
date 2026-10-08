import type { scrollReveal } from '@/composables/scrollReveal';

declare module 'vue' {
  interface GlobalDirectives {
    vReveal: typeof scrollReveal;
  }
}

export {};
