import { combineReducers } from 'redux';
import auth from './auth/reducer';
import menu from '../modules/dashboard/redux/menu/reducer';
import pos from '../modules/pos/redux/reducer/index';

const reducers = combineReducers({
  auth,
  menu,
  pos,
});

export default reducers;
