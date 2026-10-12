<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import type { Integrante } from '../../types/equipo';
import { obtenerFotoSegura } from '../../utils/contenido';

const props = withDefaults(defineProps<{ integrante: Integrante; demo: boolean; cargaDiferida?: boolean }>(), { cargaDiferida: true });
const fotoFallida = ref(false);
const rutaFoto = computed(() => obtenerFotoSegura(props.integrante.foto));
watch(() => props.integrante.foto, () => { fotoFallida.value = false; });
</script>

<template>
  <img v-if="rutaFoto && !fotoFallida"
    :src="rutaFoto"
    :alt="demo ? 'Avatar ilustrado de ejemplo' : `Foto de ${integrante.nombre}`"
    :style="{ objectPosition: integrante.fotoPosicion || '50% 35%' }"
    :loading="cargaDiferida ? 'lazy' : 'eager'"
    decoding="async"
    @error="fotoFallida = true"
  >
  <span v-else class="avatar-respaldo" aria-hidden="true">{{ integrante.iniciales }}</span>
</template>
