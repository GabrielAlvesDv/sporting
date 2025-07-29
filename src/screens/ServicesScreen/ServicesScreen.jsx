import React from 'react';
import './styles.scss';

const ServicesScreen = () => (
  <div className="services-screen">
    <h1>Serviços</h1>
    <div class="linha amarelo"></div>
    <div class="linha vermelho"></div>
    <div style={{ display: "flex", flexDirection: "row", gap: "15px", marginTop: "20px"}}>
      {servicos.map((servico, index) => (
        <div key={index} className="service-card">
          <div className={`card-header`}>{servico.titulo}</div>
          <ul>
            {servico.itens.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          <div className="service-price">{servico.preco}</div>
        </div>
      ))}
    </div>
    <div className="service-note">
      <p>obs: Carros maiores consultar valores.</p>
    </div>
  </div>
);

export default ServicesScreen;

const servicos = [
  {
    titulo: "Lavação Simples",
    preco: "R$ 60,00",
    itens: [
      "Lavagem externa.",
      "Aspiração.",
      "Limpeza interna Simples.",
      "Pretinhos nos Pneus."
    ]
  },
  {
    titulo: "Lavação Completa",
    preco: "R$ 80,00",
    itens: [
      "Lavagem externa.",
      "Aspiração.",
      "Limpeza interna Simples.",
      "Hidratação nos plásticos internos e externos.",
      "Pretinhos nos Pneus."
    ]
  }
];
