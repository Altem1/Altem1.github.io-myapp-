import React from "react";
import { Link } from "react-router-dom";
import AltemF from '../img/Altem.png'
import '../css/App.css';

const Content = () => {
  return (
    <section className="hero wrap">
      <div>
        <span className="badge">Portafolio de Altem</span>
        <h1>Bienvenido(a) a mi <span className="grad">Portafolio</span></h1>
        <p className="lead">¡Hola! Este es el espacio donde reúno todos mis proyectos y mi trayectoria profesional.
          Aquí encontrarás mis desarrollos web, programas y experimentos en código, junto con mi currículum y experiencia.</p>

        <p className="lead">Mi objetivo es tener un sitio centralizado donde puedas explorar mis trabajos y conocer más sobre mis habilidades.
          Si tienes alguna pregunta o te interesa colaborar en algún proyecto, no dudes en contactarme.</p>

        <div className="cta">
          <Link to="/proyectos" className="btn primary">Ver proyectos</Link>
          <Link to="/contactame" className="btn ghost">Contáctame</Link>
        </div>
      </div>

      <div className="glass hero-photo">
        <img src={AltemF} alt="Altem" />
      </div>
    </section>
  );
}

export default Content;
