import { combineReducers } from "redux";
import loginReducers from "./Login/loginReducers";
import signupReducer from './Login/signUpReducer'
import getProductReducer from "./Product/getProductReducer";


const allReducers=combineReducers({
    loginReducers,
    signupReducer,
    getProductReducer
});
export default allReducers;