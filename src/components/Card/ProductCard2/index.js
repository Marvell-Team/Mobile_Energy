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
import {routes} from '@navigation/routes';
import {formatCurrency} from '@utils/utils';
import styles from './style';

const Product_Card = ({item}) => {
  
  return (
    <Block style={styles.container} margin={8} borderRadius={8}>
      <Block style={styles.viewContent}>
        <Thumbnail
          source={{
            uri: item.id_image.nameImage[0]
          }}
          style={styles.viewContentImage}
          resizeMode={'stretch'}
        />
      </Block>

      <Block justifyCenter paddingHorizontal={8}>
        <Text style={styles.txtTitle}>{item.nameProduct}</Text>
        <Block flex row marginBottom={8} marginTop={4}>
          <Text style={styles.txtPrice}>
            {formatCurrency(item.price_product)}
          </Text>
        </Block>
      </Block>
    </Block>
  );
};

export default Product_Card;
