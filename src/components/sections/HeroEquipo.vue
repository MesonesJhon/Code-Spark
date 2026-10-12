<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import type { Integrante } from '../../types/equipo';
import AvatarIniciales from '../common/AvatarIniciales.vue';
import { usarMovimientoReducido } from '../../composables/usarMovimientoReducido';

const props = defineProps<{ integrantes: Integrante[] }>();
const movimientoReducido = usarMovimientoReducido();
const arte = ref<HTMLElement | null>(null);
const desplazamiento = ref({ x: 0, y: 0 });
const estiloArte = computed(() => ({ '--inclinacion-x': `${desplazamiento.value.x}px`, '--inclinacion-y': `${desplazamiento.value.y}px` }));

function moverArte(evento: PointerEvent) {
  if (movimientoReducido.value || !window.matchMedia('(hover: hover) and (pointer: fine)').matches || !arte.value) return;
  const limites = arte.value.getBoundingClientRect();
  if (!limites.width || !limites.height) return;
  desplazamiento.value = { x: ((evento.clientX - limites.left) / limites.width - .5) * 12, y: ((evento.clientY - limites.top) / limites.height - .5) * 12 };
}
function restablecerArte() { desplazamiento.value = { x: 0, y: 0 }; }
watch(movimientoReducido, reducido => { if (reducido) restablecerArte(); });
</script>

<template>
  <section id="inicio" class="hero contenedor" aria-labelledby="titulo-principal">
    <div class="hero-texto">
      <p class="etiqueta"><span class="punto-verde" aria-hidden="true"></span> Code Spark / Personas detrás del código</p>
      <h1 id="titulo-principal">Las ideas toman<br>forma <span class="palabra-destacada">en equipo<svg viewBox="0 0 650 24" preserveAspectRatio="none" aria-hidden="true"><path d="M5 16C155 0 420 1 643 14" /></svg></span><span class="punto-acento">.</span></h1>
      <p class="hero-descripcion">Siete mentes. Un mismo código.<br>Somos Code Spark. Conoce a las personas que dan forma al equipo.</p>
      <div class="hero-acciones">
        <a class="boton boton-oscuro" href="#equipo">Conoce al equipo <span aria-hidden="true">↗</span></a>
        <a class="enlace-texto" href="#proyectos">Explorar proyectos <span aria-hidden="true">↘</span></a>
      </div>
      <div class="hero-firma">
        <div class="mini-avatares" aria-hidden="true"><AvatarIniciales v-for="persona in integrantes" :key="persona.id" :integrante="persona" /></div>
        <p><strong>{{ integrantes.length }} personas, un mismo equipo.</strong><span>Conectados por lo que construimos.</span></p>
      </div>
    </div>
    <div ref="arte" class="hero-arte" :style="estiloArte" aria-hidden="true" @pointermove="moverArte" @pointerleave="restablecerArte">
      <div class="arte-reticula"></div>
      <div class="arte-etiqueta"><span class="punto-verde"></span> Hecho entre personas</div>
      <div class="arte-orbita orbita-uno"></div><div class="arte-orbita orbita-dos"></div>
      <div class="arte-tarjeta tarjeta-codigo">
        <div class="terminal-barra"><i></i><i></i><i></i><span>code-spark.js</span></div>
        <div class="codigo"><span class="codigo-comentario">// Siete mentes. Un mismo código.</span><br><span class="codigo-morado">const</span> codeSpark = {<br>&nbsp; integrantes: <span class="codigo-lima">{{ integrantes.length }}</span>,<br>&nbsp; ideas: <span class="codigo-lima">compartidas</span>,<br>&nbsp; equipo: <span class="codigo-coral">'Code Spark'</span><br>};</div>
        <div class="terminal-pie"><span class="punto-verde"></span> Construyendo juntos <span>↗</span></div>
      </div>
      <div class="arte-tarjeta tarjeta-diseno"><div class="diseno-superior">Diseño + desarrollo <span>✳</span></div><div class="formas-diseno"><i></i><i></i><i></i></div><span class="diseno-pie">Cada pieza tiene su lugar.</span></div>
      <div class="arte-sello"><svg viewBox="0 0 60 60"><path d="M30 3v54M3 30h54M11 11l38 38M11 49l38-38" stroke="currentColor" stroke-width="9" /></svg></div>
      <span class="arte-coordenada">DISEÑAR. CONSTRUIR. COMPARTIR.</span>
    </div>
  </section>
</template>
