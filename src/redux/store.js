import { createStore, compose, applyMiddleware } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk'

const configureStore = (initialState) => {
  const composeEnhacers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(reducers, initialState, composeEnhacers(applyMiddleware(thunk)));
  //const store = createStore(reducers, initialState, composeEnhancers(), applyMiddleware(...middlewares));
  return store;
};

export default configureStore;
