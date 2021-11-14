import { ADD_BILL, ADD_BILL_NULL, GET_BILL } from './BillAction';
import { GET_CART, UPDATE_CART } from './CartAction';
import { POST_SIGNIN, POST_SIGNUP,LOGOUT } from './LoginAction';
import { GET_PRODUCT, GET_PRODUCT_BY_CATEGORYS ,GET_PRODUCT_BY_ID} from './ProductAction';
import { GET_STORE, GET_STORE_BY_ID,  } from './StoreAction';
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
export const getCartByUser = (input)=>{
  console.log('dag chay dc chua')
  return {
    type:GET_CART,
    data:input
  };
}

export const UpdateCartByUser = (input)=>{
  console.log('dag chay dc chua')
  return {
    type:UPDATE_CART,
    data:input
  };
}


export const getProductbyIdAction = (input)=>{
  return {
    type:GET_PRODUCT_BY_ID,
    data:input
  };
}

export const getStoreAction = ()=>{
  console.log('store')
  return {
    type:GET_STORE,
  };
}

// get by id
export const getStoreByIdAction = (input)=>{
  console.log('store')
  return {
    type:GET_STORE_BY_ID,
    data:input,

  };
}
export const addbillNullAction=()=>{
  return {
    type: ADD_BILL_NULL,
  }
}
// add bill
export const addBillAction = (input)=>{
  console.log('bill')
  return {
    type:ADD_BILL,
    data:input,

  }; 
}

// get bill
export const getBillAction = (input)=>{
  console.log('bill')
  return {
    type:GET_BILL,
    data:input,

  };
  
}
