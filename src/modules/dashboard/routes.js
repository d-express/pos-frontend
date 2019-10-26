import React from 'react';
import Dashboard from './layouts/dashboard';

const routes = [
  {
    path: ['/dashboard', '/dashboard/sales'],
    exact: true,
    children: <Dashboard />,
  }
];

export default routes;
