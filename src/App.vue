<script setup lang="ts">
import { nextTick, onMounted, ref } from 'vue';
import { configuracion, integrantes, proyectos } from './data/equipo';
import type { Integrante, PestanaPerfil } from './types/equipo';
import CabeceraSitio from './components/layout/CabeceraSitio.vue';
import PiePagina from './components/layout/PiePagina.vue';
import HeroEquipo from './components/sections/HeroEquipo.vue';
import FranjaEspecialidades from './components/sections/FranjaEspecialidades.vue';
import SeccionEquipo from './components/sections/SeccionEquipo.vue';
import SeccionProyectos from './components/sections/SeccionProyectos.vue';
import SeccionMetodo from './components/sections/SeccionMetodo.vue';
import CierreEquipo from './components/sections/CierreEquipo.vue';
import ModalPerfil from './components/team/ModalPerfil.vue';

const integranteSeleccionado = ref<Integrante | null>(null);
const pestanaInicial = ref<PestanaPerfil>('trayectoria');
let origenPerfil: HTMLElement | null = null;

function abrirPerfil(id: string, origen: HTMLElement, pestana: PestanaPerfil = 'trayectoria') {
  const persona = integrantes.find(integrante => integrante.id === id);
  if (!persona) return;
  origenPerfil = origen;
  pestanaInicial.value = pestana;
  integranteSeleccionado.value = persona;
}
function abrirAporte(id: string, origen: HTMLElement) { abrirPerfil(id, origen, 'aportes'); }
async function cerrarPerfil() {
  integranteSeleccionado.value = null;
  await nextTick();
  if (origenPerfil?.isConnected) origenPerfil.focus();
}
onMounted(() => {
  document.title = configuracion.titulo;
  const descripcion = document.querySelector<HTMLMetaElement>('meta[name="description"]');
  if (descripcion) descripcion.content = configuracion.descripcion;
});
</script>

<template>
  <a class="salto-contenido" href="#contenido">Saltar al contenido</a>
  <div v-if="configuracion.modoDemostracion" class="aviso-demo">Vista de ejemplo <span aria-hidden="true">·</span> Perfiles y proyectos ficticios, listos para personalizar.</div>
  <CabeceraSitio :marca="configuracion.marca" />
  <main id="contenido">
    <HeroEquipo :integrantes="integrantes" />
    <FranjaEspecialidades />
    <SeccionEquipo :integrantes="integrantes" :proyectos="proyectos" :demo="configuracion.modoDemostracion" @abrir-perfil="abrirPerfil" />
    <SeccionProyectos :proyectos="proyectos" :integrantes="integrantes" :demo="configuracion.proyectosDemostracion ?? configuracion.modoDemostracion" @abrir-perfil="abrirAporte" />
    <SeccionMetodo />
    <CierreEquipo :correo-contacto="configuracion.correoContacto" />
  </main>
  <PiePagina :marca="configuracion.marca" />
  <ModalPerfil :integrante="integranteSeleccionado" :proyectos="proyectos" :demo="configuracion.modoDemostracion" :pestana-inicial="pestanaInicial" @cerrar="cerrarPerfil" />
</template>
