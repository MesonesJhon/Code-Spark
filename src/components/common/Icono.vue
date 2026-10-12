<script setup lang="ts">
defineProps<{ nombre: 'luna' | 'sol' | 'buscar' | 'cerrar' }>();
</script>

<template>
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true">
    <path v-if="nombre === 'luna'" d="M20.7 13.2A8.6 8.6 0 0 1 10.8 3.3 8.7 8.7 0 1 0 20.7 13.2Z" />
    <template v-else-if="nombre === 'sol'">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.4 1.4m11.2 11.2L19 19M5 19l1.4-1.4M17.6 6.4 19 5" />
    </template>
    <template v-else-if="nombre === 'buscar'">
      <circle cx="10.5" cy="10.5" r="6.5" /><path d="m16 16 5 5" />
    </template>
    <path v-else d="m6 6 12 12M18 6 6 18" />
  </svg>
</template>
