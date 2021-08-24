import React, {useState} from 'react';
import {ToastAndroid} from 'react-native';
import {Block, Text, Header, BillList} from '@components';
import {icons} from '@assets';
import styles from './styles';

const bill = [
  {
    id: 1,
    nameProduct: 'IPorn 12',
    price: 29999000,
    imgProduct:
      'https://image.thanhnien.vn/1024/uploaded/nthanhluan/2020_10_14/1_foyn.jpg',
    quantity: 1,
    status: 'Đã thanh toán',
    show: false,
  },
  {
    id: 2,
    nameProduct: 'IPorn 12',
    price: 29999000,
    imgProduct:
      'https://image.thanhnien.vn/1024/uploaded/nthanhluan/2020_10_14/1_foyn.jpg',
    quantity: 2,
    status: 'Chưa thanh toán',
    show: false,
  },
  {
    id: 3,
    nameProduct: 'IPorn 12',
    price: 29999000,
    imgProduct:
      'https://image.thanhnien.vn/1024/uploaded/nthanhluan/2020_10_14/1_foyn.jpg',
    quantity: 1,
    status: 'Đã thanh toán',
    show: false,
  },
  {
    id: 4,
    nameProduct: 'IPorn 12',
    price: 29999000,
    imgProduct:
      'https://image.thanhnien.vn/1024/uploaded/nthanhluan/2020_10_14/1_foyn.jpg',
    quantity: 1,
    status: 'Chưa thanh toán',
    show: false,
  },
  {
    id: 5,
    nameProduct: 'IPorn 12',
    price: 29999000,
    imgProduct:
      'https://image.thanhnien.vn/1024/uploaded/nthanhluan/2020_10_14/1_foyn.jpg',
    quantity: 1,
    status: 'Đã thanh toán',
    show: false,
  },
  {
    id: 6,
    nameProduct: 'IPorn 12',
    price: 29999000,
    imgProduct:
      'https://image.thanhnien.vn/1024/uploaded/nthanhluan/2020_10_14/1_foyn.jpg',
    quantity: 1,
    status: 'Chưa thanh toán',
    show: false,
  },
];

const MyBillScreens = () => {
  const [data, setData] = useState(bill);
  return (
    <Block style={styles.container}>
      <Header
        iconLeft={icons.back}
        title="Đơn hàng của bạn"
        iconRight={icons.more}
      />
      <BillList data={data} style={{marginVertical: 8}} />
    </Block>
  );
};

export default MyBillScreens;
