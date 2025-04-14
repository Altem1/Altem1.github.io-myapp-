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

    <div className="content-all">

        
        <div className="me">
            <img src={Me} />
            <h2>José Emilio Antonio Jiménez</h2>
        </div>

        <div className="content-contact">

        {contactData.map((contact) => (
        <div key={contact.id} className="contact-card">
            {/* Línea 1: Ícono + Tipo (alineados horizontalmente) */}
            <div className="contact-header">
            <FontAwesomeIcon 
                icon={iconMap[contact.tipo]} 
                className="contact-icon" 
            />
            <h3 className="contact-type">{contact.tipo}</h3>
            </div>

            {/* Línea 2: Dato (ej: correo, número) */}
            <p className="contact-data">{contact.dato}</p>

            {/* Línea 3: Botón de acción */}
            <a
            href={contact.enlace}
            target="_blank"
            rel="noopener noreferrer"
            className={`contact-button ${contact.tipo.toLowerCase()}`}
            >
            {getButtonText(contact.tipo)}
            </a>
        </div>
        ))}
        </div>

    </div>
    
  );
};

export default Contactame;