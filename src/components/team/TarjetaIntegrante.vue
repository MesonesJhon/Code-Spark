<script setup lang="ts">
import type { Integrante } from '../../types/equipo';
import FotoIntegrante from '../common/FotoIntegrante.vue';
import ListaTecnologias from '../common/ListaTecnologias.vue';

defineProps<{ integrante: Integrante; numero: number; totalProyectos: number; demo: boolean }>();
const emitir = defineEmits<{ abrirPerfil: [id: string, origen: HTMLElement] }>();
function abrirPerfil(evento: MouseEvent, id: string) { emitir('abrirPerfil', id, evento.currentTarget as HTMLElement); }
</script>

<template>
  <article v-revelar class="tarjeta-equipo" :class="integrante.color">
    <div class="tarjeta-visual">
      <span class="tarjeta-numero">{{ String(numero).padStart(2, '0') }} / {{ integrante.especialidad }}</span>
      <span class="tarjeta-iniciales" aria-hidden="true">{{ integrante.iniciales }}</span>
      <FotoIntegrante :integrante="integrante" :demo="demo" />
      <span v-if="demo" class="tarjeta-ejemplo">Perfil de ejemplo</span>
    </div>
    <div class="tarjeta-contenido">
      <h3>{{ integrante.nombre }}</h3><p class="tarjeta-cargo">{{ integrante.cargo }}</p>
      <p v-if="integrante.frase" class="tarjeta-frase">{{ integrante.frase }}</p>
      <ListaTecnologias v-if="integrante.tecnologias.length" :tecnologias="integrante.tecnologias" />
      <div class="tarjeta-pie">
        <span v-if="totalProyectos">{{ totalProyectos }} {{ totalProyectos === 1 ? 'proyecto' : 'proyectos' }}</span>
        <span v-else>Miembro del equipo</span>
        <button class="boton-perfil" type="button" :aria-label="`Ver perfil de ${integrante.nombre}`" @click="abrirPerfil($event, integrante.id)">Ver perfil <span aria-hidden="true">↗</span></button>
      </div>
    </div>
  </article>
</template>
