import React from 'react';
import {Dimensions, StyleSheet, Pressable, Image} from 'react-native';
import {theme} from '@theme';
import {Block, Text} from '@components';

const ProductCard = ({item, index, onPress, style}) => {
  const {id, name_product, img_product, price} = item;
  return (
    <Pressable onPress={onPress}>
      <Block column shadow flex style={[styles.cardContainer, style]}>
        <Block flex={0.5} style={styles.viewImg}>
          <Image
            source={{uri: img_product}}
            style={styles.imgProduct}
            resizeMode="contain"
          />
        </Block>
        <Block flex={0.5} justifyCenter style={styles.viewInfo}>
          <Text style={styles.name}>{name_product}</Text>
          <Text style={styles.price}>Giá: {price} Đ</Text>
        </Block>
      </Block>
    </Pressable>
  );
};

export default ProductCard;

const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');
const styles = StyleSheet.create({
  cardContainer: {
    width: width / 2.5 - 12,
    backgroundColor: theme.colors.white,
    borderRadius: 5,
    marginVertical: 8,
    marginHorizontal: 8,
    padding: 5,
  },
  viewImg: {
    alignSelf: 'center',
    width: '100%',
    height: 120,
    alignItems: 'center',
    marginBottom: 5,
  },
  imgProduct: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    width: '100%',
    height: '100%',
  },
  viewInfo: {
    paddingTop: 12,
    paddingBottom: 5,
    paddingHorizontal: 5,
  },
  name: {
    fontSize: 17,
    fontWeight: 'bold',
    color: theme.colors.gray,
    marginVertical: 1,
    textAlign: 'center',
  },
  price: {
    fontSize: 15,
    color: theme.colors.primary,
    fontWeight: 'bold',
    marginVertical: 5,
    textAlign: 'center',
  },
  time: {
    fontSize: 13,
    color: theme.colors.lightGray,
    marginVertical: 3,
  },
});
