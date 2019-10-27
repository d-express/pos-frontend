import React from 'react';
import SelectStore from './pages/select-store';
import SelectCashRegister from './pages/select-cash-register';
import LockScreen from './pages/lock-screen';
import CashOpening from './pages/cash-opening';
import Pos from './pages/pos';
import CashClose from './pages/cash-close';

const routes = [
  {
    path: '/select-store',
    exact: true,
    children: <SelectStore />,
  },
  {
    path: '/select-cash-register',
    exact: true,
    children: <SelectCashRegister />,
  },
  {
    path: '/lock-screen',
    exact: true,
    children: <LockScreen />,
  },
  {
    path: '/cash-opening',
    exact: true,
    children: <CashOpening />,
  },
  {
    path: '/pos',
    exact: true,
    children: <Pos />,
  },
  {
    path: '/cash-close',
    exact: true,
    children: <CashClose />,
  }
];

export default routes;
