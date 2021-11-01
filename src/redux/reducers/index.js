import { combineReducers } from "redux";
import loginReducers from "./Login/loginReducers";
import signupReducer from './Login/signUpReducer'
import getProductReducer from "./Product/getProductReducer";
import getOneUserReducer from "./User/getOneUserReducer";


const allReducers=combineReducers({
    loginReducers,
    signupReducer,
    getProductReducer,
    getOneUserReducer,
});
export default allReducers;