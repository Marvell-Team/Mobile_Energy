import {watchLogin, watchSignUp} from './loginSaga';
import {all} from 'redux-saga/effects';
import { watchgetProducts ,watchgetProductsByCategories,watchgetProductsById} from './productSaga';
import { watchGetUserById, watchUpdateUserById } from './userSaga';


export default function* rootSaga() {
  yield all([
    watchLogin(),
    watchSignUp(),
    watchgetProducts(),
    watchGetUserById(),
    watchUpdateUserById(),
    watchgetProductsByCategories(),
    watchgetProductsById(),
  ]);
}
