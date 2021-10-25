import React, {useState, useEffect} from 'react';
import {View, Dimensions, Image, TouchableOpacity} from 'react-native';
import {Block, Text, Thumbnail, Button, Header} from '@components';
import {icons} from '@assets';
import styles from './style';
import {theme} from '@theme';
import {useNavigation} from '@react-navigation/native';
import { getSize } from '@utils/responsive';
const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');
const Product_Card = ({item}) => {
  useEffect(() => {
    console.log(item.id_image.nameImage[0])
  }, [])
  return (
    <Block
      style={{}}
      borderWidth={1}
      borderColor="#D3D3D3"
      borderRadius={5}
      width={width / 2.3}
      margin={10}>
      <Thumbnail
        source={{uri:'http://10.0.2.2:3000/public/assets/images/imgProduct2-1635167989136.jpg'}}
        style={{width: '100%', height: getSize.s(150)}}
        resizeMode={'stretch'}
      />
      <Text marginTop={5} size={18} style={{fontWeight: 'bold'}}>
        {' '}
        {item.nameProduct}
      </Text>
      <Text size={14} color={theme.colors.red} style={{fontWeight: 'bold'}}>
        {' '}
        {item.price_product + ' VND'}
      </Text>
      <Text size={10} margin={5}>
        
      </Text>
    </Block>
  );
};

export default Product_Card;
