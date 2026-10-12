<script setup lang="ts">
withDefaults(defineProps<{ marca: string; mostrarDescriptor?: boolean }>(), { mostrarDescriptor: false });
</script>

<template>
  <a class="marca" href="#inicio" :aria-label="`${marca}, inicio`">
    <svg class="marca-simbolo" viewBox="0 0 48 48" aria-hidden="true">
      <rect width="48" height="48" rx="13" fill="#d0ed75" />
      <path d="M10 17l-5 7 5 7m28-14 5 7-5 7" fill="none" stroke="#263524" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M24 9l4 11 7 4-7 4-4 11-4-11-7-4 7-4z" fill="#263524" />
    </svg>
    <span class="marca-nombre">{{ marca }}</span>
    <span v-if="mostrarDescriptor" class="marca-descriptor">equipo de desarrollo</span>
  </a>
</template>
