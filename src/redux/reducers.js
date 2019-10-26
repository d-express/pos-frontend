import { combineReducers } from 'redux';
import menu from './menu/reducer';
import settings from './settings/reducer';

const reducers = combineReducers({
  menu,
  settings,
});

export default reducers;
