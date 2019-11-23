import { combineReducers } from 'redux';
import menu from '../modules/dashboard/redux/menu/reducer';
import auth from './auth/reducer';
import pos from '../modules/pos/redux/reducer';

const reducers = combineReducers({
  auth,
  menu,
  pos,
});

export default reducers;
