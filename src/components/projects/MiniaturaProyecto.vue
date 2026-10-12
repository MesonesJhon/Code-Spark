<script setup lang="ts">
import { computed } from 'vue';
import type { Proyecto } from '../../types/equipo';
const props = defineProps<{ proyecto: Proyecto }>();
const variante = computed(() => props.proyecto.id === 'reservas' ? 'mockup-reservas' : props.proyecto.id === 'operaciones' ? 'mockup-panel' : '');
</script>

<template>
  <div class="miniatura-proyecto" :class="proyecto.color" aria-hidden="true">
    <div class="mockup" :class="variante">
      <div class="mockup-lateral"><i></i><i></i><i></i><i></i></div>
      <div class="mockup-cuerpo"><b></b><i></i><i></i><i></i></div>
    </div>
  </div>
</template>
