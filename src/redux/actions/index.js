import { POST_SIGNIN, POST_SIGNUP,LOGOUT } from './LoginAction';
import { GET_PRODUCT, GET_PRODUCT_BY_CATEGORYS ,GET_PRODUCT_BY_ID} from './ProductAction';
import { GETONE_USER, UPDATE_USER } from './UserAction';

export const loginAction = (user, password) => {
  return {
    type: POST_SIGNIN,
    data: {user, password},
  };
};
export const logoutAction=()=>{
  return {
    type: LOGOUT,
  };
}
export const signUpAction = (user) => {
  return {
    type: POST_SIGNUP,
    data: user,
  };
};
export const getProduct = () =>{
  return {
    type:GET_PRODUCT,
  };
}
export const getUserByID = (id)=>{
  console.log('run'+id)
  return {
    type:GETONE_USER,
    data:id
  };
}
export const EditUserByID = (input)=>{
  return {
    type:UPDATE_USER,
    data:input
  };
}
export const getProductbyCategories = (input)=>{
  return {
    type:GET_PRODUCT_BY_CATEGORYS,
    data:input
  };
}

export const getProductbyIdAction = (input)=>{
  console.log('====================================');
  console.log('action'+input);
  console.log('====================================');
  return {
    type:GET_PRODUCT_BY_ID,
    data:input
  };
}
