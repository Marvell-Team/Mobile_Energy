import React from 'react';
import {Pressable, Image} from 'react-native';
import {icons} from '@assets';
import {theme} from '@theme';
import {Block, Text} from '@components';

const FlatCard = ({item, onPress, style, morePress}) => {
  const {avt, name, time, content} = item;
  return (
    <Pressable onPress={onPress}>
      <Block
        flex
        row
        marginTop={5}
        paddingHorizontal={5}
        paddingVertical={8}
        borderBottomWidth={0.5}
        borderColor={theme.colors.lightGray}
        style={style}>
        <Block width={70} height={70} marginHorizontal={8}>
          <Image
            source={{uri: avt}}
            style={{borderRadius: 35, width: '100%', height: '100%'}}
          />
        </Block>

        <Block flex column justifyCenter>
          <Text style={{fontSize: 17, fontWeight: 'bold'}}>{name}</Text>
          <Text style={{fontSize: 14, color: theme.colors.black}}>
            {content}
          </Text>
          <Block row paddingVertical={3}>
            <Image
              source={icons.history}
              style={{width: 18, height: 18, marginRight: 5}}
            />
            <Text style={{fontSize: 14, color: theme.colors.placeholder}}>
              {time}
            </Text>
          </Block>
        </Block>
        <Pressable onPress={morePress}>
          <Image
            source={icons.graymore}
            style={{
              width: 20,
              height: 20,
              marginHorizontal: 8,
              marginVertical: 5,
            }}
          />
        </Pressable>
      </Block>
    </Pressable>
  );
};

export default FlatCard;
