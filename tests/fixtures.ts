// Datos fijos de prueba: permiten editar los perfiles reales sin cambiar los escenarios de interacción.
import type { ConfiguracionSitio, Integrante, Proyecto } from '../src/types/equipo';

/**
 * Fuente de contenido. Los nombres, experiencias y proyectos son FICTICIOS.
 * Sustituye estos datos antes de presentar la página como el equipo real.
 * Mantén los identificadores: conectan proyectos con personas.
 */
export const configuracionPrueba: ConfiguracionSitio = {
  marca: 'Code Spark',
  titulo: 'Code Spark — El equipo detrás del proyecto',
  descripcion: 'Conoce al equipo de desarrollo, su experiencia y los proyectos en los que participa.',
  modoDemostracion: true,
  correoContacto: '',
};

export const integrantesPrueba: Integrante[] = [
  {
    id: 'valeria', nombre: 'Valeria Ramos', iniciales: 'VR', cargo: 'Desarrolladora backend',
    especialidad: 'Backend', color: 'salvia', foto: 'assets/img/avatar-valeria.svg',
    frase: 'Estructura clara. Datos que conectan.',
    tecnologias: ['Python', 'Django', 'PostgreSQL'],
    biografia: 'Me gusta entender las reglas del negocio y convertirlas en servicios que el equipo pueda mantener. Trabajo con APIs y bases de datos, cuidando que las decisiones sean claras para quienes vienen después.',
    experiencia: [
      {periodo: 'Experiencia de ejemplo', puesto: 'Desarrollo de APIs', descripcion: 'Diseño de servicios, validación de datos y permisos para aplicaciones de gestión.'},
      {periodo: 'Experiencia de ejemplo', puesto: 'Modelado de datos', descripcion: 'Organización de entidades, relaciones y consultas en bases de datos relacionales.'},
    ],
    aportes: [{proyectoId: 'actividades', detalle: 'API de actividades, permisos y reportes.'}, {proyectoId: 'operaciones', detalle: 'Modelado de datos y endpoints del panel.'}],
    enlaces: {github: '', linkedin: '', portafolio: ''},
  },
  {
    id: 'diego', nombre: 'Diego Torres', iniciales: 'DT', cargo: 'Desarrollador frontend',
    especialidad: 'Frontend', color: 'lavanda', foto: 'assets/img/avatar-diego.svg',
    frase: 'Interacciones que se sienten naturales.',
    tecnologias: ['Vue 3', 'TypeScript', 'CSS'],
    biografia: 'Construyo interfaces que funcionan bien en distintas pantallas. Me interesa que los componentes sean fáciles de reutilizar y que las personas puedan completar una tarea sin perderse en la interfaz.',
    experiencia: [
      {periodo: 'Experiencia de ejemplo', puesto: 'Interfaces web', descripcion: 'Vistas de gestión, componentes reutilizables y consumo de APIs.'},
      {periodo: 'Experiencia de ejemplo', puesto: 'Accesibilidad', descripcion: 'Navegación con teclado, estados de interacción y diseño adaptable.'},
    ],
    aportes: [{proyectoId: 'actividades', detalle: 'Vistas de actividades y componentes del dashboard.'}, {proyectoId: 'reservas', detalle: 'Selección de asientos y flujo de reserva.'}],
    enlaces: {github: '', linkedin: '', portafolio: ''},
  },
  {
    id: 'camila', nombre: 'Camila Rojas', iniciales: 'CR', cargo: 'Diseñadora de producto',
    especialidad: 'Diseño', color: 'durazno', foto: 'assets/img/avatar-camila.svg',
    frase: 'Primero las personas. Luego los píxeles.',
    tecnologias: ['Figma', 'UX / UI', 'Prototipado'],
    biografia: 'Exploro cómo usan las personas un producto y organizo esa información en flujos e interfaces. Me gusta trabajar cerca de desarrollo para que el diseño conserve su intención cuando llega a producción.',
    experiencia: [
      {periodo: 'Experiencia de ejemplo', puesto: 'Diseño de producto', descripcion: 'Definición de flujos, prototipos y componentes visuales.'},
      {periodo: 'Experiencia de ejemplo', puesto: 'Experiencia de usuario', descripcion: 'Revisión de tareas y pruebas de comprensión con prototipos.'},
    ],
    aportes: [{proyectoId: 'actividades', detalle: 'Flujos de trabajo y sistema de componentes.'}, {proyectoId: 'reservas', detalle: 'Diseño del proceso de reserva.'}],
    enlaces: {github: '', linkedin: '', portafolio: ''},
  },
  {
    id: 'mateo', nombre: 'Mateo Silva', iniciales: 'MS', cargo: 'Ingeniero de infraestructura',
    especialidad: 'DevOps', color: 'azul', foto: 'assets/img/avatar-mateo.svg',
    frase: 'Del repositorio a una entrega confiable.',
    tecnologias: ['Docker', 'Linux', 'CI / CD'],
    biografia: 'Preparo entornos y automatizo tareas de entrega para que el equipo pueda concentrarse en el producto. Documentar el despliegue y saber cómo recuperar una versión son parte del trabajo.',
    experiencia: [
      {periodo: 'Experiencia de ejemplo', puesto: 'Entornos de despliegue', descripcion: 'Configuración de contenedores, servicios y variables de entorno.'},
      {periodo: 'Experiencia de ejemplo', puesto: 'Automatización de entregas', descripcion: 'Integración de verificaciones y pasos de publicación.'},
    ],
    aportes: [{proyectoId: 'actividades', detalle: 'Entornos de despliegue y automatización.'}, {proyectoId: 'operaciones', detalle: 'Configuración de servicios y monitoreo.'}],
    enlaces: {github: '', linkedin: '', portafolio: ''},
  },
  {
    id: 'lucia', nombre: 'Lucía Vega', iniciales: 'LV', cargo: 'Analista de calidad',
    especialidad: 'QA', color: 'rosa', foto: 'assets/img/avatar-lucia.svg',
    frase: 'Los detalles también son parte del producto.',
    tecnologias: ['Pruebas API', 'Postman', 'QA'],
    biografia: 'Convierto requisitos en escenarios de prueba y reviso lo que ocurre cuando un usuario toma un camino inesperado. Compartir hallazgos claros ayuda al equipo a resolver antes de entregar.',
    experiencia: [
      {periodo: 'Experiencia de ejemplo', puesto: 'Validación funcional', descripcion: 'Escenarios de prueba, registro de incidencias y revisión de regresiones.'},
      {periodo: 'Experiencia de ejemplo', puesto: 'Pruebas de servicios', descripcion: 'Verificación de respuestas, validaciones y permisos de una API.'},
    ],
    aportes: [{proyectoId: 'reservas', detalle: 'Pruebas de disponibilidad y confirmación de reservas.'}, {proyectoId: 'operaciones', detalle: 'Validación de métricas y permisos.'}],
    enlaces: {github: '', linkedin: '', portafolio: ''},
  },
  {
    id: 'nicolas', nombre: 'Nicolás Soto', iniciales: 'NS', cargo: 'Desarrollador full stack',
    especialidad: 'Full stack', color: 'arena', foto: 'assets/img/avatar-nicolas.svg',
    frase: 'Conecto cada parte de la solución.',
    tecnologias: ['Laravel', 'Vue 3', 'MySQL'],
    biografia: 'Trabajo entre los servicios y la interfaz. Me gusta seguir una función de principio a fin, entender dónde se encuentran las piezas y dejar una implementación que otras personas puedan continuar.',
    experiencia: [
      {periodo: 'Experiencia de ejemplo', puesto: 'Aplicaciones de gestión', descripcion: 'Desarrollo de módulos, integración de formularios y reglas de negocio.'},
      {periodo: 'Experiencia de ejemplo', puesto: 'Integración de sistemas', descripcion: 'Conexión entre frontend, APIs y almacenamiento.'},
    ],
    aportes: [{proyectoId: 'reservas', detalle: 'Reglas de reserva e integración frontend y backend.'}, {proyectoId: 'operaciones', detalle: 'Módulos del panel y flujos de gestión.'}],
    enlaces: {github: '', linkedin: '', portafolio: ''},
  },
];

