import React, {useState} from 'react';
import {
  StyleSheet,
  ToastAndroid,
  Image,
  Pressable,
  UIManager,
  Platform,
  LayoutAnimation,
} from 'react-native';
import {Block, Text, Thumbnail} from '@components';
import {theme} from '@theme';
import {icons} from '@assets';

const BillCard = ({item, onPress, style}) => {
  const {id, nameProduct, price, imgProduct, quantity, status, show} = item;
  const [isShow, setShow] = useState(show);
  const total = price * quantity;
  if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }
  return (
    <>
      {isShow === false ? (
        //  Mặc định bill thu nhỏ
        <Block shadow row justifyCenter style={styles.cardContainer}>
          <Block width={'50%'}>
            <Text style={styles.idProduct}>Mã đơn hàng #{id}</Text>
          </Block>
          <Block width={'50%'}>
            <Thumbnail
              onPress={() => {
                LayoutAnimation.easeInEaseOut();
                setShow(!isShow);
              }}
              source={icons.down}
              style={styles.btnshow}
              imageStyle={styles.iconShow}
            />
          </Block>
        </Block>
      ) : (
        //   Khi bấm icon down thì log ra chi tiết hóa đơn
        <Block shadow justifyCenter style={styles.cardContainer}>
          {/* mã với nút up down */}
          <Block row paddingVertical={5}>
            <Block width={'50%'}>
              <Text style={styles.idProduct}>Mã đơn hàng #{id}</Text>
            </Block>
            <Block width={'50%'}>
              <Thumbnail
                onPress={() => {
                  LayoutAnimation.easeInEaseOut();
                  setShow(!isShow);
                }}
                source={icons.up}
                style={styles.btnshow}
                imageStyle={styles.iconShow}
              />
            </Block>
          </Block>
          <Block row paddingVertical={8}>
            <Block style={styles.viewImg} width={'50%'}>
              <Image source={{uri: imgProduct}} style={styles.imgProduct} />
            </Block>
            <Block style={styles.viewInfo} width={'50%'}>
              <Text style={styles.nameProduct}>{nameProduct}</Text>
              <Text style={styles.price}>{price} VNĐ</Text>
              <Text style={styles.quantity}>x{quantity}</Text>
            </Block>
          </Block>
          <Block row alignCenter paddingVertical={5} paddingHorizontal={5}>
            {status === 'Đã thanh toán' ? (
              <Block row width={'50%'}>
                <Text style={styles.status1}>{status}</Text>
                <Thumbnail source={icons.done} imageStyle={styles.iconDone} />
              </Block>
            ) : (
              <Block row width={'50%'}>
                <Text style={styles.status2}>{status}</Text>
              </Block>
            )}
            <Block width={'50%'} style={{alignItems: 'flex-end'}}>
              <Text style={styles.txtTotal}>Tổng: {total} VNĐ</Text>
            </Block>
          </Block>
        </Block>
      )}
    </>
  );
};

export default BillCard;

const styles = StyleSheet.create({
  cardContainer: {
    marginVertical: 5,
    marginHorizontal: 12,
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: theme.colors.grey,
    borderRadius: 8,
  },
  idProduct: {
    color: theme.colors.grayText,
  },
  btnshow: {
    width: 20,
    height: 20,
    alignSelf: 'flex-end',
    marginHorizontal: 8,
  },
  iconShow: {
    tintColor: theme.colors.grayText,
  },
  viewImg: {
    alignSelf: 'center',
    // width: 100,
    // height: 100,
    // alignItems: 'center',
    marginBottom: 3,
  },
  imgProduct: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    width: 100,
    height: 100,
  },
  viewInfo: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingHorizontal: 8,
  },
  nameProduct: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 3,
  },
  price: {
    fontSize: 16,
    color: theme.colors.grayText,
    marginVertical: 2,
  },
  quantity: {
    fontSize: 16,
    color: theme.colors.grayText,
    marginVertical: 2,
  },
  status1: {
    color: theme.colors.gray,
  },
  status2: {
    color: theme.colors.grayText,
  },
  iconDone: {
    width: 14,
    height: 14,
    marginHorizontal: 3,
    marginVertical: 1,
    tintColor: theme.colors.green,
  },
  txtTotal: {
    fontSize: 17,
    fontWeight: 'bold',
    color: theme.colors.red,
  },
});
