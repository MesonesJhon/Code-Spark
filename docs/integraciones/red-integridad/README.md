# Crédito de Code Spark en Red de Integridad

El crédito se coloca debajo del copyright, dentro del contenedor existente `.footer-bottom`:

**Desarrollado por [Code Spark](https://mesonesjhon.github.io/Code-Spark/)**

## Archivos preparados

| Archivo | Uso |
| --- | --- |
| [footer.blade.php](footer.blade.php) | Footer completo a partir del código proporcionado, con el crédito añadido. |
| [footer-code-spark.css](footer-code-spark.css) | Estilos adicionales para el crédito, utilizando la paleta actual del footer. |
| [footer-ejemplo.html](../../footer-ejemplo.html) | Solo el párrafo de crédito para insertar en la vista que ya tienes. |

## Agregarlo a tu aplicación Laravel

1. Abre la vista Blade de Red de Integridad que contiene `<footer class="footer">`.
2. Dentro de `<div class="footer-bottom">`, debajo del párrafo del copyright, inserta el contenido de `docs/footer-ejemplo.html`. También puedes sustituir el footer completo por `footer.blade.php`.
3. Añade el contenido de `footer-code-spark.css` al final del CSS donde ya defines `.footer` y `.footer-bottom`.
4. Si ese CSS forma parte de los assets compilados con Vite, ejecuta el comando de compilación de tu proyecto Laravel y publica los assets nuevos junto con la vista.
5. Comprueba que aparezca **Desarrollado por Code Spark** debajo del copyright y que abra la landing del equipo en una nueva pestaña.

El icono se incluye como SVG dentro del propio enlace; no necesitas copiar una imagen al proyecto Laravel. El enlace lleva `rel="noopener noreferrer"` y una etiqueta que informa de la apertura de otra pestaña. Los estilos se limitan al crédito dentro de `.footer-bottom` y respetan la preferencia de movimiento reducido.

La dirección del enlace es `https://mesonesjhon.github.io/Code-Spark/`. Activa primero la publicación siguiendo [GITHUB_PAGES.md](../../GITHUB_PAGES.md).

Estos archivos están preparados para integrarlos en Red de Integridad. La aplicación Laravel se modifica en su propio proyecto; el repositorio Code-Spark contiene la landing Vue y estos archivos de integración.
