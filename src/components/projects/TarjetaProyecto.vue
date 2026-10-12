<script setup lang="ts">
import { computed } from 'vue';
import type { Integrante, Proyecto } from '../../types/equipo';
import { validarEnlace } from '../../utils/contenido';
import AvatarIniciales from '../common/AvatarIniciales.vue';
import ListaTecnologias from '../common/ListaTecnologias.vue';
import MiniaturaProyecto from './MiniaturaProyecto.vue';

const props = defineProps<{ proyecto: Proyecto; integrantes: Integrante[]; demo: boolean }>();
const emitir = defineEmits<{ abrirPerfil: [id: string, origen: HTMLElement] }>();
const participantes = computed(() => props.proyecto.participantes.flatMap(id => {
  const persona = props.integrantes.find(integrante => integrante.id === id);
  return persona ? [persona] : [];
}));
const enlaceProyecto = computed(() => validarEnlace(props.proyecto.enlace));
function abrirAporte(id: string, evento: MouseEvent) { emitir('abrirPerfil', id, evento.currentTarget as HTMLElement); }
</script>

<template>
  <details v-revelar class="proyecto">
    <summary>
      <MiniaturaProyecto :proyecto="proyecto" />
      <div class="proyecto-texto">
        <p class="proyecto-tipo">{{ proyecto.tipo }}{{ demo ? ' · Ejemplo' : '' }}</p>
        <h3>{{ proyecto.nombre }}</h3><p>{{ proyecto.descripcion }}</p>
      </div>
      <div class="proyecto-equipo">
        <div v-if="participantes.length" class="mini-avatares"><AvatarIniciales v-for="persona in participantes" :key="persona.id" :integrante="persona" /></div>
        <span v-if="participantes.length">{{ participantes.length }} participantes</span>
        <span v-else-if="demo">Proyecto de ejemplo</span>
      </div>
      <span class="proyecto-flecha" aria-hidden="true">↗</span>
    </summary>
    <div class="proyecto-detalle">
      <p>{{ proyecto.detalle }}</p><ListaTecnologias :tecnologias="proyecto.tecnologias" />
      <div v-if="participantes.length" class="proyecto-participantes" aria-label="Participantes del proyecto">
        <button v-for="persona in participantes" :key="persona.id" class="boton-participante" type="button"
          :aria-label="`Ver aporte de ${persona.nombre}`" @click="abrirAporte(persona.id, $event)">
          <AvatarIniciales :integrante="persona" />{{ persona.nombre }}<span aria-hidden="true">↗</span>
        </button>
      </div>
      <a v-if="enlaceProyecto" class="enlace-texto enlace-proyecto" :href="enlaceProyecto" target="_blank" rel="noopener noreferrer">Visitar proyecto <span aria-hidden="true">↗</span></a>
    </div>
  </details>
</template>
