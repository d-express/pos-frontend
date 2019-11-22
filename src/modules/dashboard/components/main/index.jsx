import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainLayout from './main-layout';

import Welcome from '../welcome';
import Categories from '../inventory/categories';

const Main = () => (
  <MainLayout>
    <Switch>
      <Route exact path='/dashboard' component={Welcome} />
      <Route exact path='/dashboard/sales'>
        <div>Ventas</div>
      </Route>
      <Route exact path='/dashboard/shopping'>
        <div>Compras</div>
      </Route>
      <Route exact path='/dashboard/products'>
        <div>Productos</div>
      </Route>
      <Route exact path='/dashboard/categories' component={Categories} />
      <Route exact path='/dashboard/stock'>
        <div>Existencias</div>
      </Route>
      <Route exact path='/dashboard/reports'>
        <div>Reportes</div>
      </Route>
      <Route exact path='/dashboard/users'>
        <div>Cuentas</div>
      </Route>
      <Route exact path='/dashboard/permissions'>
        <div>Permisos</div>
      </Route>
      <Route exact path='/dashboard/pin'>
        <div>PIN</div>
      </Route>
      <Route exact path='/dashboard/company'>
        <div>Empresa / Comercio</div>
      </Route>
      <Route exact path='/dashboard/printers'>
        <div>Impresoras</div>
      </Route>
    </Switch>
  </MainLayout>
);
export default Main;
