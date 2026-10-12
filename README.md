# Code Spark · Landing del equipo en Vue 3

Proyecto completo con Vue 3, Composition API, componentes `.vue`, TypeScript y Vite. Conserva las tarjetas, el diseño adaptable, los temas y las animaciones de la landing.

## Ejecutar en tu PC

1. Extrae `code-spark-equipo-vue.zip`.
2. Abre la carpeta `code-spark-equipo-vue` en Visual Studio Code.
3. Abre la terminal integrada en esa carpeta.
4. Instala las dependencias y ejecuta el servidor:

```bash
npm ci
npm run dev
```

Abre <http://localhost:5173>. Detén el servidor con `Ctrl + C`.

Usa Node.js 22.18 o superior dentro de la rama 22, o Node.js 24.12 o superior. La entrega fue compilada con Node.js 24.19.0. Puedes comprobar tu versión con `node --version`.

Si el puerto está ocupado:

```bash
npm run dev -- --port 5174
```

En Windows también puedes ejecutar `INICIAR.bat`. Instala con `npm ci` cuando aún no existe `node_modules`, y después inicia Vite.

## Código para revisar

| Archivo o carpeta | Responsabilidad |
| --- | --- |
| `src/App.vue` | Composición de la página, selección de persona y apertura/cierre del perfil. |
| `src/main.ts` | Creación de la aplicación Vue, registro de la directiva e importación del CSS. |
| `src/components/layout/` | Cabecera, menú, cambio de tema y footer. |
| `src/components/sections/` | Hero, equipo, proyectos, metodología y cierre. |
| `src/components/team/` | Tarjeta de integrante y modal con experiencia/aportes. |
| `src/components/projects/` | Tarjeta y miniatura de cada proyecto. |
| `src/components/common/` | Componentes compartidos: iconos, logotipo, fotos, avatares y tecnologías. |
| `src/composables/usarFiltroEquipo.ts` | Estado reactivo y filtrado con `ref` y `computed`. |
| `src/composables/usarTema.ts` | Tema, preferencia del sistema, persistencia y sincronización entre pestañas. |
| `src/composables/usarMovimientoReducido.ts` | Preferencia de movimiento reducido. |
| `src/directives/revelar.ts` | Directiva `v-revelar` para animaciones de entrada y su limpieza al desmontar. |
| `src/data/equipo.ts` | Configuración, integrantes, experiencia y proyectos. |
| `src/types/equipo.ts` | Tipos e interfaces del contenido. |
| `src/utils/contenido.ts` | Normalización de búsqueda y validación de enlaces, fotos y correo. |
| `src/assets/styles/principal.css` | Paleta, temas, layout, animaciones y adaptación a móvil. |
| `public/assets/img/` | Imágenes y favicon. |
| `index.html` | Documento de entrada, metadatos y aplicación inicial del tema antes de montar Vue. |
| `tests/` | Pruebas de contenido e interacciones con Vitest y Vue Test Utils. |
| `docs/GUIA_PASO_A_PASO.md` | Personalización, revisión del código e integración con tu sistema. |
| `docs/FICHA_EQUIPO.md` | Nómina confirmada, orden de fotografías y ficha para completar perfiles. |

Los nombres de las carpetas estructurales están en inglés. Los componentes, métodos, variables y contenido están en español.

## Funcionamiento

- La cabecera gestiona el menú y el tema mediante estado reactivo.
- La sección de equipo recibe los datos con `props` y filtra con un composable.
- Cada tarjeta comunica la selección mediante el evento `abrirPerfil`.
- `App.vue` mantiene el integrante seleccionado y lo pasa al modal.
- El modal usa `<dialog>`, controla sus pestañas y emite `cerrar`.
- Los proyectos permiten consultar directamente los aportes de sus participantes.
- La directiva de animación observa elementos montados y libera observadores al desmontarlos.

Los nombres y biografías se muestran mediante interpolación Vue. No se utiliza `v-html` para renderizar perfiles.

## Personalizar

