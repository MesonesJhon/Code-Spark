# Guía para revisar y personalizar el proyecto Vue 3

## 1. Instalación

Abre la carpeta `code-spark-equipo-vue` del ZIP en VS Code. Ejecuta `npm ci` y después `npm run dev`. Abre `http://localhost:5173`.

`package.json` declara Vue y las herramientas de compilación/pruebas. `package-lock.json` registra las versiones instaladas. `vite.config.ts` activa el compilador de componentes Vue y define `base: './'` para publicar en una subcarpeta.

## 2. Punto de entrada

Empieza revisando `src/main.ts`. Crea la aplicación, registra `v-revelar` y monta `App.vue` en `#app`. Después abre `src/App.vue`: ahí están las secciones, los datos y el estado del perfil seleccionado.

Cada componente usa `<script setup lang="ts">` para declarar sus props, estado, funciones y eventos. Su `<template>` muestra el contenido. El CSS general vive en un único archivo para conservar la misma apariencia entre tarjetas, secciones y modal.

## 3. Estado y comunicación

| Función | Dónde revisarla |
| --- | --- |
| Cambio de tema | `CabeceraSitio.vue` llama a `usarTema.ts`. |
| Búsqueda y especialidad | `SeccionEquipo.vue` llama a `usarFiltroEquipo.ts`. |
| Apertura del perfil | `TarjetaIntegrante.vue` emite `abrirPerfil`; `App.vue` selecciona la persona. |
| Experiencia y aportes | `ModalPerfil.vue` recibe el integrante por props y controla la pestaña activa. |
| Apertura desde un proyecto | `TarjetaProyecto.vue` emite la selección; `App.vue` abre la pestaña de aportes. |
| Animaciones de entrada | La directiva `revelar.ts` administra `IntersectionObserver`. |
| Respaldo de fotografía | `FotoIntegrante.vue` cambia a iniciales al recibir un error de carga. |

El buscador usa `v-model`. Los botones usan eventos `@click`. Las listas se construyen con `v-for` e IDs como claves. Los resultados del filtro son un `computed`, por lo que se actualizan al cambiar la búsqueda o especialidad.

## 4. Agregar una persona

En `src/data/equipo.ts`, agrega un objeto al arreglo `integrantes`:

```ts
{
  id: 'ana-perez',
  nombre: 'Ana Pérez',
  iniciales: 'AP',
  cargo: 'Desarrolladora backend',
  especialidad: 'Backend',
  color: 'salvia',
  foto: 'assets/img/ana-perez.webp',
  frase: 'Diseño servicios fáciles de mantener.',
  tecnologias: ['Python', 'Django', 'PostgreSQL'],
  biografia: 'Biografía real redactada en primera persona.',
  experiencia: [
    { periodo: '2024 – actualidad', puesto: 'Desarrollo backend', descripcion: 'Responsabilidades verificadas.' },
  ],
  aportes: [
    { proyectoId: 'mi-proyecto', detalle: 'Desarrollo de la API y sus validaciones.' },
  ],
  enlaces: {
    github: 'https://github.com/usuario',
    linkedin: '',
    portafolio: '',
  },
}
```

Guarda la fotografía en `public/assets/img/ana-perez.webp`. Si no hay foto, usa una cadena vacía. Colores disponibles: `salvia`, `lavanda`, `durazno`, `azul`, `rosa` `arena` y `menta`.

Los filtros de especialidad y el contador se generan a partir de los datos. Puedes añadir especialidades escribiendo su nombre en los perfiles.

## 5. Agregar un proyecto

En el arreglo `proyectos`:

```ts
{
  id: 'mi-proyecto',
  numero: '04',
  nombre: 'Mi sistema de gestión',
  tipo: 'Aplicación web',
  color: 'lima',
  descripcion: 'Qué problema resuelve.',
  tecnologias: ['Django', 'Vue 3', 'PostgreSQL'],
  participantes: ['ana-perez'],
  detalle: 'Alcance y trabajo realizado.',
  enlace: 'https://tudominio.com',
}
```

Colores disponibles: `lima`, `violeta` y `melocoton`. Asegúrate de que los IDs de `participantes` existan en `integrantes`. Si la persona tiene un aporte, su `proyectoId` debe coincidir con un proyecto en el que participe.

Las miniaturas actuales son ilustraciones de interfaz en HTML/CSS. Puedes reemplazar `MiniaturaProyecto.vue` por una imagen de tus proyectos si quieres usar capturas reales.

## 6. Marca, textos y diseño

La configuración y los metadatos ya usan **Code Spark**. Los siete integrantes tienen `modoDemostracion: false`. El indicador `proyectosDemostracion: true` mantiene los ejemplos claramente identificados hasta incorporar los proyectos reales. Actualiza `src/data/equipo.ts` y los valores iniciales de título y descripción en `index.html` si cambias la marca.

