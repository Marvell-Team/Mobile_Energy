import { GET_FORGOT_PASSWORD_BY_EMAIL, GET_FORGOT_PASSWORD_BY_EMAIL_ERROR, GET_FORGOT_PASSWORD_BY_EMAIL_SUCCESS, LOGOUT } from "@redux/actions/ForgotPasswordAction";

const initialStale = {
  loadding: false, //ko loadding dc
  data: null, //ko có dữ liệu
  error: null, //khong lỗi
};
const getForgotPasswordByEmailReducer = (state = initialStale, action) => {
    switch (action.type) {
      //đang đăng nhậps
      case GET_FORGOT_PASSWORD_BY_EMAIL:
        return {
          loadding: true, //dang loadding
          data: null, //ko có dữ liệu
          error: null, //khong lỗi
        };
      //đăng nhập thành công
      case GET_FORGOT_PASSWORD_BY_EMAIL_SUCCESS:
        return {
          loadding: false, //ngừng loadding dc
          data: action.response, //co du lieu
          error: null, //khong lỗi
        };
      //đăng nhập thất bại
      case GET_FORGOT_PASSWORD_BY_EMAIL_ERROR:
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
export default getForgotPasswordByEmailReducer;
