import axios from 'axios';
import {
  loginUserSuccess,
  loginUserFailure,
  registerUserSuccess,
  registerUserFailure,
} from './actions';

export function fetchUser(user, history) {
  return (dispatch) => {
    axios.post('https://api.dexpress.app/auth/login', user)
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        //logica cookie
        sessionStorage.setItem('token', JSON.stringify(res.data.auth));
        dispatch(loginUserSuccess(res.data.user));
        history.push('/pos');
        return res;
      })
      .catch((error) => {
        console.log(error);
        dispatch(loginUserFailure(error));
      });
  };
}

export function fetchRegister(user, history) {
  return (dispatch) => {
    axios.post('https://api.dexpress.app/auth/register', user )
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        //logica cookie
        dispatch(registerUserSuccess(res.data.user));
        history.push('/');
        return res;
      })
      .catch((error) => {
        console.log(error);
        dispatch(registerUserFailure(error));
      });
  };
};
