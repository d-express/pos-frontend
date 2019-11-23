import {
  loginUserSuccess,
  loginUserFailure
} from './actions';
import axios from 'axios';

function fetchUser(user, history) {
  return (dispatch) => {
    axios.post('https://api.dexpress.app/auth/login', user )
      .then((res) => {
        console.log(`Aqui voy`,history)
        if (res.error) {
          throw res.error;
        }
        //logica cookie
        sessionStorage.setItem('token', JSON.stringify(res.data.auth))
        dispatch(loginUserSuccess(res.data.user));
        console.log('Entro')
        history.push('/pos')
        return res;
      })
      .catch((error) => {
        console.log(error)
        dispatch(loginUserFailure(error));
      });
  };
}

export default fetchUser;