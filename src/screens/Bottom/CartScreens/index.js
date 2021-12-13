import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  StatusBar,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from './colors';
import Phones from './Phones';
import {height, width} from '@utils/responsive';
import {theme} from '@theme';

import {PrimaryButton} from './Button';
import Count from '@components/Count';
import {formatCurrency} from '@utils/utils';
import {connect} from 'react-redux';
import {getCartByUser, UpdateCartByUser} from '../../../redux/actions';
import {useData} from 'config/config';
import {useNavigation} from '@react-navigation/native';
import {routes} from '@navigation/routes';
import {Header, Thumbnail} from '@components';
import {icons} from '@assets';
import {getSize} from '@utils/responsive';
const mapStateToProps = state => {
  return {
    error: state.getCartByUserReducer ? state.getCartByUserReducer.error : null,
    data: state.getCartByUserReducer ? state.getCartByUserReducer.data : null,
    dataUpdate: state.updateCartByCartReducer
      ? state.updateCartByCartReducer.data
      : null,
    loadding: state.getCartByUserReducer
      ? state.getCartByUserReducer.loadding
      : null,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCartByUser: id => {
      dispatch(getCartByUser(id));
    },
    UpdateCartByUser: input => {
      dispatch(UpdateCartByUser(input));
    },
  };
};
const CartScreens = ({data, getCartByUser, UpdateCartByUser, dataUpdate}) => {
  const navigation = useNavigation();
  const [dataCart, setDataCart] = useState([]);
  const [dataID, setDataID] = useState('');
  const [dataTotal, setDataTotal] = useState(0);
  const [checktoken, setChecktoken] = useState(null);

  useEffect(() => {
    if (useData.token !== null) {
      getCartByUser(useData.id);
    }
  }, [UpdateCartByUser, dataUpdate, getCartByUser]);
  useEffect(() => {
    if (useData.token !== null) {
      if (data !== null) {
        console.log(data.data);
        setDataCart(data.data.products);
        setDataID(data.data._id);
        setDataTotal(data.data.total);
      }
    }
  }, [data]);
  useEffect(() => {
    console.log('token' + useData.token);
    setChecktoken(useData.token);
  }, [useData.token]);
  return (
    <SafeAreaView style={{backgroundColor: COLORS.white, flex: 1}}>
      <View style={style.header}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: COLORS.white}}>
          Giỏ Hàng
        </Text>
      </View>
      {checktoken === null ? (
        <View style={{backgroundColor: COLORS.light}}>
          <View
            style={{
              width: '100%',
              height: '88%',
              alignItems: 'center',
              justifyContent: 'center',
              paddingVertical: getSize.m(20),
              flexDirection: 'row',
            }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(routes.LOGINSCREENS);
              }}
              style={[
                style.button,
                {width: width / 3, alignItems: 'flex-end'},
              ]}>
              <Text style={[style.textbtn]}>Đăng nhập</Text>
            </TouchableOpacity>
            <View
              style={{
                paddingVertical: getSize.m(10),
                backgroundColor: theme.colors.white,
              }}>
              <Text style={style.textbtn}>/</Text>
            </View>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate(routes.SIGNUPSCREENS);
              }}
              style={[
                style.button,
                {width: width / 3, alignItems: 'flex-start'},
              ]}>
              <Text style={style.textbtn}>Đăng ký</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View style={{flex:1}}>
          <FlatList
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom: 80}}
            data={dataCart}
            renderItem={({item, index}) => (
              <CartCard
                setDataTotal={setDataTotal}
                dataTotal={dataTotal}
                item={item}
                index={index}
                dataCart={dataCart}
                dataID={dataID}
                UpdateCartByUser={UpdateCartByUser}
              />
            )}
            ListFooterComponentStyle={{paddingHorizontal: 20, marginTop: 20}}
          />
          <View
            style={{
              
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 12,
              position: 'absolute',
              bottom: 8,
              marginTop: 8,
            }}>
            <View style={{width: '50%', justifyContent: 'center'}}>
              <Text style={{fontSize: 18}}>Tổng</Text>
              <Text style={{fontSize: 20, fontWeight: 'bold', color: 'red'}}>
                {formatCurrency(dataTotal)}
              </Text>
            </View>
            <View style={{width: '50%'}}>
              <PrimaryButton
                title="Đặt Hàng"
                onPress={() => {
                  navigation.navigate(routes.PAYMENT_SCREEN);
                }}
              />
            </View>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};
