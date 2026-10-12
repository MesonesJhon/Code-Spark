<script setup lang="ts">
defineProps<{ numero: string; etiqueta: string; tituloId: string }>();
</script>

<template>
  <div v-revelar class="cabecera-seccion">
    <div>
      <p class="etiqueta numero-seccion">{{ numero }} / {{ etiqueta }}</p>
      <h2 :id="tituloId"><slot name="titulo" /></h2>
    </div>
    <p><slot name="descripcion" /></p>
  </div>
</template>
