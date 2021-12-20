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
  ToastAndroid,
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
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loading from '@components/Loadding/Loading';

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
const CartScreens = ({
  data,
  getCartByUser,
  UpdateCartByUser,
  dataUpdate,
  loadding,
  error,
}) => {
  const navigation = useNavigation();
  const [dataCart, setDataCart] = useState([]);
  const [dataID, setDataID] = useState('');
  const [dataTotal, setDataTotal] = useState(0);
  const [checktoken, setChecktoken] = useState(null);
  const [loading, setLoading] = useState(false);
  const [userID, setUserID] = useState('a');
  useEffect(() => {
    if (useData.token !== null) {
      getCartByUser(useData.id);
    }
  }, [UpdateCartByUser, dataUpdate, getCartByUser]);
  const _setDataCart = aa => {
    setDataCart(aa.products);
    setDataTotal(aa.total);
  };

  useEffect(async () => {
    //
    //   if (data !== null) {
    //     console.log(data.data);
    //      setDataCart(data.data.products);
    //      setDataID(data.data._id);
    //      setDataTotal(data.data.total);
    //   }
    //
    if (useData.token !== null) {
      const cart = await AsyncStorage.getItem(useData.id);
      const aa = JSON.parse(cart);
      _setDataCart(aa);
      //  setDataCarts(aa);
    }
  }, [AsyncStorage.getItem(userID), userID]);

  useEffect(() => {
    if (useData.token !== null) {
      console.log('token' + useData.token);
      setChecktoken(useData.token);
    }
    if (useData.id !== null) {
      setUserID(useData.id);
    }
  }, [useData]);

  useEffect(() => {
    setLoading(loadding);
  }, [loadding]);

  useEffect(() => {
    if (error !== null) {
      console.log(error);
      ToastAndroid.show('Lỗi: ' + error, ToastAndroid.SHORT);
    }
  }, [error]);

  return (
    <SafeAreaView style={{backgroundColor: theme.colors.grey, flex: 1}}>
      <Header title="Giỏ hàng" />
      {checktoken === null ? (
        <View style={{backgroundColor: COLORS.light}}>
          <View
            style={{
              width: '100%',
              height: '94%',
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
        <View style={{flex: 1}}>
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
                _setDataCart={_setDataCart}
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
              bottom: 0,
              marginTop: 8,
              backgroundColor: theme.colors.white,
              paddingVertical: 12,
            }}>
            <View style={{width: '40%', justifyContent: 'center'}}>
              <Text style={{fontSize: 16}}>Tổng</Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: theme.colors.red,
                }}>
                {formatCurrency(dataTotal)}
              </Text>
            </View>
            <View style={{width: '60%'}}>
              <PrimaryButton
                title="Đặt Hàng"
                onPress={() => {
                  if (Array.isArray(dataCart) && dataCart.length) {
                    navigation.navigate(routes.PAYMENT_SCREEN);
                  } else {
                    ToastAndroid.show(
                      'Hiện không có hàng để mua',
                      ToastAndroid.SHORT,
                    );
                  }
                }}
              />
            </View>
          </View>
        </View>
      )}
      {/*Có cái này mới hiện loading!!!*/}
      {loading && <Loading />}
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
  _setDataCart,
}) => {
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    setAmount(item.amount);
  }, [getCartByUser]);
  const {id_image, price_product, nameProduct} = item;

  const addCart = async (Carts, index) => {
    let items = [];
    Carts[index].amount = Carts[index].amount + parseInt(1);
    setAmount(Carts[index].amount);
    items.push(...Carts);
    let cart = {
      total: parseInt(dataTotal) + parseInt(price_product),
      products: items,
    };
    _setDataCart(cart);
    await AsyncStorage.setItem(useData.id, JSON.stringify(cart));
  };
  const subtractCart = async (Carts, index) => {
    if (amount > 1) {
      let items = [];
      Carts[index].amount = Carts[index].amount - parseInt(1);
      setAmount(Carts[index].amount);
      items.push(...Carts);
      let cart = {
        total: parseInt(dataTotal) - parseInt(price_product),
        products: items,
      };
      _setDataCart(cart);
      await AsyncStorage.setItem(useData.id, JSON.stringify(cart));
    }
  };

  const removeCart = async (Carts, id, index) => {
    const amountI = Carts[index].amount;
    var filtered = Carts.filter(function (el) {
      return el.id_product != id;
    });
    console.log(filtered);
    let cart = {
      total: parseInt(dataTotal) - parseInt(price_product * amountI),
      products: filtered,
    };
    //JSON.stringify(cart)
    _setDataCart(cart);
    await AsyncStorage.setItem(useData.id, JSON.stringify(cart));
    // setAmount(Carts[index].amount)
    // items.push(...Carts);
    // console.log(dataCart)

    // UpdateCartByUser({
    //   idcart: idcart,
    //   id_product: filtered,
    // });
  };

  const createThreeButtonAlert = () =>
    Alert.alert('Xóa Sản Phẩm', 'Bạn có chắc muốn bỏ sản phẩm này', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => removeCart(dataCart, item.id_product, index),
      },
    ]);
  return (
    <View style={style.cartCard}>
      <Image source={{uri: id_image}} style={{height: 88, width: 88}} />
      <View
        style={{
          marginLeft: 10,
          flex: 3,
        }}>
        <Text
          numColumns={1}
          style={{fontWeight: 'bold', fontSize: 18, marginRight: 8}}>
          {nameProduct}
        </Text>

        <Text
          style={{
            fontSize: 18,
            color: theme.colors.blackText,
            marginVertical: 8,
          }}>
          {formatCurrency(price_product)}
        </Text>
        <View style={{}}>
          <Count
            amount={amount}
            onPressSubtract={() => {
              subtractCart(dataCart, index);
            }}
            onPressPlus={() => {
              addCart(dataCart, index);
            }}
          />
        </View>
      </View>

      <View style={{alignSelf: 'flex-start'}}>
        <Thumbnail
          onPress={() => createThreeButtonAlert()}
          source={icons.close}
          imageStyle={{
            width: getSize.s(15),
            height: getSize.s(15),
            marginTop: 4,
          }}
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
    paddingVertical: 12,
    paddingHorizontal: 12,
    flexDirection: 'row',
    backgroundColor: theme.colors.white,
    marginBottom: 2,
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
