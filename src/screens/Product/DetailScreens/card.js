import React, {useState} from 'react';
import {Dimensions} from 'react-native';
import {Block, Text, Thumbnail, Button} from '@components';
import {icons} from '@assets';
import styles from './style';
import {theme} from '@theme';
const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');
const CommentCard = ({item}) => {
  const [avt, SetAvt] = useState(
    'https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.6435-9/175359232_743984532948789_2282696370552683691_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=nPu3EZJ2n6gAX_3ZAHq&_nc_ht=scontent.fsgn2-1.fna&oh=383ed6b6ae6ac02e637258ae5a896c49&oe=6145D9DA',
  );

  return (
    <Block>
      <Block marginBottom={10} row style={styles.card}>
        <Block alignStart style={{flex: 1}}>
          <Thumbnail
            source={{uri: avt}}
            imageStyle={styles.avt}
            style={styles.viewAvt}></Thumbnail>
        </Block>
        <Block style={{flex: 3}}>
          <Text size={16} style={{fontWeight: 'bold'}}>
            {item.name}
          </Text>
          <Text size={14}>{item.content}</Text>
          {item.image == '' ? null : (
            <Thumbnail
              source={{uri: item.image}}
              style={{width: 90, height: 70}}></Thumbnail>
          )}
          <Text size={10}>{item.currentime}</Text>
        </Block>
        <Block justifyStart style={{flex: 1}}>
          <Thumbnail
            source={icons.graymore}
            style={{width: 20, height: 20, alignSelf: 'flex-end'}}></Thumbnail>
        </Block>
      </Block>
      <Block
        width={width / 1.1}
        style={{borderWidth: 0.3, borderColor: theme.colors.dark}}></Block>
    </Block>
  );
};

export default CommentCard;
