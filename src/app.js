import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/login';
import Register from './pages/register';
import NotFound from './pages/not-found';
import posRoutes from './modules/pos/routes';
import dashboardRoutes from './modules/dashboard/routes';

const App = () => {
  const routes = [].concat(posRoutes, dashboardRoutes);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={null} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        {routes.map((route, index) => (
          <Route key={index} {...route} />
        ))}
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
