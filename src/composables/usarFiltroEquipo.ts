import { computed, ref, toValue } from 'vue';
import type { MaybeRefOrGetter } from 'vue';
import type { Integrante } from '../types/equipo';
import { filtrarIntegrantes } from '../utils/contenido';

export function usarFiltroEquipo(lista: MaybeRefOrGetter<Integrante[]>) {
  const especialidadElegida = ref('Todos');
  const busqueda = ref('');
  const especialidades = computed(() => ['Todos', ...new Set(toValue(lista).map(persona => persona.especialidad))]);
  const integrantesVisibles = computed(() => filtrarIntegrantes(toValue(lista), especialidadElegida.value, busqueda.value));

  function limpiarFiltros() {
    especialidadElegida.value = 'Todos';
    busqueda.value = '';
  }

  return { especialidadElegida, busqueda, especialidades, integrantesVisibles, limpiarFiltros };
}
