import React from 'react';
import { Provider } from 'react-redux';
import AppRoute from './app-route';
import configureStore from './redux/store';

const App = () => {
  return (
    <Provider store={configureStore()}>
      <AppRoute />
    </Provider>
  );
};

export default App;
