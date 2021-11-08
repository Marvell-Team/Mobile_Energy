import React from 'react';
import {Pressable, Image} from 'react-native';
import {icons} from '@assets';
import {theme} from '@theme';
import {Block, Text, Header, Thumbnail} from '@components';
import styles from './style';

const FlatCard = ({item, onPress}) => {
  const {isSeen, title, time, image, content} = item;
  return (
    <Pressable onPress={onPress}>
      <Block flex column margin={8} backgroundColor={theme.colors.white} borderRadius={8}> 
        <Block flex row>
          <Block style={styles.view}>

            <Thumbnail
              style={styles.viewIcon}
              source={icons.dbell}
              imageStyle={styles.inViewIcon}
              resizeMode='contain'
               />
              
            <Thumbnail
              style={styles.viewIsSeen}
              source={ {uri: ''}}
              imageStyle={styles.inViewIsSeen} />

          </Block>
          
          <Block flex column justifyCenter>
            <Text style={styles.txtTitle}> {title} </Text>
            <Text style={styles.txtTime}> {time} </Text>
          </Block>

          </Block>
          <Block flex row alignCenter style={styles.viewContent}>
                
            <Image
              style={styles.viewContentImage}
              source={ {uri: image}}/>

            <Text style={styles.txtContent}> {content} </Text>

          </Block>

        </Block>

    </Pressable>
  );
};

export default FlatCard;
