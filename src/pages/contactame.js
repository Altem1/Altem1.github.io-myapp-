import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import contactData from '../data/contact.json';
import '../css/contactame.css'
import Me from '../img/Altem.png'

// Mapeo de íconos dinámico
const iconMap = {
  "Correo": faEnvelope,
  "Teléfono": faPhone,
  "WhatsApp": faWhatsapp,
  "GitHub": faGithub,
  "LinkedIn": faLinkedin,
  "Twitter": faTwitter
};

const Contactame = () => {
  // Texto para el botón según el tipo
  const getButtonText = (tipo) => {
    switch (tipo) {
      case "Correo": return "Enviar email";
      case "Teléfono": return "Llamar";
      case "WhatsApp": return "Enviar mensaje";
      default: return `Ir a ${tipo}`;
    }
  };

  return (
    <section className="wrap">
      <div className="me">
        <img src={Me} alt="img alucion a mi" />
        <h2 className="title">José Emilio <span className="grad">Antonio Jiménez</span></h2>
      </div>

      <div className="content-contact">
        {contactData.map((contact) => (
          <div key={contact.id} className={`glass card contact-card ${contact.tipo.toLowerCase()}`}>
            <div className="contact-header">
              <div className="ic"><FontAwesomeIcon icon={iconMap[contact.tipo]} /></div>
              <h3>{contact.tipo}</h3>
            </div>

            <p className="contact-data">{contact.dato}</p>

            {contact.enlace && (
              <a
                href={contact.enlace}
                target="_blank"
                rel="noopener noreferrer"
                className="btn ghost contact-button"
              >
                {getButtonText(contact.tipo)}
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contactame;
