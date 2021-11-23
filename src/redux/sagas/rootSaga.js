import {watchLogin, watchSignUp} from './loginSaga';
import {all} from 'redux-saga/effects';
import { watchgetProductByCategoriesChildSaga, watchgetProducts ,watchgetProductsByCategories,watchgetProductsById} from './productSaga';
import { watchGetUserById, watchUpdateUserById } from './userSaga';
import {watchGetCartbyUser, watchUpdateCartbyCart} from './cartSaga'
import {watchGetStore, watchGetStoreById} from './storeSaga'
import { watchAddBill, watchgetBill, watchgetBillById } from './billSaga';

export default function* rootSaga() {
  yield all([
    watchLogin(),
    watchSignUp(),
    watchgetProducts(),
    watchGetUserById(),
    watchUpdateUserById(),
    watchgetProductsByCategories(),
    watchgetProductsById(),
    watchGetCartbyUser(),
    watchUpdateCartbyCart(),
    watchGetStore(),
    watchGetStoreById(),
    watchAddBill(),
    watchgetBill(),
    watchgetBillById(),
    watchgetProductByCategoriesChildSaga(),

  ]);
}