Edita `src/data/equipo.ts`. Los **siete nombres y fotografías son los proporcionados por el equipo**, en su orden original. `modoDemostracion: false` muestra sus perfiles reales. Los cargos específicos, tecnologías, experiencia y aportes permanecen pendientes de información confirmada.

Los tres proyectos conservados son ejemplos y se identifican como tales con `proyectosDemostracion: true`; no se atribuye participación a ningún integrante. Al añadir los proyectos reales, cambia ese valor a `false` y completa participantes y aportes.

```ts
export const configuracion: ConfiguracionSitio = {
  marca: 'Code Spark',
  titulo: 'Code Spark — Siete mentes. Un mismo código.',
  descripcion: 'Conoce a los siete integrantes de Code Spark.',
  modoDemostracion: false,
  proyectosDemostracion: true,
  correoContacto: 'equipo@tudominio.com',
};
```

Actualiza también los valores iniciales de marca/SEO de `index.html` y el favicon si cambias la identidad. Los textos del hero y otras secciones se editan en sus respectivos componentes `.vue`.

Guarda tus fotos en `public/assets/img/` y usa `foto: 'assets/img/nombre.webp'`. Deja `foto: ''` para mostrar las iniciales. Si falla la imagen, Vue muestra el respaldo automáticamente.

Cada integrante y proyecto necesita un ID único. Los `participantes` de un proyecto deben contener los IDs de las personas reales. Los `aportes` de cada integrante deben referirse al `proyectoId` correspondiente.

Deja vacíos los enlaces que no quieras mostrar. GitHub, LinkedIn, portafolio y enlaces de proyectos aceptan URLs absolutas `https://...` o `http://...`. El contacto aparece si hay un correo válido.

## Verificaciones

```bash
npm run check
npm test
npm run build
```

- `check`: comprueba tipos de TypeScript y plantillas Vue.
- `test`: ejecuta 16 pruebas de contenido, filtros, tema, modal, menú y respaldo de fotos.
- `build`: comprueba tipos y genera la versión de producción en `dist/`.

Para revisar la compilación local:

```bash
npm run preview
```

Abre <http://localhost:4173>. Es un servidor para revisar el build; publica los archivos de `dist/` en tu hosting para producción.

Las pruebas de interacción usan datos fijos en `tests/fixtures.ts`, por lo que puedes personalizar los perfiles sin tener que reescribir sus escenarios. La prueba de relaciones revisa los IDs de tus datos reales. Las pruebas usan jsdom. El comportamiento nativo de `<dialog>` se simula para probar el estado de Vue. No reemplazan la revisión visual ni comprueban el comportamiento real de un navegador con todas las preferencias de accesibilidad.

## Enlazar desde el footer

Después de compilar, copia el contenido de `dist/` a la carpeta pública `equipo/` de tu aplicación o hosting. Incluye tanto `index.html` como los archivos de `assets/`.

```html
<a href="/equipo/index.html">Desarrollado por Code Spark</a>
```

La base relativa de Vite permite publicar el build dentro de esa carpeta. Si tu aplicación vive en una subcarpeta, incluye su ruta base en el enlace.

No edites `dist/` para personalizar la landing: es contenido generado y la próxima compilación lo reemplazará. Edita `src/` y `public/`, y vuelve a ejecutar `npm run build`.

Consulta `docs/GUIA_PASO_A_PASO.md` para integrar el build con Laravel o reutilizar los componentes en otro frontend Vue.

## Recursos incluidos

Se incluyen las siete fotografías enviadas, un icono vectorial de chispa entre símbolos de código, versiones del logo para fondos claros y oscuros, y el favicon actualizado. La paleta conserva los tonos verde y lima. El proyecto incluye `package-lock.json` para instalar las versiones verificadas con `npm ci`. El ZIP contiene el código fuente completo y el build actualizado en `dist/`; excluye `node_modules`. Las fotos están en `public/assets/img/`. Consulta `docs/FICHA_EQUIPO.md` para comprobar la correspondencia de cada archivo y nombre.

## Documentación de las herramientas

- Vue: <https://vuejs.org/guide/quick-start.html>
- Vite: <https://vite.dev/guide/>
