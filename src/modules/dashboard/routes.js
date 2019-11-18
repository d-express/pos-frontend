import React from 'react';
import Dashboard from './pages/dashboard';

const routes = [
  {
    path: '/dashboard',
    exact: false,
    children: <Dashboard />,
  }
];

export default routes;
