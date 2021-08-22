import React from 'react';
import {Pressable, Image, StyleSheet} from 'react-native';
import {icons} from '@assets';
import {theme} from '@theme';
import {Block, Text} from '@components';

const FlatProduct = ({item, onPress, style}) => {
  const {nameProduct, imgProduct, price, time} = item;
  return (
    <Pressable onPress={onPress}>
      <Block flex row style={[styles.cardContainer, style]}>
        <Block width={70} height={70} marginHorizontal={8}>
          <Image source={{uri: imgProduct}} style={styles.imgProduct} />
        </Block>

        <Block flex column justifyCenter>
          <Text style={styles.name}>{nameProduct}</Text>
          <Text style={styles.price}>{price}</Text>
        </Block>
        <Text style={styles.time}>{time}</Text>
      </Block>
    </Pressable>
  );
};

export default FlatProduct;

const styles = StyleSheet.create({
  cardContainer: {
    paddingHorizontal: 8,
    paddingVertical: 8,
    marginHorizontal: 12,
    backgroundColor: theme.colors.grey,
    borderRadius: 10,
    marginVertical: 5,
  },
  imgProduct: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
  },
  name: {
    fontSize: 17,
    fontWeight: 'bold',
    color: theme.colors.gray,
    marginVertical: 1,
  },
  price: {
    fontSize: 15,
    color: theme.colors.red,
    fontWeight: 'bold',
    marginVertical: 1,
  },
  time: {
    fontSize: 13,
    color: theme.colors.lightGray,
    marginVertical: 8,
    marginHorizontal: 8,
  },
});
