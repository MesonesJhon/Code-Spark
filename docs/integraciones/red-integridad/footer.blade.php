<!-- FOOTER -->
<footer class="footer">
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
            <p>rintegridad2023@gmail.com</p>
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
            <p>&copy; 2025 Red de Integridad. Todos los derechos reservados.</p>
            <p class="footer-credits">
                <span>Desarrollado por</span>
                <a class="code-spark-credit"
                   href="https://mesonesjhon.github.io/Code-Spark/"
                   target="_blank" rel="noopener noreferrer"
                   aria-label="Conocer al equipo Code Spark (se abre en una pestaña nueva)">
                    <svg class="code-spark-credit-icon" viewBox="0 0 48 48" width="22" height="22" aria-hidden="true" focusable="false">
                        <rect width="48" height="48" rx="13" fill="#d0ed75" />
                        <path d="M10 17l-5 7 5 7m28-14 5 7-5 7" fill="none" stroke="#263524" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M24 9l4 11 7 4-7 4-4 11-4-11-7-4 7-4z" fill="#263524" />
                    </svg>
                    <span>Code Spark</span>
                    <span aria-hidden="true">↗</span>
                </a>
            </p>
        </div>
    </div>
</footer>
