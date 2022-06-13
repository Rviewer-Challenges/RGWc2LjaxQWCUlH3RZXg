import backgroundImage from '../assets/img/login_background_1302x955.png';
import '../assets/css/Login.css';

function Login() {
  return (
    <>
    <body>
    <main class="container">
    <article class="half-wall">
      {/* logo */}
      <img class='background' src={backgroundImage} alt='Twitter logo background'/>
    </article>
    <article class="half-wall join">
      {/* login */}
    </article>
    </main>
    </body>
    <footer>
      <nav>
        <ul>
          <li><a href='#'>Información</a></li>
          <li><a href='#'>Centro de ayuda</a></li>
          <li><a href='#'>Condiciones de Servicio</a></li>
          <li><a href='#'>Política de Privacidad</a></li>
          <li><a href='#'>Política de cookies</a></li>
          <li><a href='#'>Accesibilidad</a></li>
          <li><a href='#'>Información de Anuncios</a></li>
          <li><a href='#'>Blog</a></li>
          <li><a href='#'>Estado</a></li>
          <li><a href='#'>Empleos</a></li>
          <li><a href='#'>Recursos para marcas</a></li>
          <li><a href='#'>Publicidad</a></li>
          <li><a href='#'>Marketing</a></li>
          <li><a href='#'>Twitter para empresas</a></li>
          <li><a href='#'>Desarrolladores</a></li>
          <li><a href='#'>Guía</a></li>
          <li><a href='#'>Configuración</a></li>
        </ul>
        <span class="copyright">© 2022 Twitter, Inc.</span>
      </nav>
    </footer>
    </>
  );
}

export default Login;
