
export const loginUserSuccess = (user) => ({
  type: 'LOGIN_USER_SUCCESS',
  payload: user,
});

export const loginUserFailure = (message) => ({
  type: 'LOGIN_USER_FAILURE',
  payload: message,
});

export const registerUserSuccess = (user) => ({
  type: 'REGISTER_USER_SUCCESS',
  payload: user,
});

export const registerUserFailure = (message) => ({
  type: 'REGISTER_USER_FAILURE',
  payload: message,
});
