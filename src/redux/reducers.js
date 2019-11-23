import { combineReducers } from 'redux';
import menu from '../modules/dashboard/redux/menu/reducer';
import auth from './auth/reducer'

const reducers = combineReducers({
  auth,
  menu
});

export default reducers;
