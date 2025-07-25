import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { useState } from 'react';
import './styles.scss';

export default function CalendarClient() {
  const [events, setEvents] = useState([]);

  const handleDateSelect = (selectInfo) => {
    const confirmBooking = confirm(`Confirmar agendamento para ${selectInfo.start.toLocaleString('pt-BR')}?`);
    if (confirmBooking) {
      setEvents([
        ...events,
        {
          title: 'Agendado',
          start: selectInfo.startStr,
          end: selectInfo.endStr,
          color: '#4caf50',
          textColor: '#fff'
        },
      ]);
    }
  };

  return (
    <div className="calendar-dark">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="timeGridWeek"
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
        }}
        selectable={true}
        select={handleDateSelect}
        events={events}
        locale="pt-br"
        height="auto"
        allDaySlot={false}
        slotMinTime="08:00:00"
        slotMaxTime="18:00:00"
        weekends={true}
        hiddenDays={[0]} // Esconde domingo
        validRange={{
          start: new Date().toISOString().split('T')[0]
        }}
        selectConstraint={{
          daysOfWeek: [1, 2, 3, 4, 5, 6], // Seg a Sáb
          startTime: '08:00',
          endTime: '18:00'
        }}
        slotDuration="01:00:00" // Intervalo de 1 hora
        businessHours={[
          {
            daysOfWeek: [1, 2, 3, 4, 5], // Segunda a sexta
            startTime: '16:00', 
            endTime: '18:00'
          },
          {
            daysOfWeek: [6], // Sábado
            startTime: '08:00',
            endTime: '12:00'
          }
        ]}
        selectAllow={selectInfo => {
          const date = selectInfo.start;
          const day = date.getDay();
          const hours = date.getHours();
          
          // Segunda a sexta (1-5) apenas 16-18h
          if (day >= 1 && day <= 5) {
            return hours >= 16 && hours < 18;
          }
          
          // Sábado (6) apenas 8-12h
          if (day === 6) {
            return hours >= 8 && hours < 12;
          }
          
          return false;
        }}
        slotLabelFormat={{
          hour: '2-digit',
          minute: '2-digit',
          hour12: false
        }}
      />
    </div>
  );
}