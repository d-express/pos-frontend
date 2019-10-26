import { createStore, compose } from 'redux';
import reducers from './reducers';

const configureStore = (initialState) => {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(reducers, initialState, composeEnhancers());
  return store;
};

export default configureStore;
