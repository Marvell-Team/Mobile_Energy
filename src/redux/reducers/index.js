import { combineReducers } from "redux";
import loginReducers from "./Login/loginReducers";
import signupReducer from './Login/signUpReducer'
import getProductReducer from "./Product/getProductReducer";
import getOneUserReducer from "./User/getOneUserReducer";
import updateUserReducer from './User/updateUserReducer';
import getProductByCategoriesReducer from './Product/getProdcutByCategoriesReducer';
import getProductByIDReducer from './Product/getProductByIDReducer';
import getCartByUserReducer from './Cart/getCartByUser';
import updateCartByCartReducer from './Cart/updateCartByCartReducer'
const allReducers=combineReducers({
    loginReducers,
    signupReducer,
    getProductReducer,
    getOneUserReducer,
    updateUserReducer,
    getProductByCategoriesReducer,
    getProductByIDReducer,
    getCartByUserReducer,
    updateCartByCartReducer,
});
export default allReducers;