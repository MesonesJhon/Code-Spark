{{-- Footer completo con estilos incluidos. Reemplaza el footer anterior por este bloque. --}}
<style>
/* Diseño completo del footer de Red de Integridad y firma de Code Spark. */
.footer.footer-red-integridad,
.footer.footer-red-integridad * { box-sizing: border-box; }

.footer.footer-red-integridad {
    position: relative;
    overflow: hidden;
    padding: 48px 0 0;
    background: var(--color-white, #fff);
    color: var(--color-plomo, #4a4a4a);
    font-family: var(--font-primary, 'Inter', 'Segoe UI', sans-serif);
}
.footer.footer-red-integridad::before {
    content: '';
    position: absolute;
    inset: 0 0 auto;
    height: 3px;
    background: linear-gradient(90deg, var(--color-naranja, #c04a1c), var(--color-marron, #bc9865));
}
.footer.footer-red-integridad .footer-container {
    display: grid;
    grid-template-columns: 1.35fr 1.2fr 0.85fr 0.85fr;
    align-items: start;
    gap: 32px;
    width: 100%;
    max-width: 1380px;
    margin: 0 auto;
    padding: 0 28px;
}
.footer.footer-red-integridad .footer-brand-about {
    display: flex;
    flex-direction: column;
    grid-column: auto;
    gap: 18px;
}
.footer.footer-red-integridad .footer-brand {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 12px;
    margin: 0;
    padding: 0;
    color: inherit;
    text-align: left;
    text-decoration: none;
    transform: none;
}
.footer.footer-red-integridad .footer-brand img {
    width: 56px;
    height: 56px;
    flex-shrink: 0;
    object-fit: contain;
}
.footer.footer-red-integridad .footer-title {
    display: flex;
    flex-direction: column;
    gap: 4px;
    line-height: 1.2;
}
.footer.footer-red-integridad .footer-title-line {
    color: var(--color-plomo, #4a4a4a);
    font-size: 19px;
    font-weight: 600;
    letter-spacing: 0;
}
.footer.footer-red-integridad .footer-title-highlight {
    color: var(--color-naranja, #c04a1c);
    font-size: 25px;
    font-weight: 800;
    letter-spacing: 0.02em;
}
.footer.footer-red-integridad .footer-about p {
    max-width: 320px;
    margin: 0;
    padding: 0;
    color: var(--color-plomo, #4a4a4a);
    font-size: 14px;
    line-height: 1.75;
    text-align: left;
}
.footer.footer-red-integridad .footer-section-title {
    position: relative;
    grid-column: 1 / -1;
    margin: 0 0 12px;
    padding: 0 0 12px;
    color: #242424;
    font-size: 15px;
    font-weight: 650;
    line-height: 1.4;
    text-align: left;
}
.footer.footer-red-integridad .footer-section-title::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 26px;
    height: 2px;
    background: var(--color-naranja, #c04a1c);
    transform: none;
}
.footer.footer-red-integridad .footer-nav {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    align-content: start;
    gap: 0 14px;
}
.footer.footer-red-integridad .footer-link {
    display: flex;
    align-items: center;
    min-height: 44px;
    margin: 0;
    padding: 6px 0;
    color: var(--color-plomo, #4a4a4a);
    font-size: 13px;
    line-height: 1.5;
    text-decoration: none;
}
.footer.footer-red-integridad .footer-link::before { display: none; }
.footer.footer-red-integridad .footer-link:hover,
.footer.footer-red-integridad .footer-link.active {
    color: var(--color-naranja, #c04a1c);
    padding-left: 0;
}
.footer.footer-red-integridad .footer-link:hover { text-decoration: underline; text-underline-offset: 4px; }
.footer.footer-red-integridad .footer-contact,
.footer.footer-red-integridad .footer-social {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 0;
}
.footer.footer-red-integridad .footer-contact p {
    display: block;
    margin: 0 0 5px;
    font-size: 13px;
    line-height: 1.6;
}
.footer.footer-red-integridad .footer-contact strong { color: #242424; }
.footer.footer-red-integridad .footer-email {
    display: inline-flex;
    align-items: center;
    min-height: 44px;
    padding: 0;
    color: var(--color-plomo, #4a4a4a);
    font-size: 13px;
    line-height: 1.6;
    overflow-wrap: anywhere;
    text-decoration: none;
}
.footer.footer-red-integridad .footer-email:hover { color: var(--color-naranja, #c04a1c); text-decoration: underline; }
.footer.footer-red-integridad .footer-social a {
    display: inline-flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    min-height: 44px;
    padding: 6px 0;
    color: var(--color-plomo, #4a4a4a);
    font-size: 13px;
    line-height: 1.5;
    text-decoration: none;
}
.footer.footer-red-integridad .footer-social a:hover {
    color: var(--color-naranja, #c04a1c);
    background: transparent;
    box-shadow: none;
    transform: none;
}
.footer.footer-red-integridad .footer-social i { width: 17px; text-align: center; font-size: 14px; }
.footer.footer-red-integridad .footer-bottom {
    position: relative;
    display: flex;
    grid-column: 1 / -1;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 18px 24px;
    margin: 4px 0 0;
    padding: 22px 0;
    border-top: 1px solid var(--color-border, #e9ecef);
    text-align: left;
}
.footer.footer-red-integridad .footer-bottom::before {
    content: '';
    position: absolute;
    top: -1px;
    left: 0;
    width: 48px;
    height: 2px;
    background: var(--color-marron, #bc9865);
    transform: none;
}
.footer.footer-red-integridad .footer-copyright {
    flex: 1 1 260px;
    margin: 0;
    color: var(--color-plomo, #4a4a4a);
    font-size: 12px;
    line-height: 1.7;
}
.footer.footer-red-integridad .footer-credits { flex: 0 0 auto; margin: 0; padding: 0; }
.footer.footer-red-integridad .code-spark-credit,
.footer.footer-red-integridad .code-spark-credit:link,
.footer.footer-red-integridad .code-spark-credit:visited {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    min-height: 62px;
    padding: 10px 14px;
    border: 1px solid #dee6d4;
    border-radius: 14px;
    background: #f7f9f2;
    color: #263524;
    text-decoration: none;
    box-shadow: 0 2px 6px #26352405;
    transition: border-color 0.2s ease, background-color 0.2s ease, transform 0.2s ease;
}
.footer.footer-red-integridad .code-spark-credit-icon {
    display: block;
    width: 34px;
    height: 34px;
    flex-shrink: 0;
}
.footer.footer-red-integridad .code-spark-credit-copy { display: flex; flex-direction: column; gap: 3px; }
.footer.footer-red-integridad .code-spark-credit-label {
    color: #606b56;
    font-size: 11px;
    font-weight: 500;
    line-height: 1.3;
    letter-spacing: 0.075em;
    text-transform: uppercase;
}
.footer.footer-red-integridad .code-spark-credit-name {
    color: #263524;
    font-size: 17px;
    font-weight: 750;
    line-height: 1.2;
    letter-spacing: -0.025em;
}
.footer.footer-red-integridad .code-spark-credit-arrow {
    display: grid;
    place-items: center;
    width: 26px;
    height: 26px;
    margin-left: 7px;
    border: 1px solid #dce4d1;
    border-radius: 50%;
    background: #fff;
    color: #466344;
}
.footer.footer-red-integridad .code-spark-credit-arrow svg { display: block; width: 13px; height: 13px; }
.footer.footer-red-integridad .code-spark-credit:hover {
    border-color: #a5b984;
    background: #eef4e3;
    color: #263524;
    text-decoration: none;
    transform: translateY(-2px);
}
.footer.footer-red-integridad a:focus-visible { outline: 3px solid var(--color-naranja, #c04a1c); outline-offset: 4px; }
@media (max-width: 1100px) {
    .footer.footer-red-integridad .footer-container { grid-template-columns: 1fr 1fr; gap: 28px 36px; }
}
@media (max-width: 640px) {
    .footer.footer-red-integridad { padding-top: 34px; }
    .footer.footer-red-integridad .footer-container { grid-template-columns: 1fr; gap: 26px; padding: 0 20px; }
    .footer.footer-red-integridad .footer-about p { max-width: none; }
    .footer.footer-red-integridad .footer-social { display: grid; grid-template-columns: 1fr 1fr; column-gap: 16px; }
    .footer.footer-red-integridad .footer-bottom { flex-direction: column; justify-content: center; gap: 16px; padding: 20px 0 24px; }
    .footer.footer-red-integridad .footer-copyright { flex: 0 1 auto; text-align: center; }
    .footer.footer-red-integridad .footer-bottom::before { left: 50%; transform: translateX(-50%); }
}
@media (prefers-reduced-motion: reduce) {
    .footer.footer-red-integridad a { transition: none; }
    .footer.footer-red-integridad .code-spark-credit:hover { transform: none; }
}
</style>

<!-- FOOTER -->
<footer class="footer footer-red-integridad">
    <div class="footer-container">
        <!-- LOGO + NOMBRE + ACERCA DE NOSOTROS -->
        <div class="footer-brand-about">
            <a href="{{ route('home') }}" class="footer-brand">
                <img src="{{ asset('images/LOGO-PRINCIPAL-INTEGRIDAD.webp') }}" alt="Logo Red de Integridad" class="header-logo" width="36" height="40">
                <span class="footer-title">
                    <span class="footer-title-line">Red de Integridad</span>
                    <span class="footer-title-highlight">LAMBAYEQUE</span>
                </span>
            </a>
            <div class="footer-about">
                <p>Líderes en consultoría de integridad y anticorrupción para organizaciones públicas y privadas.</p>
            </div>
        </div>

        <!-- SECCIONES DEL FOOTER -->
        <nav class="footer-nav" aria-label="Secciones principales">
            <h3 class="footer-section-title">Secciones</h3>
            <a href="{{ route('home') }}" class="footer-link {{ request()->routeIs('home') ? 'active' : '' }}">Inicio</a>
            <a href="{{ route('about') }}" class="footer-link {{ request()->routeIs('about') ? 'active' : '' }}">¿Quiénes somos?</a>
            <a href="{{ route('services') }}" class="footer-link {{ request()->routeIs('services') ? 'active' : '' }}">¿Qué hacemos?</a>
            <a href="{{ route('publications') }}" class="footer-link {{ request()->routeIs('publications') ? 'active' : '' }}">Publicaciones</a>
            <a href="{{ route('actividades') }}" class="footer-link {{ request()->routeIs('actividades') ? 'active' : '' }}">Actividades</a>
            <a href="{{ route('observatory') }}" class="footer-link {{ request()->routeIs('observatory') ? 'active' : '' }}">Observatorio</a>
            <a href="{{ route('contact') }}" class="footer-link {{ request()->routeIs('contact') ? 'active' : '' }}">Contacto</a>
            <a href="{{ route('login') }}" class="footer-link {{ request()->routeIs('login') ? 'active' : '' }}">Intranet</a>
        </nav>

        <!-- DETALLE DE CONTACTO -->
        <div class="footer-contact">
            <h3 class="footer-section-title">Detalle de Contacto</h3>
            <p><strong>Gmail:</strong></p>
            <a class="footer-email" href="mailto:rintegridad2023@gmail.com">rintegridad2023@gmail.com</a>
        </div>

        <!-- REDES SOCIALES -->
        <div class="footer-social">
            <h3 class="footer-section-title">Redes Sociales</h3>
            <a href="https://www.facebook.com/RedDeIntegridadLambayeque" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i class="fab fa-facebook-f" aria-hidden="true"></i> Facebook
            </a>
            <a href="https://www.instagram.com/reddeintegridadlambayeque/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i class="fab fa-instagram" aria-hidden="true"></i> Instagram
            </a>
            <a href="https://x.com/Integridad19046" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <i class="fab fa-x-twitter" aria-hidden="true"></i> Twitter
            </a>
            <a href="https://www.youtube.com/@ReddeIntegridadLambayeque" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <i class="fab fa-youtube" aria-hidden="true"></i> YouTube
            </a>
        </div>

        <!-- COPYRIGHT Y CRÉDITO DE DESARROLLO -->
        <div class="footer-bottom">
            <p class="footer-copyright">&copy; {{ now()->year }} Red de Integridad. Todos los derechos reservados.</p>
            <div class="footer-credits">
              <a class="code-spark-credit"
                 href="https://mesonesjhon.github.io/Code-Spark/"
                 target="_blank" rel="noopener noreferrer"
                 aria-label="Desarrollado por Code Spark. Conocer al equipo (se abre en una pestaña nueva)">
                <svg class="code-spark-credit-icon" viewBox="0 0 48 48" width="34" height="34" aria-hidden="true" focusable="false">
                  <rect width="48" height="48" rx="13" fill="#d0ed75" />
                  <path d="M10 17l-5 7 5 7m28-14 5 7-5 7" fill="none" stroke="#263524" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M24 9l4 11 7 4-7 4-4 11-4-11-7-4 7-4z" fill="#263524" />
                </svg>
                <span class="code-spark-credit-copy">
                  <span class="code-spark-credit-label">Desarrollado por</span>
                  <span class="code-spark-credit-name">Code Spark</span>
                </span>
                <span class="code-spark-credit-arrow" aria-hidden="true">
                  <svg viewBox="0 0 16 16" fill="none" focusable="false"><path d="M4 12 12 4M4 4h8v8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg>
                </span>
              </a>
            </div>
        </div>
    </div>
</footer>
