import { combineReducers } from "redux";
import loginReducers from "./Login/loginReducers";
import signupReducer from './Login/signUpReducer'


const allReducers=combineReducers({
    loginReducers,
    signupReducer,
});
export default allReducers;