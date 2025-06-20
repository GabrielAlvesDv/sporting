import React from 'react';
import './Header.css';

const Header = ({ setScreen }) => (
  <header className="header">
    <h1>Sporting</h1>
    <nav className="header-nav">
      <button onClick={() => setScreen('home')}>Início</button>
      <button onClick={() => setScreen('login')}>Login</button>
      <button onClick={() => setScreen('register')}>Cadastro</button>
      <button onClick={() => setScreen('schedule')}>Agendamento</button>
      <button onClick={() => setScreen('contact')}>Contato</button>
    </nav>
  </header>
);

export default Header;