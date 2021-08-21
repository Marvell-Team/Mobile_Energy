import React from 'react';
import {ToastAndroid} from 'react-native';
import {icons} from '@assets';
import {Block, Header} from '@components';
import styles from './style';
const ProfileScreens = () => {
  return (
    <Block flex>
      <Header
        iconLeft={icons.back}
        leftPress={() => ToastAndroid.show('Back', ToastAndroid.SHORT)}
        title="Profile"
        iconDif={icons.wchat}
        difPress={() => ToastAndroid.show('Messenger', ToastAndroid.SHORT)}
        iconRight={icons.more}
        rightPress={() => ToastAndroid.show('More', ToastAndroid.SHORT)}
      />
    </Block>
  );
};

export default ProfileScreens;
