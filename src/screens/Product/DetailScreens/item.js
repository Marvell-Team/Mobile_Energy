import React, {useState} from 'react';
import {
  ToastAndroid,
  Image,
  ScrollView,
  Dimensions,
  ImageBackground,
} from 'react-native';
import {Block, Text, Thumbnail, Button, Header} from '@components';
import {icons} from '@assets';
import styles from './style';
import {theme} from '@theme';
const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');
const CommentListItem = props => {
  return (
    <Block>
      <Block row style={{width: width, margin: 10}}>
        <Thumbnail
          source={icons.user}
          style={{width: width / 10, height: width / 10, marginRight: 10,marginTop:2}}
        />

        <Block style={{flex: 6}}>
          <Text style={{fontSize: 16, fontWeight: 'bold'}}>
            {props.item.name}
          </Text>
          <Text>{props.item.content}</Text>
          {props.item.image != null ? (
            <Thumbnail
              source={{uri: props.item.image}}
              style={{margin: 10, width: width / 3.5, height: width / 5}}
            />
          ) : null}
          <Text style={{fontSize: 10}}>{props.item.currenttime} gio truoc</Text>
        </Block>
        <Block justifyStart alignCenter flex>
          <Thumbnail
            source={icons.graymore}
            style={{
              marginRight: 10,
              width: width / 20,
              height: width / 20,
            }}
          />
        </Block>
      </Block>
      <Block style={{borderBottomWidth: 0.5, borderColor: theme.colors.dark}} />
    </Block>
  );
};
export default CommentListItem;