const CartCard = ({
  setDataTotal,
  item,
  index,
  dataCart,
  dataID,
  UpdateCartByUser,
  dataTotal,
  getCartByUser,
}) => {
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    setAmount(item.amount);
  }, [getCartByUser, dataCart]);
  const {id_image, price_product, nameProduct} = item.id_product;

  const addCart = (Carts, idcart, index) => {
    let items = [];
    Carts[index].amount = Carts[index].amount + parseInt(1);
    setAmount(Carts[index].amount);
    // console.log(parseInt(dataTotal)+parseInt(price_product))
    setDataTotal(parseInt(dataTotal) + parseInt(price_product));
    items.push(...Carts);
    console.log(dataCart);
    UpdateCartByUser({
      idcart: idcart,
      id_product: items,
      total: parseInt(dataTotal) + parseInt(price_product),
    });
  };
  const subtractCart = (Carts, idcart, index) => {
    if (amount > 1) {
      let items = [];
      Carts[index].amount = Carts[index].amount - parseInt(1);
      console.log(index + 'aaa' + Carts[index].amount + 'idcart' + idcart);
      setAmount(Carts[index].amount);
      items.push(...Carts);
      console.log(dataCart);
      UpdateCartByUser({
        idcart: idcart,
        id_product: items,
        total: parseInt(dataTotal) - parseInt(price_product),
      });
    }
  };

  const removeCart = (Carts, id, idcart, index) => {
    const amountI = Carts[index].amount;
    var filtered = Carts.filter(function (el) {
      return el._id != id;
    });

    // setAmount(Carts[index].amount)
    // items.push(...Carts);
    // console.log(dataCart)
    UpdateCartByUser({
      idcart: idcart,
      id_product: filtered,
      total: parseInt(dataTotal) - parseInt(price_product * amountI),
    });
  };
  //  const img = str => {
  //    if (str === undefined) {
  //    return null;
  //    } else {
  //    const newstr = str.replace(/localhost/i, '10.0.2.2');
  //     return newstr;
  //    }
  // };
  const createThreeButtonAlert = () =>
    Alert.alert('Xóa Sản Phẩm', 'Bạn có chắc muốn bỏ sản phẩm này', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => removeCart(dataCart, item._id, dataID, index),
      },
    ]);
  return (
    <View style={style.cartCard}>
      <Image
        source={{uri: id_image.nameImage[0]}}
        style={{height: 80, width: 80}}
      />
      <View
        style={{
          marginLeft: 10,
          paddingVertical: 20,
          flex: 3,
        }}>
        <Text numColumns={1} style={{fontWeight: 'bold', fontSize: 18}}>
          {nameProduct}
        </Text>
        <Text style={{fontSize: 14, color: COLORS.grey}}>
          {item.ingredients}
        </Text>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>
          {formatCurrency(price_product)}
        </Text>
      </View>
      <View style={{alignItems: 'center', flex: 2}}>
        <Count
          amount={amount}
          onPressSubtract={() => {
            subtractCart(dataCart, dataID, index);
          }}
          onPressPlus={() => {
            addCart(dataCart, dataID, index);
          }}
        />
      </View>

      <View style={{height: '100%', paddingTop: 8}}>
        <Thumbnail
          onPress={() => createThreeButtonAlert()}
          source={icons.close}
          imageStyle={{width: getSize.s(15), height: getSize.s(15)}}
        />
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    backgroundColor: COLORS.primary,
    paddingTop: StatusBar.currentHeight + 12,
    paddingBottom: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartCard: {
    height: 100,
    marginVertical: 5,
    marginHorizontal: 12,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderColor: COLORS.grey,
    borderWidth: 0.5,
    borderRadius: 8,
  },
  actionBtn: {
    width: 80,
    height: 30,
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
  button: {
    paddingVertical: getSize.m(10),
    backgroundColor: theme.colors.white,
    paddingHorizontal: getSize.m(10),
  },
  textbtn: {
    fontWeight: 'bold',
    fontSize: getSize.m(18),
    color: theme.colors.primary,
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(CartScreens);
