<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';
import Icono from '../common/Icono.vue';
import LogotipoMarca from '../common/LogotipoMarca.vue';
import { usarTema } from '../../composables/usarTema';

defineProps<{ marca: string }>();
const { esOscuro, alternarTema } = usarTema();
const menuAbierto = ref(false);
const botonMenu = ref<HTMLButtonElement | null>(null);
const consultaMovil = window.matchMedia('(max-width: 520px)');
function cerrarMenu() { menuAbierto.value = false; }
function gestionarEscape(evento: KeyboardEvent) {
  if (evento.key === 'Escape' && menuAbierto.value) { cerrarMenu(); botonMenu.value?.focus(); }
}
onMounted(() => {
  consultaMovil.addEventListener('change', cerrarMenu);
  document.addEventListener('keydown', gestionarEscape);
});
onBeforeUnmount(() => {
  consultaMovil.removeEventListener('change', cerrarMenu);
  document.removeEventListener('keydown', gestionarEscape);
});
</script>

<template>
  <header class="cabecera">
    <div class="contenedor barra-navegacion">
      <LogotipoMarca :marca="marca" mostrar-descriptor />
      <nav id="navegacion" class="navegacion" :class="{ abierta: menuAbierto }" aria-label="Navegación principal">
        <a href="#equipo" @click="cerrarMenu">El equipo</a>
        <a href="#proyectos" @click="cerrarMenu">Proyectos</a>
        <a href="#forma-de-trabajar" @click="cerrarMenu">Cómo trabajamos</a>
      </nav>
      <div class="acciones-cabecera">
        <button id="boton-tema" class="boton-tema" type="button"
          :aria-label="esOscuro ? 'Activar tema claro' : 'Activar tema oscuro'"
          :aria-pressed="esOscuro" @click="alternarTema">
          <Icono :nombre="esOscuro ? 'sol' : 'luna'" />
        </button>
        <button id="boton-menu" ref="botonMenu" class="boton-menu" type="button"
          :aria-label="menuAbierto ? 'Cerrar menú' : 'Abrir menú'" :aria-expanded="menuAbierto"
          aria-controls="navegacion" @click="menuAbierto = !menuAbierto">
          <span></span><span></span>
        </button>
      </div>
    </div>
  </header>
</template>
