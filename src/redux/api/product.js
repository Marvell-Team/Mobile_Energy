import axios from 'axios';
import { api } from 'config/config';

export async function getProduct() {
    return axios
      .get('http://10.0.2.2:3000/product')
      .then((response) => {
        console.log('response catch => getLoginApi => '+response.data);
        return response.data;
      })
      .then((response) => {
        return response;
      })
      .catch(function (error) {
        //Đăng nhập sai
        //Thep api nó sẽ trả về status 401 nên bay về hàm này
        //những không có giá trị trả về
        //nên tạo dữ liệu erro vào hàm này
        console.log()
        return {
          status: -1,
          error: 'Có lỗi xảy ra , không kết nối được tới máy chủ',
        };
      });
  }

  export async function getProductByCategorys(categori) {
    console.log(categori)
    return axios
      .get(api+'/product/'+categori)
      .then((response) => {
        console.log('response catch => getProductApi => '+response.data);
        console.log(response.data);
        return response.data;
      })
      .then((response) => {
        return response;
      })
      .catch(function (error) {
        //Đăng nhập sai
        //Thep api nó sẽ trả về status 401 nên bay về hàm này
        //những không có giá trị trả về
        //nên tạo dữ liệu erro vào hàm này
        console.log()
        return {
          status: -1,
          error: 'Có lỗi xảy ra , không kết nối được tới máy chủ',
        };
      });
  }
  export async function getProductById(id) {
    console.log(id+'api')
    return axios
      .get(api+'/product/id/'+id)
      .then((response) => {
        console.log('response catch => getProductApi => '+response.data);
        console.log(response.data);
        return response.data;
      })
      .then((response) => {
        return response;
      })
      .catch(function (error) {
        //Đăng nhập sai
        //Thep api nó sẽ trả về status 401 nên bay về hàm này
        //những không có giá trị trả về
        //nên tạo dữ liệu erro vào hàm này
        console.log()
        return {
          status: -1,
          error: 'Có lỗi xảy ra , không kết nối được tới máy chủ',
        };
      });
  }
  export async function addProduct(id) {
    console.log(id+'api')
    return axios
      .post(api+'/product/user/add-product',
      {
        price_product:"20990000",
        description_product:"description_product",
        quantity_product:"10",
        id_category:"61751425be6eb74ad81eda0f",
        nameProduct:"Text Lan3"
      })
      .then((response) => {
        console.log('response catch => getProductApi => '+response.data);
        console.log(response.data);
        return response.data;
      })
      .then((response) => {
        return response;
      })
      .catch(function (error) {
        //Đăng nhập sai
        //Thep api nó sẽ trả về status 401 nên bay về hàm này
        //những không có giá trị trả về
        //nên tạo dữ liệu erro vào hàm này
        console.log()
        return {
          status: -1,
          error: 'Có lỗi xảy ra , không kết nối được tới máy chủ',
        };
      });
  }