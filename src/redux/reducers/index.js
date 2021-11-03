import { combineReducers } from "redux";
import loginReducers from "./Login/loginReducers";
import signupReducer from './Login/signUpReducer'
import getProductReducer from "./Product/getProductReducer";
import getOneUserReducer from "./User/getOneUserReducer";
import updateUserReducer from './User/updateUserReducer'
const allReducers=combineReducers({
    loginReducers,
    signupReducer,
    getProductReducer,
    getOneUserReducer,
    updateUserReducer,
});
export default allReducers;