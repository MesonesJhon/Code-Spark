<script setup lang="ts">
import { nextTick, ref } from 'vue';
import type { Integrante, Proyecto } from '../../types/equipo';
import CabeceraSeccion from '../common/CabeceraSeccion.vue';
import Icono from '../common/Icono.vue';
import TarjetaIntegrante from '../team/TarjetaIntegrante.vue';
import { usarFiltroEquipo } from '../../composables/usarFiltroEquipo';

const props = defineProps<{ integrantes: Integrante[]; proyectos: Proyecto[]; demo: boolean }>();
const emitir = defineEmits<{ abrirPerfil: [id: string, origen: HTMLElement] }>();
const { especialidadElegida, busqueda, especialidades, integrantesVisibles, limpiarFiltros } = usarFiltroEquipo(() => props.integrantes);
const buscador = ref<HTMLInputElement | null>(null);
const totalProyectos = (id: string) => props.proyectos.filter(proyecto => proyecto.participantes.includes(id)).length;
const numeroIntegrante = (id: string) => props.integrantes.findIndex(persona => persona.id === id) + 1;
async function restablecerBusqueda() { limpiarFiltros(); await nextTick(); buscador.value?.focus(); }
</script>

<template>
  <section id="equipo" class="seccion-equipo contenedor" aria-labelledby="titulo-equipo">
    <CabeceraSeccion numero="01" etiqueta="Nuestro equipo" titulo-id="titulo-equipo">
      <template #titulo>El talento tiene <em>nombre.</em></template>
      <template #descripcion>Cada persona aporta una forma de resolver.<br>Aquí puedes conocer la suya.</template>
    </CabeceraSeccion>
    <div v-revelar class="herramientas-equipo">
      <div v-if="especialidades.length > 2 || !especialidades.includes('Equipo')" class="filtros" role="group" aria-label="Filtrar por especialidad">
        <button v-for="especialidad in especialidades" :key="especialidad" class="filtro" type="button"
          :aria-pressed="especialidadElegida === especialidad" @click="especialidadElegida = especialidad">{{ especialidad }}</button>
      </div>
      <p v-else class="etiqueta numero-seccion">{{ integrantes.length }} integrantes / Code Spark</p>
      <label class="buscador"><Icono nombre="buscar" /><input id="buscar-equipo" ref="buscador" v-model="busqueda" type="search" placeholder="Busca un integrante" aria-label="Buscar integrante por nombre o tecnología" autocomplete="off"></label>
    </div>
    <p class="solo-lectores" role="status" aria-live="polite">{{ integrantesVisibles.length }} {{ integrantesVisibles.length === 1 ? 'integrante encontrado' : 'integrantes encontrados' }}.</p>
    <div class="rejilla-equipo" :data-total="integrantesVisibles.length">
      <TarjetaIntegrante v-for="persona in integrantesVisibles" :key="persona.id" :integrante="persona"
        :numero="numeroIntegrante(persona.id)" :total-proyectos="totalProyectos(persona.id)" :demo="demo"
        @abrir-perfil="(id, origen) => emitir('abrirPerfil', id, origen)" />
    </div>
    <div v-if="integrantesVisibles.length === 0" class="estado-vacio">
      <span aria-hidden="true">⌕</span><h3>No encontramos coincidencias.</h3><p>Prueba otro nombre, tecnología o especialidad.</p>
      <button class="boton boton-oscuro" type="button" @click="restablecerBusqueda">Mostrar todo el equipo</button>
    </div>
  </section>
</template>
