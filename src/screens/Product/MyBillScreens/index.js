import React, {useEffect, useState} from 'react';
import {ToastAndroid} from 'react-native';
import {Block, Text, Header, BillList, Thumbnail} from '@components';
import {icons} from '@assets';
import styles from './styles';
import {getBillAction} from '@redux/actions';
import {connect} from 'react-redux';
import {useData} from 'config/config';
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

const mapStateToProps = state => {
  return {
    error: state.getBillReducers ? state.getBillReducers.error : null,
    data1: state.getBillReducers ? state.getBillReducers.data : null,
    loadding: state.getBillReducers ? state.getBillReducers.loadding : null,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getBillAction: id => {
      dispatch(getBillAction(id));
    },
  };
};

const MyBillScreens = ({data1, getBillAction}) => {
  const [data, setData] = useState([]);
  console.log('Length >>>>>>' + data.length);
  useEffect(() => {
    if (data1 !== null) {
      setData(data1.data);
    }
  }, [data1]);
  useEffect(() => {
    getBillAction(useData.id);
  }, [getBillAction]);
  return (
    <Block style={styles.container}>
      <Header
        iconLeft={icons.back}
        title="Đơn hàng của bạn"
        iconRight={icons.more}
      />
      {data.length == 0 ? (
        <Block alignCenter justifyCenter flex>
          <Thumbnail
            source={icons.bill}
            style={styles.viewBill}
            imageStyle={styles.imgBill}
          />
        </Block>
      ) : (
        <BillList data={data} style={{marginVertical: 8}} />
      )}
    </Block>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(MyBillScreens);
