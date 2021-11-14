import React, {useState, useEffect} from 'react';
import {
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {Block, Text, Thumbnail, Button, Header, TextInput} from '@components';
import {icons} from '@assets';
import {theme} from '@theme';
import {useNavigation, useRoute} from '@react-navigation/native';
import {getSize} from '@utils/responsive';
import { routes } from '@navigation/routes';
import { formatCurrency } from '@utils/utils';
const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');
const Product_Card = ({item}) => {
    const img =(str)=>{
      if(str===undefined){
        return null;
      }
      else{
        const newstr=str.replace(/localhost/i, '10.0.2.2');
        return newstr
      }
    }
    return (
      <Block
        borderWidth={1}
        borderColor="#D3D3D3"
        borderRadius={5}
        width={width/2.3}
        margin={10}>
        <Thumbnail
          source={{
            uri: img(item.id_image.nameImage[0])
          }}
          style={{width: '100%', height: getSize.s(183)}}
          resizeMode={'stretch'}
        />
        <Block paddingVertical={getSize.m(4)} paddingHorizontal={getSize.m(5)}>
        <Text size={getSize.s(18)} color={'#333333'}>
          {item.nameProduct}
        </Text>
        <Text size={getSize.m(16)} color={theme.colors.red} style={{fontWeight: 'bold'}}>
          {formatCurrency(item.price_product)}
        </Text>
        </Block>
      </Block>
    );
  };
  
export default Product_Card;
