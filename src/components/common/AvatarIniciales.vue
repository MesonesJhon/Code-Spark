<script setup lang="ts">
import type { Integrante } from '../../types/equipo';
import FotoIntegrante from './FotoIntegrante.vue';
defineProps<{ integrante: Integrante }>();
</script>

<template>
  <span class="mini-avatar" :class="integrante.color" :title="integrante.nombre" aria-hidden="true">
    <FotoIntegrante :integrante="integrante" :demo="false" />
  </span>
</template>
