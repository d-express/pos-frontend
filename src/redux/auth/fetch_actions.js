import {
  loginUserSuccess,
  loginUserFailure,
  loginUser
} from './actions';
import axios from 'axios';

function fetchUser(user, history) {
  return (dispatch) => {
    dispatch(loginUser(user, history));
    axios.post('https://api.dexpress.app/auth/login', user )
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        //logica cookie
        dispatch(loginUserSuccess(res.user));
        return res;
      })
      .catch((error) => {
        dispatch(loginUserFailure(error));
      });
  };
}

export default fetchUser;