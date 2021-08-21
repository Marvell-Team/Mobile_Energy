import React, {useState} from 'react';
import {View, ToastAndroid, ScrollView} from 'react-native';
import styles from './style';
import {icons} from '@assets';
import {
  Block,
  Button,
  Text,
  TextInput,
  Thumbnail,
  PressText,
} from '@components';
const LoginScreens = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <Block flex paddingHorizontal={12} style={styles.container}>
      <ScrollView indicatorStyle={'white'}>
        <Thumbnail source={icons.logo} style={styles.thumb} />
        <Text style={styles.txtTitle}>WELCOME BACK</Text>
        <TextInput
          iconleft={icons.user}
          placeholder="Nhập email..."
          setValue={setEmail}
          style={styles.input}
        />
        <TextInput
          iconleft={icons.pass}
          issecure
          placeholder="Nhập password..."
          setValue={setPassword}
          style={styles.input}
        />
        <PressText
          title="Quên mật khẩu?"
          onPressOut={() => {
            console.log('Quên mật khẩu'),
              ToastAndroid.show('Quên mật khẩu', ToastAndroid.SHORT);
          }}
          style={styles.forgot}
          titleStyle={styles.forgotTxt}
        />
        <Button
          shadow
          title="ĐĂNG NHẬP"
          onPressOut={() => {
            console.log('Hello'),
              ToastAndroid.show('Hello', ToastAndroid.SHORT);
          }}
          style={styles.button}
          titleStyle={styles.textBtn}
        />
        <Text style={styles.txtOR}>OR</Text>
        <Block row alignCenter style={styles.viewDif}>
          <Thumbnail
            source={icons.facebook}
            onPress={() => console.log('Facebook')}
            style={styles.thumb1}
          />
          <Thumbnail
            source={icons.twitter}
            onPress={() => console.log('Twitter')}
            style={styles.thumb1}
          />
          <Thumbnail
            source={icons.google}
            onPress={() => console.log('Google')}
            style={styles.thumb1}
          />
        </Block>
        <PressText
          title="DON'T HAVE ACCOUNT?"
          onPressOut={() => {
            console.log('Sign Up'),
              ToastAndroid.show('Sign Up', ToastAndroid.SHORT);
          }}
          style={styles.signUp}
          titleStyle={styles.txtSignUp}
        />
      </ScrollView>
    </Block>
  );
};

export default LoginScreens;
