import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue';
import type { Tema } from '../types/equipo';

const claveAlmacenamiento = 'code-spark-tema';

export function usarTema() {
  const consultaSistema = window.matchMedia('(prefers-color-scheme: dark)');
  let eleccionManual = false;

  function obtenerTemaInicial(): Tema {
    try {
      const guardado = localStorage.getItem(claveAlmacenamiento);
      if (guardado === 'claro' || guardado === 'oscuro') { eleccionManual = true; return guardado; }
    } catch { /* El tema sigue funcionando si el navegador bloquea el almacenamiento. */ }
    return consultaSistema.matches ? 'oscuro' : 'claro';
  }

  const temaActual = ref<Tema>(obtenerTemaInicial());
  const esOscuro = computed(() => temaActual.value === 'oscuro');

  function aplicarTema() {
    document.documentElement.dataset.tema = temaActual.value;
    const meta = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
    if (meta) meta.content = esOscuro.value ? '#141b18' : '#f5f4ee';
  }

  function alternarTema() {
    temaActual.value = esOscuro.value ? 'claro' : 'oscuro';
    eleccionManual = true;
    try { localStorage.setItem(claveAlmacenamiento, temaActual.value); } catch { /* Preferencia de la sesión actual. */ }
  }

  function seguirSistema(evento: MediaQueryListEvent) {
    if (!eleccionManual) temaActual.value = evento.matches ? 'oscuro' : 'claro';
  }

  function sincronizarVentanas(evento: StorageEvent) {
    if (evento.key !== claveAlmacenamiento) return;
    if (evento.newValue === 'claro' || evento.newValue === 'oscuro') {
      eleccionManual = true; temaActual.value = evento.newValue;
    } else if (evento.newValue === null) {
      eleccionManual = false; temaActual.value = consultaSistema.matches ? 'oscuro' : 'claro';
    }
  }

  watch(temaActual, aplicarTema, { immediate: true });
  onMounted(() => {
    consultaSistema.addEventListener('change', seguirSistema);
    window.addEventListener('storage', sincronizarVentanas);
  });
  onBeforeUnmount(() => {
    consultaSistema.removeEventListener('change', seguirSistema);
    window.removeEventListener('storage', sincronizarVentanas);
  });

  return { temaActual, esOscuro, alternarTema };
}
