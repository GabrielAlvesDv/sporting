import React from 'react';
import './styles.scss';
import CalendarAdmin from '../../components/Calendar/CalendarAdmin';

const DashboardScreen = () => (
  <div className="dashboard-screen p-4 max-w-5xl mx-auto space-y-4">
    <h2 className="text-xl font-semibold">Dashboard/Admin</h2>
    <p>Área administrativa para gerenciar agendamentos.</p>

    <div className="bg-white shadow rounded p-4">
      <CalendarAdmin />
    </div>
  </div>
);

export default DashboardScreen;
