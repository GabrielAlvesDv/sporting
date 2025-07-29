import React from 'react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import './styles.scss';

const ContactScreen = () => (
  <div className="contact-container">
    <h2 style={{ color: "white" }}>Entre em contato conosco:</h2>

    <form className="contact-form">
      <input type="text" placeholder="Seu nome" />
      <input type="email" placeholder="Seu telefone" />
      <textarea placeholder="Mensagem"></textarea>
      <button type="submit">Enviar</button>
    </form>

    <div className="social-links">
      <a
        href="https://www.instagram.com/sportinglavacao/"
        target="_blank"
        rel="noopener noreferrer"
        className="social-link instagram"
      >
        <FaInstagram className="icon" />
        @sportinglavacao
      </a>

      <a
        href="https://wa.me/5548996844408"
        target="_blank"
        rel="noopener noreferrer"
        className="social-link whatsapp"
      >
        <FaWhatsapp className="icon" />
        WhatsApp
      </a>
    </div>

  </div>
);

export default ContactScreen;
