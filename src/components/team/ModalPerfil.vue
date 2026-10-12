<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, ref, watch } from 'vue';
import type { Integrante, PestanaPerfil, Proyecto } from '../../types/equipo';
import { validarEnlace } from '../../utils/contenido';
import FotoIntegrante from '../common/FotoIntegrante.vue';
import ListaTecnologias from '../common/ListaTecnologias.vue';
import Icono from '../common/Icono.vue';

const props = defineProps<{ integrante: Integrante | null; proyectos: Proyecto[]; demo: boolean; pestanaInicial: PestanaPerfil }>();
const emitir = defineEmits<{ cerrar: [] }>();
const dialogo = ref<HTMLDialogElement | null>(null);
const botonCerrar = ref<HTMLButtonElement | null>(null);
const pestanaActual = ref<PestanaPerfil>('trayectoria');
const pestanas: PestanaPerfil[] = ['trayectoria', 'aportes'];
let inicioEnFondo = false;

const aportes = computed(() => (props.integrante?.aportes ?? []).flatMap(aporte => {
  const proyecto = props.proyectos.find(item => item.id === aporte.proyectoId);
  return proyecto ? [{ proyecto, detalle: aporte.detalle }] : [];
}));
const enlacesProfesionales = computed(() => {
  const etiquetas = [['github', 'GitHub'], ['linkedin', 'LinkedIn'], ['portafolio', 'Portafolio']] as const;
  return etiquetas.flatMap(([clave, etiqueta]) => {
    const enlace = validarEnlace(props.integrante?.enlaces[clave] ?? '');
    return enlace ? [{ clave, etiqueta, enlace }] : [];
  });
});

watch(() => props.integrante, async integrante => {
  if (!integrante) { if (dialogo.value?.open) dialogo.value.close(); return; }
  pestanaActual.value = props.pestanaInicial;
  await nextTick();
  if (!dialogo.value || !props.integrante) return;
  if (!dialogo.value.open) dialogo.value.showModal();
  document.body.classList.add('modal-abierto');
  dialogo.value.scrollTop = 0;
  botonCerrar.value?.focus();
}, { flush: 'post' });

function cerrar() { dialogo.value?.close(); }
function notificarCierre() { document.body.classList.remove('modal-abierto'); emitir('cerrar'); }
function estaFuera(evento: PointerEvent | MouseEvent): boolean {
  const limites = dialogo.value?.getBoundingClientRect();
  return !!limites && (evento.clientX < limites.left || evento.clientX > limites.right || evento.clientY < limites.top || evento.clientY > limites.bottom);
}
function registrarInicio(evento: PointerEvent) { inicioEnFondo = evento.target === dialogo.value && estaFuera(evento); }
function gestionarFondo(evento: MouseEvent) {
  if (inicioEnFondo && evento.target === dialogo.value && estaFuera(evento)) cerrar();
  inicioEnFondo = false;
}
async function navegarPestanas(evento: KeyboardEvent) {
  const indice = pestanas.indexOf(pestanaActual.value);
  const movimientos: Record<string, number> = { ArrowRight: (indice + 1) % pestanas.length, ArrowLeft: (indice + pestanas.length - 1) % pestanas.length, Home: 0, End: pestanas.length - 1 };
  if (!(evento.key in movimientos)) return;
  evento.preventDefault(); pestanaActual.value = pestanas[movimientos[evento.key]];
  await nextTick();
  dialogo.value?.querySelector<HTMLButtonElement>(`#tab-${pestanaActual.value}`)?.focus();
}
onBeforeUnmount(() => { if (dialogo.value?.open) dialogo.value.close(); document.body.classList.remove('modal-abierto'); });
</script>

<template>
  <dialog id="modal-perfil" ref="dialogo" class="modal-perfil" aria-labelledby="titulo-modal"
    @close="notificarCierre" @cancel.prevent="cerrar" @pointerdown="registrarInicio" @click="gestionarFondo">
    <button id="cerrar-modal" ref="botonCerrar" class="cerrar-modal" type="button" aria-label="Cerrar perfil" @click="cerrar"><Icono nombre="cerrar" /></button>
    <template v-if="integrante">
      <div class="perfil-cabecera" :class="integrante.color">
        <div class="perfil-foto"><FotoIntegrante :integrante="integrante" :demo="demo" :carga-diferida="false" /></div>
        <div class="perfil-presentacion"><p class="etiqueta">{{ integrante.especialidad }}{{ demo ? ' · Perfil de ejemplo' : '' }}</p><h2 id="titulo-modal">{{ integrante.nombre }}</h2><p>{{ integrante.cargo }}</p><ListaTecnologias :tecnologias="integrante.tecnologias" /></div>
      </div>
      <div class="perfil-tabs" role="tablist" aria-label="Información del integrante">
        <button v-for="pestana in pestanas" :id="`tab-${pestana}`" :key="pestana" class="perfil-tab" type="button" role="tab"
          :aria-selected="pestanaActual === pestana" :aria-controls="`panel-${pestana}`" :tabindex="pestanaActual === pestana ? 0 : -1"
          @click="pestanaActual = pestana" @keydown="navegarPestanas">
          {{ pestana === 'trayectoria' ? 'Perfil y experiencia' : 'Aportes en proyectos' }}
        </button>
      </div>
      <section id="panel-trayectoria" class="perfil-panel" role="tabpanel" aria-labelledby="tab-trayectoria" tabindex="0" :hidden="pestanaActual !== 'trayectoria'">
        <h3>Sobre mí</h3><p class="perfil-biografia">{{ integrante.biografia }}</p><h3 v-if="integrante.experiencia.length">Mi experiencia</h3>
        <ol v-if="integrante.experiencia.length" class="experiencia">
          <li v-for="(experiencia, indice) in integrante.experiencia" :key="indice"><p class="experiencia-periodo">{{ experiencia.periodo }}</p><h4>{{ experiencia.puesto }}</h4><p>{{ experiencia.descripcion }}</p></li>
        </ol>
        <div v-if="enlacesProfesionales.length" class="enlaces-perfil" aria-label="Enlaces profesionales">
          <a v-for="enlace in enlacesProfesionales" :key="enlace.clave" class="enlace-social" :href="enlace.enlace" target="_blank" rel="noopener noreferrer">{{ enlace.etiqueta }}<span aria-hidden="true">↗</span></a>
        </div>
        <p v-if="demo" class="perfil-nota">Los datos de este perfil son ficticios y se incluyen para mostrar el diseño.</p>
      </section>
      <section id="panel-aportes" class="perfil-panel" role="tabpanel" aria-labelledby="tab-aportes" tabindex="0" :hidden="pestanaActual !== 'aportes'">
        <h3>Lo que aporto al equipo</h3>
        <article v-for="aporte in aportes" :key="aporte.proyecto.id" class="aporte"><h4>{{ aporte.proyecto.nombre }}</h4><p>{{ aporte.detalle }}</p><ListaTecnologias :tecnologias="aporte.proyecto.tecnologias" /></article>
        <p v-if="!aportes.length" class="perfil-biografia">Próximamente compartiremos los proyectos de este integrante.</p>
      </section>
    </template>
  </dialog>
</template>
