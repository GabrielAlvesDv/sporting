import React from 'react';
import './Footer.css';

const Footer = ({ setScreen }) => (
  <footer className="footer">
    <button onClick={() => setScreen('home')}>Início</button>
    <button onClick={() => setScreen('schedule')}>Agendar</button>
    <button onClick={() => setScreen('contact')}>Contato</button>
  </footer>
);

export default Footer;
