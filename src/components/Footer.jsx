import React from "react";
import "../App.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="footer">
      <div className="column">
        <h4>Sobre Nosotros</h4>
        <h6>TIENDA ONLINE ®</h6>
        <p></p>
        <p>Empresa líder en ventas online.</p>
        <p>Dirección: Av. Intendencia 123, Córdoba - Argentina</p>
        <p>Teléfono: +54 351 22-34567</p>
      </div>

      <div className="column">
        <h4>Enlaces Útiles</h4>
        <ul>
          <li><a href="https://ayuda.tiendanube.com/es_ES/funcionamiento-de-la-tienda">FAQ o Preguntas Frecuentes</a></li>
          <li><a href="https://www.argentina.gob.ar/justicia/derechofacil/leysimple/defensa-del-consumidor">Política de Devoluciones</a></li>
          <li><a href="https://ayuda.tiendanube.com/122699-agregar-un-nuevo-producto">Cómo Hacer un Pedido</a></li>
          <li><a href="https://ayuda.tiendanube.com/122909-locales-y-puntos-de-retiro">Devolver un Pedido</a></li>
          <li><a href="https://ayuda.tiendanube.com/es_ES/envios-y-locales">Seguir tu Pedido</a></li>
        </ul>
      </div>


      <div className="column social-buttons">
        <h4>Redes Sociales</h4>
        <div className="social-buttons">
        <a href="#" className="social-button facebook-button">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="#" className="social-button instagram-button">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="#" className="social-button youtube-button">
          <FontAwesomeIcon icon={faYoutube} />
        </a>
        </div>
  
        <div className="subscribe-form">
          <input type="email" placeholder="Ingrese su correo" />
          <button>Suscribirse</button>
        </div>
      </div>

      <div className="legal-section">
        <small>
        <p>2011 - 2023 © TiendaOnline - Todos los derechos reservados.</p>
        <p><a href="https://www.argentina.gob.ar/normativa/aviso-legal">Aviso Legal</a> - <a href="https://www.tiendanube.com/terminos-de-uso">Términos y Condiciones</a> - <a href="https://www.argentina.gob.ar/aaip/datospersonales">Protección de Datos</a></p>
        </small>
      </div>

    </footer>
  );
}

export default Footer;