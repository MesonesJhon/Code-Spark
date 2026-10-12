<script setup lang="ts">
defineProps<{ tecnologias: string[] }>();
</script>

<template>
  <div class="etiquetas-tecnologias">
    <span v-for="tecnologia in tecnologias" :key="tecnologia" class="tecnologia">{{ tecnologia }}</span>
  </div>
</template>
