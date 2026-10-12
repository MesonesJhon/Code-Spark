export type ColorIntegrante = 'salvia' | 'lavanda' | 'durazno' | 'azul' | 'rosa' | 'arena' | 'menta';
export type ColorProyecto = 'lima' | 'violeta' | 'melocoton';
export type Tema = 'claro' | 'oscuro';
export type PestanaPerfil = 'trayectoria' | 'aportes';

export interface ConfiguracionSitio {
  marca: string;
  titulo: string;
  descripcion: string;
  modoDemostracion: boolean;
  proyectosDemostracion?: boolean;
  correoContacto: string;
}

export interface Experiencia {
  periodo: string;
  puesto: string;
  descripcion: string;
}

export interface Aporte {
  proyectoId: string;
  detalle: string;
}

export interface EnlacesProfesionales {
  github: string;
  linkedin: string;
  portafolio: string;
}

export interface Integrante {
  id: string;
  nombre: string;
  iniciales: string;
  cargo: string;
  especialidad: string;
  color: ColorIntegrante;
  foto: string;
  fotoPosicion?: string;
  frase: string;
  tecnologias: string[];
  biografia: string;
  experiencia: Experiencia[];
  aportes: Aporte[];
  enlaces: EnlacesProfesionales;
}

export interface Proyecto {
  id: string;
  numero: string;
  nombre: string;
  tipo: string;
  color: ColorProyecto;
  descripcion: string;
  tecnologias: string[];
  participantes: string[];
  detalle: string;
  enlace: string;
}
