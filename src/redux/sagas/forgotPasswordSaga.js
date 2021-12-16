import {
  GET_FORGOT_PASSWORD_BY_EMAIL,
  GET_FORGOT_PASSWORD_BY_EMAIL_ERROR,
  GET_FORGOT_PASSWORD_BY_EMAIL_SUCCESS,
  RESET_PASSWORD,
  RESET_PASSWORD_ERROR,
  RESET_PASSWORD_SUCCESS,
  VERIFY_USER_BY_CODE_NUMBER,
  VERIFY_USER_BY_CODE_NUMBER_ERROR,
  VERIFY_USER_BY_CODE_NUMBER_SUCCESS,
} from '@redux/actions/ForgotPasswordAction';
import {
  getForgotPasswordByEmailApi,
  resetPasswordApi,
  verifyUserByCodeNumberApi,
} from '@redux/api/forgotPassword';
import {call, takeEvery, put, takeLatest} from 'redux-saga/effects';

export function* watchGetForgotPasswordByEmailSaga() {
  yield takeLatest(
    GET_FORGOT_PASSWORD_BY_EMAIL,
    getForgotPasswordByEmailSaga,
  );
}
function* getForgotPasswordByEmailSaga(action) {
  const {data} = action;
  console.log(data);
  console.log(
    '33333333333333>>>>>>>>>>>>> getForgotPasswordByEmailSaga:' + data,
  );

  const response = yield getForgotPasswordByEmailApi(data);

  try {
    // kiem tra xem co goi dc api ko
    if (response !== undefined && response !== null) {
      if (response.status === 1) {
        //thanh cong sẽ put về
        yield put({
          type: GET_FORGOT_PASSWORD_BY_EMAIL_SUCCESS,
          response,
        });
      } else {
        //truong hợp này gọi tới sever bi sever báo lỗi về
        yield put({
          type: GET_FORGOT_PASSWORD_BY_EMAIL_ERROR,
          error: response.error,
        });
      }
    } else {
      //Đôi khi api lỗi , sever ko trả dữ liệu vè
      const message = 'Có lỗi xảy ra, không thể kết nối tới server';
      yield put({
        type: GET_FORGOT_PASSWORD_BY_EMAIL_ERROR,
        error: message,
      });
    }
  } catch (error) {
    const message = 'Có lỗi xảy ra, không thể kết nối tới server';
    yield put({
      type: GET_FORGOT_PASSWORD_BY_EMAIL_ERROR,
      error: message,
    });
  }
}

export function* watchVerifyUserByCodeNumber() {
  yield takeLatest(VERIFY_USER_BY_CODE_NUMBER, verifyUserByCodeNumberSaga);
}
function* verifyUserByCodeNumberSaga(action) {
  const {data} = action;
  console.log(data);
  console.log('33333333333333>>>>>>>>>>>>> verifyUserByCodeNumberSaga:' + data);
  const response = yield verifyUserByCodeNumberApi(data);
  try {
    // kiem tra xem co goi dc api ko
    if (response !== undefined && response !== null) {
      if (response.status === 1) {
        //thanh cong sẽ put về
        yield put({type: VERIFY_USER_BY_CODE_NUMBER_SUCCESS, response});
      } else {
        //truong hợp này gọi tới sever bi sever báo lỗi về
        yield put({
          type: VERIFY_USER_BY_CODE_NUMBER_ERROR,
          error: response.error,
        });
      }
    } else {
      //Đôi khi api lỗi , sever ko trả dữ liệu vè
      const message = 'Có lỗi xảy ra, không thể kết nối tới sever';
      yield put({type: VERIFY_USER_BY_CODE_NUMBER_ERROR, error: message});
    }
  } catch (error) {
    const message = 'Có lỗi xảy ra, không thể kết nối tới sever';
    yield put({type: VERIFY_USER_BY_CODE_NUMBER_ERROR, error: message});
  }
}

export function* watchResetPassword() {
  yield takeLatest(RESET_PASSWORD, resetPasswordSaga);
}
function* resetPasswordSaga(action) {
  const {data} = action;
  console.log(data);
  console.log('33333333333333>>>>>>>>>>>>> resetPasswordSaga:' + data);
  const response = yield resetPasswordApi(data);
  try {
    // kiem tra xem co goi dc api ko
    if (response !== undefined && response !== null) {
      if (response.status === 1) {
        //thanh cong sẽ put về
        yield put({type: RESET_PASSWORD_SUCCESS, response});
      } else {
        //truong hợp này gọi tới sever bi sever báo lỗi về
        yield put({
          type: RESET_PASSWORD_ERROR,
          error: response.error,
        });
      }
    } else {
      //Đôi khi api lỗi , sever ko trả dữ liệu vè
      const message = 'Có lỗi xảy ra, không thể kết nối tới sever';
      yield put({type: RESET_PASSWORD_ERROR, error: message});
    }
  } catch (error) {
    const message = 'Có lỗi xảy ra, không thể kết nối tới sever';
    yield put({type: RESET_PASSWORD_ERROR, error: message});
  }
}
