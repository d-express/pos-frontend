const INIT_STATE = {
  user: localStorage.getItem('user_id'),
  error: '',
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case 'LOGIN_USER_SUCCESS':
      return { ...state, user: action.payload, error: '', };
    case 'LOGIN_USER_FAILURE':
      return { ...state, user: null, error: action.payload.message, };
    default: return { ...state, };
  }
};

