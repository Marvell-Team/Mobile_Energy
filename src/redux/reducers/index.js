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
import editLikeReducer from './Like/editLikeReducer';
import getStatusLikeReducer from './Like/getStatusLikeReducer';
import removeLikeReducer from './Like/removeLikeReducer'
import getFavoriteReducer from './Favorite/getFavoriteReducer';
import getFavoriteByIdReducer from './Favorite/getFavoriteByIdReducer';
import getCommentsReducer from './Comment/getCommentReducer';
import addCommentsReducer from './Comment/addCommentReducer';
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
    getStoreReducer,
    getStoreByIdReducer,
    addBillReducers,
    getBillReducers,
    getBillByIdReducers,
    editLikeReducer,
    getStatusLikeReducer,
    removeLikeReducer,
    getFavoriteReducer,
    getFavoriteByIdReducer,
    getCommentsReducer,
    addCommentsReducer,

});
export default allReducers;