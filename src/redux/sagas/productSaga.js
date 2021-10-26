import {call,takeEvery,put,takeLatest} from 'redux-saga/effects'
import {getProduct} from '../api/product'
import { GET_PRODUCT,GET_PRODUCT_SUCCESS,GET_PRODUCT_ERROR } from "../actions/ProductAction";
export function* watchgetProducts(){
    yield takeEvery(GET_PRODUCT,getProductSaga)
}
function* getProductSaga(action){
    const response = yield getProduct();   
    try {
         // kiem tra xem co goi dc api ko 
    if(response !==undefined && response!==null){
        if(response.status===1){
            //thanh cong sẽ put về
            yield put({type:GET_PRODUCT_SUCCESS,response})
        }else{
            //truong hợp này gọi tới sever bi sever báo lỗi về
            yield put({type:GET_PRODUCT_ERROR,error:response.error})
        }
     }else{
         //Đôi khi api lỗi , sever ko trả dữ liệu vè
         const message="Có lỗi xảy ra, không thể kết nối tới sever"
         yield put({type:GET_PRODUCT_ERROR,error:message})
         
     }
    } catch (error) {
        const message="Có lỗi xảy ra, không thể kết nối tới sever"
        yield put({type:GET_PRODUCT_ERROR,error:message})
    }
}