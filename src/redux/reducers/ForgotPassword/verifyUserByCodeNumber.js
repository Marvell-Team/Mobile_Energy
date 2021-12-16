import { VERIFY_USER_BY_CODE_NUMBER, VERIFY_USER_BY_CODE_NUMBER_ERROR, VERIFY_USER_BY_CODE_NUMBER_SUCCESS, LOGOUT } from "@redux/actions/ForgotPasswordAction";

const initialStale = {
  loadding: false, //ko loadding dc
  data: null, //ko có dữ liệu
  error: null, //khong lỗi
};
const verifyUserByCodeNumberReducer = (state = initialStale, action) => {
    switch (action.type) {
      //đang đăng nhậps
      case VERIFY_USER_BY_CODE_NUMBER:
        return {
          loadding: true, //dang loadding
          data: null, //ko có dữ liệu
          error: null, //khong lỗi
        };
      //đăng nhập thành công
      case VERIFY_USER_BY_CODE_NUMBER_SUCCESS:
        return {
          loadding: false, //ngừng loadding dc
          data: action.response, //co du lieu
          error: null, //khong lỗi
        };
      //đăng nhập thất bại
      case VERIFY_USER_BY_CODE_NUMBER_ERROR:
        return {
          loadding: false, //ngung loadding dc
          data: null, //ko có dữ liệu
          error: action.error, //khong lỗi
        };
      case LOGOUT:
        return {
            loadding: false, //ngung loadding dc
            data: null, //ko có dữ liệu
            error: null, //khong lỗi
        };
      default:
        //trả về mặc định
        return state;
    }
};
export default verifyUserByCodeNumberReducer;