El orden de las fotografías está registrado en `docs/FICHA_EQUIPO.md`. El campo opcional `fotoPosicion` controla el encuadre con CSS sin alterar el archivo original. No ordenes el arreglo de integrantes si deseas conservar la correspondencia acordada.

Los textos generales están en los componentes de `sections/`. El logotipo de la interfaz se encuentra en `LogotipoMarca.vue`. Los recursos reutilizables están en `public/assets/img/`: `code-spark-logo.svg`, `code-spark-logo-oscuro.svg`, `code-spark-isotipo.svg` y `code-spark-favicon.svg`.

En `src/assets/styles/principal.css`, `:root` contiene el tema claro y `[data-tema="oscuro"]` el oscuro. Las variables principales son `--fondo`, `--superficie`, `--texto`, `--texto-secundario`, `--borde`, `--acento` y `--verde`.

El componente del hero respeta movimiento reducido. La directiva de entrada libera sus observadores al desmontar los elementos, incluyendo tarjetas que se retiran al filtrar.

## 7. Revisar el comportamiento

Ejecuta `npm run check`, `npm test` y `npm run build`.

En el navegador revisa:

1. Ambas apariencias y la recarga con la elección guardada.
2. Búsqueda con tildes, sin tildes y por tecnologías.
3. Combinación de filtros y recuperación tras una búsqueda sin resultados.
4. Todos los perfiles, experiencia y aportes.
5. Navegación de pestañas con flechas y cierre con `Escape`.
6. Retorno del foco al botón desde el que se abrió el perfil.
7. Participantes y enlaces de cada proyecto.
8. Menú móvil y tamaños de pantalla pequeños.
9. Preferencia de movimiento reducido.
10. Enlaces y fotografías reales.

Las pruebas de componentes se ejecutan en jsdom. No verifican el diseño, el recorte visual de fotografías ni la implementación nativa de diálogo de cada navegador.

## 8. Publicación como landing independiente

Para la publicación principal de Code Spark usa [GitHub Pages](GITHUB_PAGES.md). Cada push a `main` ejecuta las comprobaciones y publica la página después de activar GitHub Actions en Settings → Pages. El crédito del footer de Red de Integridad está en [integraciones/red-integridad](integraciones/red-integridad/README.md).

Si prefieres alojar una copia dentro de otro sistema, sigue los pasos siguientes.

Ejecuta `npm run build`. Copia el contenido completo de `dist/` a una carpeta pública `equipo`.

En Laravel, copia los archivos a `public/equipo`. Puedes enlazarlos desde Blade:

```blade
<a href="{{ asset('equipo/index.html') }}">Conoce al equipo de desarrollo</a>
```

Si el footer está en tu frontend Vue, puedes copiar el build dentro de `public/equipo` del frontend y añadir:

```vue
<template>
  <footer>
    Desarrollado por <a href="/equipo/index.html">Code Spark</a>.
  </footer>
</template>
```

Es un enlace normal a una página independiente. Si el sistema se sirve desde una subcarpeta, ajusta la URL. Una vista previa privada solo permite revisar la landing con la cuenta autorizada; para los visitantes de tu sistema usa el build publicado en su hosting.

## 9. Reutilizar el código en un proyecto Vue existente

Si prefieres integrarla como vista dentro de tu frontend:

1. Copia los componentes, composables, directiva, datos, tipos y utilidades de `src` al destino que elijas.
2. Copia las imágenes de `public/assets/img`.
3. Usa `App.vue` como una vista llamada, por ejemplo, `LandingEquipo.vue`. Ajusta las rutas relativas de sus imports al moverla.
4. Importa `principal.css` y registra `revelar` en la instancia Vue de tu aplicación, igual que en `main.ts`.
5. Añade la vista a tu organización de navegación actual.
6. Asegúrate de que el CSS de tu sistema no cambie los estilos globales de esta página. Al compartir layout puede convenir limitar estos estilos al contenedor de la landing.

Los enlaces internos actuales usan anclas HTML. Si tu aplicación utiliza navegación basada en hash, adapta esos enlaces a desplazamiento por `scrollIntoView` para que no sustituyan el hash de la ruta.

## 10. Archivos que se distribuyen

El ZIP contiene `src`, `public`, configuraciones, pruebas, documentación y el build en `dist`. No incluye `node_modules`; `npm ci` lo reconstruye a partir del lockfile.

Después de modificar `src` o `public`, recompila antes de subir el build. Vite reemplaza `dist`, por lo que las ediciones directas en esa carpeta no se conservan.
