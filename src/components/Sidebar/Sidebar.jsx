import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import './Sidebar.css';
import {
  FaHome,
  FaSignInAlt,
  FaUserPlus,
  FaConciergeBell,
  FaCalendarAlt,
  FaUserCircle,
  FaChartLine,
  FaEnvelope,
  FaBars,
  FaCar
} from 'react-icons/fa';

const AppSidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const handleToggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Sidebar collapsed={collapsed} breakPoint="md">
      <Menu>
        <MenuItem icon={<FaBars />} onClick={handleToggle}>
          {collapsed ? '' : 'Menu'}
        </MenuItem>
        <MenuItem icon={<FaHome />} component={<NavLink to="/" end />}>
          Início
        </MenuItem>
        <MenuItem icon={<FaSignInAlt />} component={<NavLink to="/login" />}>
          Login
        </MenuItem>
        <MenuItem icon={<FaUserPlus />} component={<NavLink to="/register" />}>
          Cadastro
        </MenuItem>
        <MenuItem icon={<FaCar />} component={<NavLink to="/services" />}>
          Serviços
        </MenuItem>
        <MenuItem icon={<FaCalendarAlt />} component={<NavLink to="/schedule" />}>
          Agendamento
        </MenuItem>
        <MenuItem icon={<FaUserCircle />} component={<NavLink to="/profile" />}>
          Perfil
        </MenuItem>
        <MenuItem icon={<FaChartLine />} component={<NavLink to="/dashboard" />}>
          Dashboard/adm
        </MenuItem>
        <MenuItem icon={<FaEnvelope />} component={<NavLink to="/contact" />}>
          Contato
        </MenuItem>
      </Menu>
    </Sidebar>
  );
};

export default AppSidebar;
