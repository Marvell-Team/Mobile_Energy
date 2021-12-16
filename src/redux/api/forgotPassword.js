import axios from 'axios';
import {api, useData} from 'config/config';

export async function getForgotPasswordByEmailApi(number) {
  console.log(
    '>>>>>>>>>>>>>>>3333333333333 getForgotPasswordByEmailApi: ' + number,
  );
  //console.log('>>>>>>>>>>>>>>>>>>>> ======================= >>>>>>>>>>>>>>>>>')
  return axios
    .get(api + '/users/Email/' + number)
    .then(response => {
      console.log(
        'response catch ===========> getForgotPasswordByEmailApi => ' +
          response.data,
      );
      console.log(response.data);
      return response.data;
    })
    .then(response => {
      return response;
    })
    .catch(function (error) {
      //Đăng nhập sai
      //Thep api nó sẽ trả về status 401 nên bay về hàm này
      //những không có giá trị trả về
      //nên tạo dữ liệu erro vào hàm này
      console.log();
      return {
        status: -1,
        error: 'Có lỗi xảy ra, không kết nối được tới máy chủ',
      };
    });
}

export async function verifyUserByCodeNumberApi(input) {
  console.log(
    '>>>>>>>>>>333333333 verifyUserByCodeNumberApi: ' + input,
  );
  return axios
    .post(api + '/users/Email/verify', input)
    .then(response => {
      console.log(
        'response catch => verifyUserByCodeNumberApi => ' + response.data,
      );
      console.log(response.data);
      return response.data;
    })
    .then(response => {
      return response;
    })
    .catch(function (error) {
      //Đăng nhập sai
      //Thep api nó sẽ trả về status 401 nên bay về hàm này
      //những không có giá trị trả về
      //nên tạo dữ liệu erro vào hàm này
      console.log();
      return {
        status: -1,
        error: 'Có lỗi xảy ra, không kết nối được tới máy chủ',
      };
    });
}

export async function resetPasswordApi(input) {
  console.log(
    '>>>>>>>>>>333333333 resetPasswordApi: ' + input,
  );
  return axios
    .post(api + '/users/resetPWD', input)
    .then(response => {
      console.log(
        'response catch => resetPasswordApi => ' + response.data,
      );
      console.log(response.data);
      return response.data;
    })
    .then(response => {
      return response;
    })
    .catch(function (error) {
      //Đăng nhập sai
      //Thep api nó sẽ trả về status 401 nên bay về hàm này
      //những không có giá trị trả về
      //nên tạo dữ liệu erro vào hàm này
      console.log();
      return {
        status: -1,
        error: 'Có lỗi xảy ra, không kết nối được tới máy chủ',
      };
    });
}
