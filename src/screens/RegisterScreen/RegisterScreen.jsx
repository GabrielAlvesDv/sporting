import React from 'react';

const RegisterScreen = () => (
  <div>
    <h2>Cadastro</h2>
    <form>
      <input type="text" placeholder="Nome" />
      <input type="email" placeholder="E-mail" />
      <input type="password" placeholder="Senha" />
      <button type="submit">Cadastrar</button>
    </form>
  </div>
);

export default RegisterScreen;