export const proyectosPrueba: Proyecto[] = [
  {id: 'actividades', numero: '01', nombre: 'Gestión de actividades', tipo: 'Aplicación web', color: 'lima',
    descripcion: 'Un espacio para organizar actividades, seguir su avance y coordinar a un equipo.',
    tecnologias: ['API REST', 'Vue 3', 'PostgreSQL'],
    participantes: ['valeria', 'diego', 'camila', 'mateo'],
    detalle: 'Ejemplo de proyecto que reúne diseño de flujos, backend, interfaz y despliegue. Los aportes están detallados en el perfil de cada participante.', enlace: ''},
  {id: 'reservas', numero: '02', nombre: 'Reserva de vehículos', tipo: 'Plataforma de reservas', color: 'violeta',
    descripcion: 'Una experiencia para explorar viajes, elegir asientos y gestionar una reserva.',
    tecnologias: ['Laravel', 'Vue 3', 'MySQL'],
    participantes: ['diego', 'camila', 'lucia', 'nicolas'],
    detalle: 'Ejemplo centrado en el flujo de reserva, la selección de asientos y la validación de disponibilidad.', enlace: ''},
  {id: 'operaciones', numero: '03', nombre: 'Panel de operaciones', tipo: 'Dashboard de gestión', color: 'melocoton',
    descripcion: 'Información y herramientas de gestión reunidas en una interfaz clara.',
    tecnologias: ['Django', 'Docker', 'PostgreSQL'],
    participantes: ['valeria', 'mateo', 'lucia', 'nicolas'],
    detalle: 'Ejemplo de panel con módulos de gestión, consultas, métricas y permisos por rol.', enlace: ''},
];
