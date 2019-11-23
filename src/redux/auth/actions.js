export const loginUser = (user, history) => ({
  type: 'LOGIN_USER',
  payload: { user, history }
});
export const loginUserSuccess = (user) => ({
  type: 'LOGIN_USER_SUCCESS',
  payload: user
});

export const loginUserFailure = (message) => ({
  type: 'LOGIN_USER_FAILURE',
  payload: message
});
