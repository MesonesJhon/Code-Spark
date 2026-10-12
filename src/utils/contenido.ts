import type { Integrante } from '../types/equipo';

export function normalizarTexto(valor: string): string {
  return valor.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase('es').trim();
}

export function filtrarIntegrantes(lista: Integrante[], especialidad = 'Todos', busqueda = ''): Integrante[] {
  const consulta = normalizarTexto(busqueda);
  return lista.filter(integrante => {
    const coincideEspecialidad = especialidad === 'Todos' || integrante.especialidad === especialidad;
    const contenido = normalizarTexto([integrante.nombre, integrante.cargo, integrante.especialidad, ...integrante.tecnologias].join(' '));
    return coincideEspecialidad && contenido.includes(consulta);
  });
}

export function validarEnlace(valor: string): string {
  if (!valor) return '';
  try {
    const url = new URL(valor);
    return ['http:', 'https:'].includes(url.protocol) ? url.href : '';
  } catch { return ''; }
}

export function obtenerFotoSegura(valor: string): string {
  if (!valor || typeof valor !== 'string') return '';
  const limpia = valor.trim();
  if (!limpia || limpia.includes('..') || /^javascript:/i.test(limpia)) return '';

  if (/^https?:\/\//i.test(limpia)) {
    return validarEnlace(limpia);
  }
  if (/^data:image\//i.test(limpia)) {
    return limpia;
  }

  let ruta = limpia.replace(/^\.?\/+/, '');
  if (!ruta.startsWith('assets/')) {
    ruta = `assets/img/${ruta}`;
  }

  const baseUrl = import.meta.env.BASE_URL || './';
  const separador = baseUrl.endsWith('/') ? '' : '/';
  return `${baseUrl}${separador}${ruta}`;
}

export function obtenerCorreoSeguro(valor: string): string {
  return /^[^\s@<>?\r\n]+@[^\s@<>?\r\n]+\.[^\s@<>?\r\n]+$/.test(valor) ? valor : '';
}
