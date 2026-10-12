# Publicar Code Spark en GitHub Pages

Repositorio: <https://github.com/MesonesJhon/Code-Spark>  
Dirección de la página una vez publicada: <https://mesonesjhon.github.io/Code-Spark/>

## Activar la primera publicación

Esta configuración se realiza una sola vez con tu cuenta de GitHub:

1. Abre [Settings → Pages](https://github.com/MesonesJhon/Code-Spark/settings/pages).
2. En **Build and deployment → Source**, selecciona **GitHub Actions**.
3. Abre [Actions](https://github.com/MesonesJhon/Code-Spark/actions/workflows/deploy-pages.yml).
4. Selecciona **Publicar Code Spark en GitHub Pages**.
5. Pulsa **Run workflow**, elige la rama **main** y confirma con **Run workflow**.
6. Espera a que se completen **Comprobar y compilar** y **Publicar la página**. El paso **Desplegar** debe ejecutarse, no quedar omitido.
7. Abre <https://mesonesjhon.github.io/Code-Spark/>.

El workflow ya está en `.github/workflows/deploy-pages.yml`; no necesitas crear otro. GitHub genera el token temporal del workflow. No hay que introducir tokens personales ni guardar credenciales en el repositorio.

Si Pages no está activado con la fuente GitHub Actions, el workflow comprueba y compila el proyecto, pero omite el despliegue. Muestra el aviso **Publicación pendiente de activación** y los pasos anteriores en su resumen. Una ejecución verde con ese aviso todavía no significa que la página esté publicada.

## Publicar cambios con Git

Si aún no tienes el repositorio en tu PC:

```bash
git clone https://github.com/MesonesJhon/Code-Spark.git
cd Code-Spark
npm ci
npm run dev
```

Antes de empezar a editar, trae la última versión de `main` con el directorio de trabajo limpio:

```bash
git pull --ff-only origin main
```

Para publicar tus cambios después de editar:

```bash
npm test
npm run build:pages
git add .
git commit -m "Actualizar la página de Code Spark"
git push origin main
```

Cuando subes un commit a `main`, GitHub Actions instala las dependencias, ejecuta las pruebas, compila y despliega la página. Si fallan las pruebas o la compilación, no se publica esa versión.

`git deploy` no es un comando estándar de Git. En este proyecto, la publicación se inicia con **`git push origin main`**. También puedes ejecutar el workflow manualmente desde Actions.

Los pull requests ejecutan las comprobaciones y la compilación; la publicación sucede al incorporar sus cambios a `main`.

## Rutas de los archivos

La página se sirve dentro de `/Code-Spark/`. El comando `npm run build:pages` utiliza esa base para que JavaScript, CSS, fotografías y favicon se carguen desde la ruta correcta.

- `npm run build`: build con rutas relativas, útil para alojar la landing dentro de otro sistema.
- `npm run build:pages`: build para `https://mesonesjhon.github.io/Code-Spark/`.

Las fotos originales permanecen en `public/assets/img/`. Edita `src/` y `public/`; GitHub Actions genera `dist/` y publica ese resultado. `dist/` y `node_modules/` se excluyen del repositorio.

Si cambias el nombre del repositorio o configuras un dominio propio, ajusta la base del script `build:pages` y la URL de los enlaces del footer.

## Integrar el crédito en Red de Integridad

Consulta [la guía de integración](integraciones/red-integridad/README.md). Incluye el footer Blade completo y el CSS del crédito **Desarrollado por Code Spark**. El enlace apunta a la página publicada del equipo.

## Comprobar problemas de publicación

- **Publicación pendiente de activación:** selecciona GitHub Actions en Settings → Pages y ejecuta el workflow de nuevo.
- **Pruebas o compilación fallidas:** abre el paso marcado en rojo en Actions y corrige el error antes de volver a subir los cambios.
- **Archivos con 404:** comprueba que el build se haya generado con `build:pages`, que el nombre del repositorio siga siendo `Code-Spark` y que se haya ejecutado el paso Desplegar.
- **La página aún muestra la versión anterior:** verifica que el último commit de `main` tenga un despliegue terminado antes de recargar.

## Documentación oficial

- [Vite: despliegue en GitHub Pages](https://vite.dev/guide/static-deploy#github-pages).
- [GitHub: configurar la fuente de publicación](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).
- [GitHub: usar workflows propios para Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).
