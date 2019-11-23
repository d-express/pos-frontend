const INIT_STATE = {
  user: localStorage.getItem('user_id'),
  loading: false,
  error: ''
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
      case 'LOGIN_USER':
          return { ...state, loading: true, error: '' };
      case 'LOGIN_USER_SUCCESS':
          return { ...state, loading: false, user: action.payload.user, error: '' };
      case 'LOGIN_USER_FAILURE':
          return { ...state, loading: false, user: null, error: action.payload.message };
      default: return { ...state };
  }
}

