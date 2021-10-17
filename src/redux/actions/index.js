import { POST_SIGNIN, POST_SIGNUP } from './LoginAction';

export const loginAction = (user, password) => {
  return {
    type: POST_SIGNIN,
    data: {user, password},
  };
};
export const signUpAction = (user) => {
  return {
    type: POST_SIGNUP,
    data: user,
  };
};
