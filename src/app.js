import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
import PointOfSale from './pages/point-of-sale';
import Dashboard from './pages/dashboard';
import NotFound from './pages/not-found';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/register' component={Register} />
      <Route exact path='/pos' component={PointOfSale} />
      <Route exact path='/dashboard' component={Dashboard} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default App;
