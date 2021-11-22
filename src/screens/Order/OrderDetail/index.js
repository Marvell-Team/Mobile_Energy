import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {icons} from '@assets';
import {theme} from '@theme';
import {routes} from '@navigation/routes';
import styles from './styles';
import {connect} from 'react-redux';
import {getBillAction, getBillDetailByIdAction} from '@redux/actions';
import {formatCurrency} from '@utils/utils';
import {Header, Block} from '@components';
import style from '@components/Card/FlatCard/style';

const mapStateToProps = state => {
  return {
    error: state.getBillDetailByIdReducer
      ? state.getBillDetailByIdReducer.error
      : null,
    data2: state.getBillDetailByIdReducer
      ? state.getBillDetailByIdReducer.data
      : null,

    loadding: state.getBillDetailByIdReducer
      ? state.getBillDetailByIdReducer.loadding
      : null,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getBillAction: () => {
      dispatch(getBillAction());
    },
    getBillDetailByIdAction: id => {
      dispatch(getBillDetailByIdAction(id));
    },
  };
};

const OrderDetail = ({data2, getBillDetailById}) => {
  const navigation = useNavigation();
  const [data1, setData1] = useState([]);
  const [name, setName] = useState('');
  const [total, setTotal] = useState();
  const [phone, setPhone] = useState();
  const [address_store, setAddress_store] = useState('');
  const [status, setStatus] = useState('');
  const [idBill, setIdBill] = useState();

  useEffect(() => {
    if (data2 !== null) {
      const {data} = data2;
      const item = data2.data;
      setStatus(item.status);
      setData1(item.products);
      setTotal(item.total);
      setAddress_store(item.id_store.address_store);
      setName(item.id_bill.note_bill.name);
      setPhone(item.id_bill.note_bill.phone);
      setIdBill(item.id_bill._id);
    }
  }, [data2]);

  return (
    <Block style={styles.container}>
      <Header
        iconLeft={icons.back}
        title="Chi tiết đơn hàng"
        leftPress={() => {
          navigation.goBack();
        }}
      />
      <View paddingVertical={16} style={styles.v1}>
        <Text style={styles.text}>CHI TIẾT ĐƠN HÀNG #{idBill}</Text>
        <Block row>
          <Text style={styles.txtStatus}>Trạng thái: </Text>
          <Text style={styles.txtStatuss}>{status}</Text>
        </Block>
      </View>

      {data1.map(item => (
        <Block row padding={8} style={styles.v2}>
          <Image
            source={{uri: item.id_product.id_image.nameImage[0]}}
            style={styles.image}
          />

          <Block column style={styles.viewNameProduct}>
            <Block row>
              <Text style={styles.txtNameProduct}>
                {item.id_product.nameProduct}
              </Text>
              <Text style={styles.txtPrice}>
                {formatCurrency(item.id_product.price_product)}
              </Text>
            </Block>

            <Block column marginTop={8}>
              <Text style={{fontSize: 16, paddingLeft: 8}}>
                Màu sắc: Đen huyền bí
              </Text>
              <Text style={{fontSize: 16, paddingLeft: 8}}>
                Số lượng: {item.id_product.quantity_product}
              </Text>
            </Block>
          </Block>
        </Block>
      ))}

      <Block paddingHorizontal={16} paddingVertical={16} row style={styles.v3}>
        <Text style={styles.txtTotal}>Giá tạm tính:</Text>
        <Text style={styles.txtTotall}>{formatCurrency(total)}</Text>
      </Block>

      <Block paddingHorizontal={16} paddingVertical={16} style={styles.v4}>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>
          Địa chỉ và thông tin nơi nhận hàng:
        </Text>
        <Text style={{fontSize: 18, paddingTop: 8}}>
          {name} - {phone}
        </Text>
        <Text style={{fontSize: 18, paddingTop: 8}}>{address_store}</Text>
      </Block>

      <View style={styles.v5}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={styles.button}>
          <Text style={{color: theme.colors.white, fontSize: 18}}>
            Quay lại danh sách đơn hàng
          </Text>
        </TouchableOpacity>
      </View>
    </Block>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(OrderDetail);
