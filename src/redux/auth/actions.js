
export const loginUserSuccess = (user) => ({
  type: 'LOGIN_USER_SUCCESS',
  payload: user
});

export const loginUserFailure = (message) => ({
  type: 'LOGIN_USER_FAILURE',
  payload: message
});
