<script setup lang="ts">
import { computed } from 'vue';
import { obtenerCorreoSeguro } from '../../utils/contenido';
const props = defineProps<{ correoContacto: string }>();
const correo = computed(() => obtenerCorreoSeguro(props.correoContacto));
</script>

<template>
  <section v-revelar class="cierre contenedor">
    <div class="cierre-simbolo" aria-hidden="true">✳</div><p class="etiqueta">Code Spark / Cada aporte cuenta.</p>
    <h2>Detrás de cada pantalla,<br>hay <em>personas.</em></h2>
    <div class="cierre-acciones">
      <a class="boton boton-oscuro" href="#equipo">Vuelve a conocer al equipo <span aria-hidden="true">↑</span></a>
      <a v-if="correo" class="enlace-texto" :href="`mailto:${correo}`">Escríbenos <span aria-hidden="true">↗</span></a>
    </div>
  </section>
</template>
