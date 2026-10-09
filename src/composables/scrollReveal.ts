import type { Directive } from 'vue';

export const scrollReveal: Directive<HTMLElement> = {
  mounted(element) {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      element.classList.add('is-revealed');
      return;
    }
    element.classList.add('reveal-on-scroll');
    const siblingIndex = element.parentElement ? Array.from(element.parentElement.children).indexOf(element) : 0;
    element.style.setProperty('--reveal-delay', `${Math.min(siblingIndex * 75, 300)}ms`);
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { element.classList.add('is-revealed'); observer.disconnect(); }
    }, { threshold: .12, rootMargin: '0px 0px -6% 0px' });
    observer.observe(element);
    (element as HTMLElement & { revealObserver?: IntersectionObserver }).revealObserver = observer;
  },
  unmounted(element) { (element as HTMLElement & { revealObserver?: IntersectionObserver }).revealObserver?.disconnect(); },
};
