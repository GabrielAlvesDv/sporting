import React, { useState } from 'react';
import CalendarClient from '../../components/Calendar/CalendarClient';

const ScheduleScreen = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [service, setService] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedDate || !selectedTime || !service) {
      alert('Preencha todos os campos.');
      return;
    }

    const scheduledDateTime = new Date(`${selectedDate}T${selectedTime}`);
    alert(`Agendado para ${scheduledDateTime.toLocaleString()} - Serviço: ${service}`);

    // Aqui você pode enviar para o Supabase/Firebase se desejar
    setSelectedDate('');
    setSelectedTime('');
    setService('');
  };

  return (
    <div className="max-w-3xl mx-auto p-4 space-y-4">
      <h2 className="text-xl font-semibold">Agendamento</h2>

      <form onSubmit={handleSubmit} className="space-y-2">
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <input
          type="time"
          value={selectedTime}
          onChange={(e) => setSelectedTime(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <input
          type="text"
          placeholder="Serviço desejado"
          value={service}
          onChange={(e) => setService(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Agendar
        </button>
      </form>

      <div className="mt-6">
        <CalendarClient />
      </div>
    </div>
  );
};

export default ScheduleScreen;
