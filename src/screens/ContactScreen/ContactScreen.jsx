import React from 'react';

const ContactScreen = () => (
  <div>
    <h2>Contato</h2>
    <form>
      <input type="text" placeholder="Seu nome" />
      <input type="email" placeholder="Seu e-mail" />
      <textarea placeholder="Mensagem"></textarea>
      <button type="submit">Enviar</button>
    </form>
  </div>
);

export default ContactScreen;
