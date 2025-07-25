import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { useState } from 'react';
import './styles.scss';

export default function CalendarAdmin() {
  const [events, setEvents] = useState([
    { 
      title: 'Indisponível', 
      start: '2025-08-02T10:00:00', // Exemplo para sábado
      end: '2025-08-02T11:30:00',
      color: '#ff5252',
      textColor: '#fff'
    },
  ]);

  const handleDateSelect = (selectInfo) => {
    const title = prompt('Título do evento:');
    if (title) {
      setEvents([
        ...events,
        {
          title,
          start: selectInfo.startStr,
          end: selectInfo.endStr,
          color: title.toLowerCase().includes('indispon') ? '#ff5252' : '#4caf50',
          textColor: '#fff'
        },
      ]);
    }
  };

  const handleEventClick = (clickInfo) => {
    if (confirm(`Excluir o evento '${clickInfo.event.title}'?`)) {
      clickInfo.event.remove();
      setEvents(events.filter(event => event.id !== clickInfo.event.id));
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
        eventClick={handleEventClick}
        locale="pt-br"
        height="auto"
        allDaySlot={false}
        slotMinTime="08:00:00"
        slotMaxTime="18:00:00"
        weekends={true}
        dayHeaderFormat={{ weekday: 'short', day: 'numeric' }}
        hiddenDays={[0]} // Esconde domingo
        validRange={{
          start: new Date().toISOString().split('T')[0]
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
        selectConstraint={{
          daysOfWeek: [1, 2, 3, 4, 5, 6],
          startTime: '08:00',
          endTime: '18:00'
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