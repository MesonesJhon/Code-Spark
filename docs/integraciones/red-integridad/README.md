# Footer de Red de Integridad con la firma de Code Spark

El diseño organiza la navegación en dos columnas y presenta el copyright y la firma de desarrollo en una franja inferior. En móvil, la firma queda centrada. Conserva la paleta naranja, marrón y gris del sitio y utiliza el icono verde de Code Spark.

## Instalar la versión completa

1. Abre la vista Blade que contiene `<footer class="footer">` en tu proyecto Laravel de Red de Integridad.
2. Reemplaza el footer anterior por todo el contenido de [footer.blade.php](footer.blade.php), incluido el bloque `<style>` del comienzo.
3. Guarda y publica esa vista en tu aplicación.
4. Comprueba que aparezcan el crédito con su icono y nombre, el enlace del correo y las ocho secciones de navegación.

El archivo ya incluye los estilos del diseño, por lo que esta integración no requiere añadir otro archivo CSS ni recompilar Vite. Elimina el footer anterior al colocar el nuevo para evitar créditos duplicados. Las reglas solo se aplican a `.footer.footer-red-integridad`.

Si tienes configurado un sistema de caché de vistas que conserva una versión anterior, utiliza el procedimiento de actualización habitual de tu aplicación Laravel.

## Archivos

| Archivo | Uso |
| --- | --- |
| [footer.blade.php](footer.blade.php) | Versión completa de Blade, con CSS integrado y las rutas existentes. |
| [footer-code-spark.css](footer-code-spark.css) | El mismo CSS, si prefieres mantener los estilos en un archivo de assets. |
| [footer-ejemplo.html](../../footer-ejemplo.html) | Solo la firma de desarrollo para el footer rediseñado. |

Si separas el CSS, añade `footer-code-spark.css` a los assets de Laravel, elimina el bloque `<style>` de la vista y compila/publica tus assets. Mantén la clase `footer-red-integridad` del elemento `<footer>` para que se apliquen las reglas.

## Firma de desarrollo

La firma agrupa el icono, la etiqueta «Desarrollado por», el nombre Code Spark y una flecha en un único enlace. La tarjeta tiene estados de hover y foco, respeta movimiento reducido y conserva su color aunque el enlace se haya visitado.

Dirección del equipo: <https://mesonesjhon.github.io/Code-Spark/>. El enlace se abre en una nueva pestaña e incluye `rel="noopener noreferrer"` y una etiqueta accesible. El correo de contacto enlaza mediante `mailto:`. El copyright utiliza el año actual de Laravel.

Los archivos están preparados para aplicarse en el proyecto Laravel de Red de Integridad. Este repositorio aloja la landing Vue de Code Spark y su documentación de integración.
