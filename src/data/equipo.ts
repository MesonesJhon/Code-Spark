import type { ConfiguracionSitio, Integrante, Proyecto } from '../types/equipo';

/** Nombres y fotografías proporcionados por el equipo, en el orden de envío.
 * Los cargos, tecnologías, experiencia y aportes se completarán con datos confirmados.
 * Los proyectos siguientes son ejemplos, sin participantes asignados.
 */
export const configuracion: ConfiguracionSitio = {
  marca: 'Code Spark',
  titulo: 'Code Spark — Siete mentes. Un mismo código.',
  descripcion: 'Conoce a los siete integrantes de Code Spark, las personas detrás de nuestro equipo de desarrollo.',
  modoDemostracion: false,
  proyectosDemostracion: false,
  correoContacto: '',
};

function crearIntegrante(datos: Pick<Integrante, 'id' | 'nombre' | 'iniciales' | 'color' | 'foto'> & Pick<Partial<Integrante>, 'fotoPosicion'>): Integrante {
  return {
    ...datos,
    cargo: 'Integrante de Code Spark',
    especialidad: 'Equipo',
    frase: '',
    tecnologias: [],
    biografia: `${datos.nombre} forma parte de Code Spark. Siete integrantes que comparten una misma identidad y construyen en equipo.`,
    experiencia: [],
    aportes: [
      {
        proyectoId: 'red-integridad',
        detalle: 'Desarrollo colaborativo de la plataforma oficial de la Red de Integridad Lambayeque, primer proyecto del equipo.',
      },
    ],
    enlaces: { github: '', linkedin: '', portafolio: '' },
  };
}

export const integrantes: Integrante[] = [
  crearIntegrante({
    id: 'jhon-mesones', nombre: 'Mesones Manayalle Jhon Esnaider', iniciales: 'JM',
    color: 'salvia', foto: 'assets/img/jhon-mesones.png', fotoPosicion: '50% 32%',
  }),
  crearIntegrante({
    id: 'carlos-martinez', nombre: 'Carlos Daniel Martinez Salazar', iniciales: 'CM',
    color: 'lavanda', foto: 'assets/img/carlos-martinez.jpeg', fotoPosicion: '50% 22%',
  }),
  crearIntegrante({
    id: 'anthony-mechan', nombre: 'Anthony Joel Mechan Parra', iniciales: 'AM',
    color: 'durazno', foto: 'assets/img/anthony-mechan.png', fotoPosicion: '50% 30%',
  }),
  crearIntegrante({
    id: 'nelson-ugaz', nombre: 'Nelson Fabrizio Ugaz Ortiz', iniciales: 'NU',
    color: 'azul', foto: 'assets/img/nelson-ugaz.png', fotoPosicion: '50% 28%',
  }),
  crearIntegrante({
    id: 'frederly-sanchez', nombre: 'Sánchez Ventura Frederly Lorenzo', iniciales: 'FS',
    color: 'rosa', foto: 'assets/img/frederly-sanchez.png', fotoPosicion: '50% 30%',
  }),
  crearIntegrante({
    id: 'jose-carrasco', nombre: 'José Manuel Carrasco Quiñones', iniciales: 'JC',
    color: 'arena', foto: 'assets/img/jose-carrasco.png', fotoPosicion: '50% 30%',
  }),
  crearIntegrante({
    id: 'cesar-espinoza', nombre: 'César Adriano Espinoza Carmen', iniciales: 'CE',
    color: 'menta', foto: 'assets/img/cesar-espinoza.png', fotoPosicion: '50% 22%',
  }),
];

export const proyectos: Proyecto[] = [
  {
    id: 'red-integridad',
    numero: '01',
    nombre: 'Red de Integridad Lambayeque',
    tipo: 'Portal web & Veeduría ciudadana',
    color: 'lima',
    descripcion: 'Plataforma multiactor para la transparencia, rendición de cuentas y vigilancia ciudadana en obras públicas.',
    tecnologias: ['Laravel', 'Blade', 'MySQL', 'PHP', 'JavaScript', 'CSS3'],
    participantes: [
      'jhon-mesones',
      'carlos-martinez',
      'anthony-mechan',
      'nelson-ugaz',
      'frederly-sanchez',
      'jose-carrasco',
      'cesar-espinoza',
    ],
    detalle: 'El primer proyecto desarrollado conjuntamente por el equipo Code Spark. Una plataforma institucional orientada a la supervisión transparente de obras públicas, verificación de estándares y rendición de cuentas en la región Lambayeque.',
    enlace: 'https://www.reddeintegridadlambayeque.org/',
    destacado: true,
    insignia: 'Primer proyecto del equipo',
    esEjemplo: false,
  },
  {
    id: 'actividades',
    numero: '02',
    nombre: 'Gestión de actividades',
    tipo: 'Aplicación web',
    color: 'lima',
    descripcion: 'Un espacio para organizar actividades, seguir su avance y coordinar a un equipo.',
    tecnologias: ['API REST', 'Vue 3', 'PostgreSQL'],
    participantes: [],
    detalle: 'Proyecto de ejemplo de una aplicación para coordinar actividades. Los proyectos y aportes reales de Code Spark se incorporarán cuando el equipo comparta su información.',
    enlace: '',
    esEjemplo: true,
  },
  {
    id: 'reservas',
    numero: '03',
    nombre: 'Reserva de vehículos',
    tipo: 'Plataforma de reservas',
    color: 'violeta',
    descripcion: 'Una experiencia para explorar viajes, elegir asientos y gestionar una reserva.',
    tecnologias: ['Laravel', 'Vue 3', 'MySQL'],
    participantes: [],
    detalle: 'Proyecto de ejemplo centrado en el flujo de reserva, la selección de asientos y la validación de disponibilidad.',
    enlace: '',
    esEjemplo: true,
  },
  {
    id: 'operaciones',
    numero: '04',
    nombre: 'Panel de operaciones',
    tipo: 'Dashboard de gestión',
    color: 'melocoton',
    descripcion: 'Información y herramientas de gestión reunidas en una interfaz clara.',
    tecnologias: ['Django', 'Docker', 'PostgreSQL'],
    participantes: [],
    detalle: 'Proyecto de ejemplo de un panel con módulos de gestión, consultas, métricas y permisos por rol.',
    enlace: '',
    esEjemplo: true,
  },
];
