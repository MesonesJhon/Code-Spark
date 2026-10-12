import type { ObjectDirective } from 'vue';

interface ControlAnimacion {
  observador: IntersectionObserver;
  consulta: MediaQueryList;
  mostrar: () => void;
}

const controles = new WeakMap<HTMLElement, ControlAnimacion>();

export const revelar: ObjectDirective<HTMLElement> = {
  beforeMount(elemento) {
    elemento.classList.add('revelar');
    if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      elemento.classList.add('pendiente-revelar');
    }
  },
  mounted(elemento) {
    if (!elemento.classList.contains('pendiente-revelar')) return;
    const consulta = window.matchMedia('(prefers-reduced-motion: reduce)');
    const observador = new IntersectionObserver(entradas => {
      if (entradas.some(entrada => entrada.isIntersecting)) mostrar();
    }, { threshold: .08, rootMargin: '0px 0px 25px 0px' });
    function mostrar() {
      elemento.classList.add('visible');
      elemento.classList.remove('pendiente-revelar');
      observador.disconnect();
      consulta.removeEventListener('change', mostrar);
    }
    controles.set(elemento, { observador, consulta, mostrar });
    consulta.addEventListener('change', mostrar);
    observador.observe(elemento);
  },
  unmounted(elemento) {
    const control = controles.get(elemento);
    control?.observador.disconnect();
    control?.consulta.removeEventListener('change', control.mostrar);
    controles.delete(elemento);
  },
};
