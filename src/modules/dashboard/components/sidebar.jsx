import React from 'react';
import { Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

const Sidebar = () => (
  <div>
    <Nav vertical>
      <NavItem>
        <NavLink to='/dashboard'>Inicio</NavLink>
        <NavLink to='/dashboard/sales'>Ventas</NavLink>
        <NavLink to=''>Inventarios</NavLink>
        {/* Submenu Productos */}
        {/* Submenu Categorias */}
        {/* Submenu Existencias */}
        <NavLink to='/dashboard/reports'>Reportes</NavLink>
        <NavLink to=''>Usuarios</NavLink>
        {/* Submenu Cuentas */}
        {/* Submenu Permisos */}
        <NavLink to=''>Opciones</NavLink>
        {/* Submenu PIN */}
        {/* Submenu Cuenta */}
        {/* Submenu Impresoras */}
      </NavItem>
    </Nav>
    <div>Ventas de hoy</div>
  </div>
);

export default Sidebar;
