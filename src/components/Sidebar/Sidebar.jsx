import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => (
  <aside className="sidebar">
    <h2>Menu</h2>
    <ul>
      <li>
        <NavLink
          to="/"
          end
          className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}
        >Início</NavLink>
      </li>
      <li>
        <NavLink
          to="/login"
          className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}
        >Login</NavLink>
      </li>
      <li>
        <NavLink
          to="/register"
          className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}
        >Cadastro</NavLink>
      </li>
      <li>
        <NavLink
          to="/services"
          className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}
        >Serviços</NavLink>
      </li>
      <li>
        <NavLink
          to="/schedule"
          className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}
        >Agendamento</NavLink>
      </li>
      <li>
        <NavLink
          to="/profile"
          className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}
        >Perfil</NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard"
          className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}
        >Dashboard/adm</NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}
        >Contato</NavLink>
      </li>
    </ul>
  </aside>
);

export default Sidebar;
