import React from 'react';
import {StyleSheet, Dimensions, Text, View} from 'react-native';
import {Thumbnail} from '@components';
import {theme} from '@theme';
import {getSize} from '@utils/responsive';

const CategoryItem = ({item}) => {
  const onPress = () => {
    console.log('ITEM >>>>>> ', item.id);
  };
  return (
    <Thumbnail
      source={item.img_category}
      onPress={() => onPress()}
      style={styles.boxImg}
      imageStyle={styles.img_category}
      resizeMode="contain"
    />
  );
};

export default CategoryItem;

const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');
const styles = StyleSheet.create({
  boxImg: {
    width: width / 6.1,
    height: width / 6.1,
    borderRadius: 8,
    backgroundColor: theme.colors.thirdy,
    padding: getSize.s(5),
    justifyContent: 'center',
    alignItems: 'center',
    margin: getSize.s(5),
  },
  img_category: {
    width: '70%',
    height: '70%',
  },
});
