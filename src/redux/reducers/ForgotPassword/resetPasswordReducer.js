import { RESET_PASSWORD, RESET_PASSWORD_ERROR, RESET_PASSWORD_SUCCESS, LOGOUT } from "@redux/actions/ForgotPasswordAction";

const initialStale = {
  loadding: false, //ko loadding dc
  data: null, //ko có dữ liệu
  error: null, //khong lỗi
};
const resetPasswordReducer = (state = initialStale, action) => {
    switch (action.type) {
      //đang đăng nhậps
      case RESET_PASSWORD:
        return {
          loadding: true, //dang loadding
          data: null, //ko có dữ liệu
          error: null, //khong lỗi
        };
      //đăng nhập thành công
      case RESET_PASSWORD_SUCCESS:
        return {
          loadding: false, //ngừng loadding dc
          data: action.response, //co du lieu
          error: null, //khong lỗi
        };
      //đăng nhập thất bại
      case RESET_PASSWORD_ERROR:
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
export default resetPasswordReducer;
