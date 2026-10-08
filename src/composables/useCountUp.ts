import { onBeforeUnmount, onMounted, ref } from 'vue';

export function useCountUp(target: number, duration = 850) {
  const value = ref(0);
  const element = ref<HTMLElement | null>(null);
  let observer: IntersectionObserver | undefined;
  let frame = 0;

  function start() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { value.value = target; return; }
    const started = performance.now();
    const tick = (now: number) => {
      const progress = Math.min(1, (now - started) / duration);
      value.value = Math.round(target * (1 - (1 - progress) ** 3));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
  }

  onMounted(() => {
    if (!element.value || !('IntersectionObserver' in window)) { start(); return; }
    observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { start(); observer?.disconnect(); }
    }, { threshold: .35 });
    observer.observe(element.value);
  });
  onBeforeUnmount(() => { observer?.disconnect(); cancelAnimationFrame(frame); });
  return { value, element };
}
