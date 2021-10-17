import {watchLogin, watchSignUp} from './loginSaga';
import {all} from 'redux-saga/effects';


export default function* rootSaga() {
  yield all([
    watchLogin(),
    watchSignUp()
  ]);
}
