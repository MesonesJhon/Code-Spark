import { onBeforeUnmount, onMounted, ref } from 'vue';

export function usarMovimientoReducido() {
  const consulta = window.matchMedia('(prefers-reduced-motion: reduce)');
  const movimientoReducido = ref(consulta.matches);
  const actualizar = (evento: MediaQueryListEvent) => { movimientoReducido.value = evento.matches; };
  onMounted(() => consulta.addEventListener('change', actualizar));
  onBeforeUnmount(() => consulta.removeEventListener('change', actualizar));
  return movimientoReducido;
}
