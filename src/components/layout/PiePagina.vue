<script setup lang="ts">
import LogotipoMarca from '../common/LogotipoMarca.vue';
defineProps<{ marca: string }>();
const anioActual = new Date().getFullYear();
</script>

<template>
  <footer class="pie-pagina contenedor">
    <LogotipoMarca :marca="marca" />
    <p>{{ marca }} · Siete mentes. Un mismo código. · {{ anioActual }}</p>
    <a class="enlace-texto" href="#equipo">Créditos del desarrollo <span aria-hidden="true">↗</span></a>
  </footer>
</template>
