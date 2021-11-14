import { } from '@redux/actions/UserAction';
import {getCartByUserApi, updateCartByCartApi} from '../api/cart';
import {call,takeEvery,put,takeLatest} from 'redux-saga/effects'
import { ADD_BILL, ADD_BILL_ERROR, ADD_BILL_SUCCESS, GET_BILL, GET_BILL_ERROR, GET_BILL_SUCCESS,  } from '@redux/actions/BillAction';
import { addBillApi, getBillApi } from '@redux/api/bill';


export function* watchAddBill(){
    yield takeEvery(ADD_BILL,addBillSaga)
}
function* addBillSaga(action){
 //   console.log('runid'+id)
    const {data}=action;
    const response = yield addBillApi(data);   
    try {
         // kiem tra xem co goi dc api ko 
    if(response !==undefined && response!==null){
        if(response.status===1){
            //thanh cong sẽ put về
            yield put({type:ADD_BILL_SUCCESS,response})
        }else{
            //truong hợp này gọi tới sever bi sever báo lỗi về
            yield put({type:ADD_BILL_ERROR,error:response.error})
        }
     }else{
         //Đôi khi api lỗi , sever ko trả dữ liệu vè
         const message="Có lỗi xảy ra, không thể kết nối tới sever"
         yield put({type:ADD_BILL_ERROR,error:message})
         
     }
    } catch (error) {
        const message="Có lỗi xảy ra, không thể kết nối tới sever"
        yield put({type:ADD_BILL_ERROR,error:message})
    }
}


export function* watchgetBill(){
    yield takeEvery(GET_BILL,getBillSaga)
}
function* getBillSaga(action){
 //   console.log('runid'+id)
    const {data}=action;
    const response = yield getBillApi(data);   
    try {
         // kiem tra xem co goi dc api ko 
    if(response !==undefined && response!==null){
        if(response.status===1){
            //thanh cong sẽ put về
            yield put({type:GET_BILL_SUCCESS,response})
        }else{
            //truong hợp này gọi tới sever bi sever báo lỗi về
            yield put({type:GET_BILL_ERROR,error:response.error})
        }
     }else{
         //Đôi khi api lỗi , sever ko trả dữ liệu vè
         const message="Có lỗi xảy ra, không thể kết nối tới sever"
         yield put({type:GET_BILL_ERROR,error:message})
         
     }
    } catch (error) {
        const message="Có lỗi xảy ra, không thể kết nối tới sever"
        yield put({type:GET_BILL_ERROR,error:message})
    }
}
