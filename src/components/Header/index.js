import React from 'react';
import {Image, Pressable, StatusBar} from 'react-native';
import {Block, Text} from '@components';
import {theme} from '@theme';

const Header = ({
  iconLeft,
  iconRight,
  iconDif,
  leftPress,
  rightPress,
  difPress,
  title,
  style,
  iconStyle,
  titleStyle,
}) => {
  return (
    <Block
      row
      backgroundColor={theme.colors.primary}
      paddingHorizontal={8}
      justifyCenter
      alignCenter
      style={{marginTop: StatusBar.currentHeight, height: 60, ...style}}>
      {iconLeft && (
        <Pressable onPress={leftPress}>
          <Image
            source={iconLeft}
            style={{marginHorizontal: 2, width: 27, height: 27, ...iconStyle}}
            resizeMode="contain"
          />
        </Pressable>
      )}
      <Block flex alignCenter justifyCenter>
        <Text
          style={{
            fontSize: 20,
            color: theme.colors.white,
            fontWeight: 'bold',
            ...titleStyle,
          }}>
          {title}
        </Text>
      </Block>
      {iconDif && (
        <Pressable onPress={difPress}>
          <Image
            source={iconDif}
            style={{marginHorizontal: 5, width: 27, height: 27, ...iconStyle}}
            resizeMode="contain"
          />
        </Pressable>
      )}
      {iconRight && (
        <Pressable onPress={rightPress}>
          <Image
            source={iconRight}
            style={{marginHorizontal: 2, width: 27, height: 27, ...iconStyle}}
            resizeMode="contain"
          />
        </Pressable>
      )}
    </Block>
  );
};

export default Header;
