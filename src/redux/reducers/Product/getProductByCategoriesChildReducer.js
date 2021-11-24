import { GET_PRODUCT_BY_CATEGORYS_CHILD,  GET_PRODUCT_BY_CATEGORYS_CHILD_ERROR, GET_PRODUCT_BY_CATEGORYS_CHILD_SUCCESS } from '../../actions/ProductAction'
const initialStale = {
  loadding: false, //ko loadding dc
  data: null, //ko có dữ liệu
  error: null, //khong lỗi
};
const getProductByCategoriesChildReducer = (state = initialStale, action) => {
    switch (action.type) {
      //đang đăng nhập
      case GET_PRODUCT_BY_CATEGORYS_CHILD:
        return {
          loadding: true, //dang loadding
          data: null, //ko có dữ liệu
          error: null, //khong lỗi
        };
      //đăng nhập thành công
      case GET_PRODUCT_BY_CATEGORYS_CHILD_SUCCESS:
        return {
          loadding: false, //ngừng loadding dc
          data: action.response, //co du lieu
          error: null, //khong lỗi
        };
      //đăng nhập thất bại
      case GET_PRODUCT_BY_CATEGORYS_CHILD_ERROR:
        return {
          loadding: false, //ngung loadding dc
          data: null, //ko có dữ liệu
          error: action.error, //khong lỗi
        };
      default:
        //trả về mặc định
        return state;
    }
};
export default getProductByCategoriesChildReducer;
