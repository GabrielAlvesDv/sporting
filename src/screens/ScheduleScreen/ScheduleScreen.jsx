import React from 'react';

const ScheduleScreen = () => (
  <div>
    <h2>Agendamento</h2>
    <form>
      <input type="date" />
      <input type="time" />
      <input type="text" placeholder="Serviço desejado" />
      <button type="submit">Agendar</button>
    </form>
  </div>
);

export default ScheduleScreen;
