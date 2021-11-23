import { combineReducers } from "redux";
import loginReducers from "./Login/loginReducers";
import signupReducer from './Login/signUpReducer'
import getProductReducer from "./Product/getProductReducer";
import getOneUserReducer from "./User/getOneUserReducer";
import updateUserReducer from './User/updateUserReducer';
import getProductByCategoriesReducer from './Product/getProdcutByCategoriesReducer';
import getProductByIDReducer from './Product/getProductByIDReducer';
import getCartByUserReducer from './Cart/getCartByUser';
import updateCartByCartReducer from './Cart/updateCartByCartReducer';
import getStoreReducer from './Store/getStoreReducer';
import getStoreByIdReducer from './Store/getStoreByIdReducer';
import addBillReducers from './Bill/addBillReducers';
import getBillReducers from './Bill/getBillReducer';
import getBillByIdReducers from './Bill/getBillByIdReducer';
import getProductByCategoriesChildReducer from'./Product/getProductByCategoriesChildReducer';

const allReducers =combineReducers({
    loginReducers,
    signupReducer,
    getProductReducer,
    getOneUserReducer,
    updateUserReducer,
    getProductByCategoriesReducer,
    getProductByIDReducer,
    getCartByUserReducer,
    updateCartByCartReducer,
    getStoreReducer,
    getStoreByIdReducer,
    addBillReducers,
    getBillReducers,    
    getBillByIdReducers,
    getProductByCategoriesChildReducer,

});
export default allReducers;