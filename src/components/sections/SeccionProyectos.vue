<script setup lang="ts">
import type { Integrante, Proyecto } from '../../types/equipo';
import CabeceraSeccion from '../common/CabeceraSeccion.vue';
import TarjetaProyecto from '../projects/TarjetaProyecto.vue';

defineProps<{ proyectos: Proyecto[]; integrantes: Integrante[]; demo: boolean }>();
const emitir = defineEmits<{ abrirPerfil: [id: string, origen: HTMLElement] }>();
</script>

<template>
  <section id="proyectos" class="seccion-proyectos" aria-labelledby="titulo-proyectos">
    <div class="contenedor">
      <CabeceraSeccion numero="02" etiqueta="Lo que construimos" titulo-id="titulo-proyectos">
        <template #titulo>Del equipo <em>al proyecto.</em></template>
        <template #descripcion><template v-if="demo">Una muestra de proyectos de ejemplo.<br>Pronto compartiremos el trabajo de Code Spark.</template><template v-else>Descubre quién participó, qué hizo<br>y las tecnologías detrás de cada trabajo.</template></template>
      </CabeceraSeccion>
      <div class="lista-proyectos">
        <TarjetaProyecto v-for="proyecto in proyectos" :key="proyecto.id" :proyecto="proyecto" :integrantes="integrantes" :demo="demo"
          @abrir-perfil="(id, origen) => emitir('abrirPerfil', id, origen)" />
      </div>
    </div>
  </section>
</template>
