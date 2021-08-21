import React, {useState} from 'react';
import {Block, Button, Text, TextInput, Thumbnail} from '@components';
import {View} from 'react-native';
import styles from './style';
import {icons} from '@assets';
const HomeScreens = () => {
  return (
    <Block flex paddingHorizontal={12} style={styles.container}>
      <Text style={styles.titleTxt}>HomeScreens</Text>
    </Block>
  );
};

export default HomeScreens;
