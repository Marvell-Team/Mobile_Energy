import {watchLogin, watchSignUp} from './loginSaga';
import {all} from 'redux-saga/effects';
import { watchgetProducts } from './productSaga';


export default function* rootSaga() {
  yield all([
    watchLogin(),
    watchSignUp(),
    watchgetProducts()
  ]);
}
