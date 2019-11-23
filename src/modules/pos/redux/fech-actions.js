import axios from 'axios';
import {
  getGroupProducts,
} from './actions';

function fetchCategory() {
  return (dispatch) => {
    const token = sessionStorage.getItem('token');
    axios({
      url: 'https://api.dexpress.app/category',
      method: 'get',
      data: {
        token,
      },
    })
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        //logica cookie
        dispatch(getGroupProducts(res.data));
        return res;
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export default fetchCategory;
