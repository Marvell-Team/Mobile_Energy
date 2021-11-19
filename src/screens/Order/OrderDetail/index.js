import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  StatusBar,
  Dimensions,
  ToastAndroid,
  Button,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {icons} from '@assets';
import {theme} from '@theme';
import {routes} from '@navigation/routes';
import styles from './styles';

const OrderDetail = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
        <View style={styles.v1}>
          <Text style={styles.text}>CHI TIẾT ĐƠN HÀNG #696969</Text>
          <Text>Trạng thái: Đã nhận hàng</Text>
        </View>

        <View style={styles.v2}>
            <View style={styles.v21}>
            <Image
              style={styles.image}
              source={{
              uri: 'https://s13emagst.akamaized.net/products/44/43401/images/img129298_21122009184335.jpg',
              }}
          />
            <Text style={{fontSize: 20, marginTop: 10}}>Iphone 3 Limited</Text>
            <Text style={{fontSize: 20, marginTop: 10, color: theme.colors.red, marginLeft: 50}}>2.999.999d</Text>
            </View>

            <View style={styles.v22}>
                <Text style={{fontSize: 15, marginLeft: 100}}>Màu sắc: Đen huyền bí</Text>
                <Text style={{fontSize: 15, marginLeft: 40, paddingBottom: 20}}>Số lượng: 1</Text>
            </View>
        </View>

        <View style={styles.v3}>
                <Text style={{fontSize: 20, left: 20}}>Giá tạm tính:</Text>
                <Text style={{fontSize: 20, left: 170}}>2.999.999d</Text>
        </View>

        <View style={styles.v4}>
                <Text style={{fontSize: 18, fontWeight: 'bold', margin: 5}}>Địa chỉ và thông tin người nhận hàng: </Text>
                <Text style={styles.text2}>Mèo póng - 0909999999</Text>
                <Text style={styles.text2}>Địa chỉ nhận hàng: 167/78/98/54/23 Đường 3 tháng 2, phường 6, quận 10, TPHCM</Text>
                <Text style={styles.text2}>Thời gian nhận hàng: 15:15 ngày 15 tháng 12 năm 2021</Text>
        </View>

        <View style={styles.v5}>
        <TouchableOpacity
          onPress={() => navigation.navigate(routes.BOTTOMTABBAR)}
          style={styles.button}>
          <Text style={{color: theme.colors.white, fontSize: 18}}>
            Quay lại danh sách đơn hàng
          </Text>
        </TouchableOpacity>

        </View>


    </View>
  );
};
export default OrderDetail;
