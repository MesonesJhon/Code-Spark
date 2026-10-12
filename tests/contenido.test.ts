import { describe, expect, it } from 'vitest';
import { filtrarIntegrantes, validarEnlace, obtenerFotoSegura, obtenerCorreoSeguro } from '../src/utils/contenido';
import { integrantes as integrantesReales, proyectos as proyectosReales } from '../src/data/equipo';
import { integrantesPrueba as integrantes } from './fixtures';

describe('Contenido y relaciones del equipo', () => {
  it('encuentra a una persona con tilde usando texto sin tilde', () => {
    expect(filtrarIntegrantes(integrantes, 'Todos', 'lucia').map(persona => persona.id)).toEqual(['lucia']);
  });
  it('combina especialidad y tecnología', () => {
    expect(filtrarIntegrantes(integrantes, 'Frontend', 'vue').map(persona => persona.id)).toEqual(['diego']);
    expect(filtrarIntegrantes(integrantes, 'Backend', 'vue')).toHaveLength(0);
  });
  it('recupera el listado completo tras una búsqueda vacía', () => {
    expect(filtrarIntegrantes(integrantes, 'Todos', 'inexistente')).toHaveLength(0);
    expect(filtrarIntegrantes(integrantes)).toHaveLength(integrantes.length);
  });
  it('no acepta enlaces que ejecuten código', () => {
    expect(validarEnlace('https://github.com/equipo')).toBe('https://github.com/equipo');
    for (const enlace of ['javascript:alert(1)', 'data:text/html,<script>', '/sin-dominio', '']) expect(validarEnlace(enlace)).toBe('');
  });
  it('resuelve fotos locales y rechaza rutas fuera de imágenes', () => {
    expect(obtenerFotoSegura('assets/img/persona.webp')).toMatch(/assets\/img\/persona\.webp$/);
    expect(obtenerFotoSegura('assets/img/../archivo.svg')).toBe('');
    expect(obtenerFotoSegura('javascript:alert(1)')).toBe('');
  });
  it('solo activa contacto con un correo válido', () => {
    expect(obtenerCorreoSeguro('equipo@example.com')).toBe('equipo@example.com');
    for (const correo of ['', 'no-es-correo', 'equipo@example.com?subject=otro', 'a\n@example.com']) expect(obtenerCorreoSeguro(correo)).toBe('');
  });
  it('todos los aportes y participantes apuntan a IDs existentes', () => {
    expect(new Set(integrantesReales.map(persona => persona.id)).size).toBe(integrantesReales.length);
    expect(new Set(proyectosReales.map(proyecto => proyecto.id)).size).toBe(proyectosReales.length);
    for (const proyecto of proyectosReales) {
      for (const id of proyecto.participantes) expect(integrantesReales.some(persona => persona.id === id)).toBe(true);
      expect(new Set(proyecto.participantes).size).toBe(proyecto.participantes.length);
    }
    for (const persona of integrantesReales) {
      for (const aporte of persona.aportes) expect(proyectosReales.some(proyecto => proyecto.id === aporte.proyectoId && proyecto.participantes.includes(persona.id))).toBe(true);
    }
  });
});
