import axios from 'axios';
import {
  loginUserSuccess,
  loginUserFailure
} from './actions';

function fetchUser(user, history) {
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

export default fetchUser;
