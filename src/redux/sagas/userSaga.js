import { GETONE_USER, GETONE_USER_ERROR, GETONE_USER_SUCCESS } from '@redux/actions/UserAction';
import { getUserByID } from '../api/user';
import {call,takeEvery,put,takeLatest} from 'redux-saga/effects'

export function* watchGetUserById(){
    yield takeEvery(GETONE_USER,getOneUserSaga)
}
function* getOneUserSaga(action){
 //   console.log('runid'+id)
    const {data}=action;
    console.log('runid'+data)
    const response = yield getUserByID(data);   
    try {
         // kiem tra xem co goi dc api ko 
    if(response !==undefined && response!==null){
        if(response.status===1){
            //thanh cong sẽ put về
            yield put({type:GETONE_USER_SUCCESS,response})
        }else{
            //truong hợp này gọi tới sever bi sever báo lỗi về
            yield put({type:GETONE_USER_ERROR,error:response.error})
        }
     }else{
         //Đôi khi api lỗi , sever ko trả dữ liệu vè
         const message="Có lỗi xảy ra, không thể kết nối tới sever"
         yield put({type:GETONE_USER_ERROR,error:message})
         
     }
    } catch (error) {
        const message="Có lỗi xảy ra, không thể kết nối tới sever"
        yield put({type:GETONE_USER_ERROR,error:message})
    }
}