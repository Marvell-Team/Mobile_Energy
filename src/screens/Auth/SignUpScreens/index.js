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
const SignUpScreens = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  return (
    <Block flex paddingHorizontal={12} style={styles.container}>
      <ScrollView indicatorStyle={'white'}>
        <Thumbnail source={icons.logo} style={styles.thumb} />
        <Text style={styles.txtTitle}>Tạo tài khoản</Text>
        
        <TextInput
          iconleft={icons.user}
          placeholder="Nhập họ tên"
          setValue={setUsername}
          style={styles.input}
        />
        <TextInput
          iconleft={icons.email}
          placeholder="Nhập email..."
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
        <Button
          shadow
          title="ĐĂNG KÍ"
          onPressOut={() => {
            console.log('Hello'),
              ToastAndroid.show('Hello', ToastAndroid.SHORT);
          }}
          style={styles.button}
          titleStyle={styles.textBtn}
        />
       
        <PressText
          title="ĐÃ CÓ TÀI KHOẢN? ĐĂNG NHẬP NGAY!"
          onPressOut={() => {
            console.log('Sign In'),
              ToastAndroid.show('Sign In', ToastAndroid.SHORT);
          }}
          style={styles.signUp}
          titleStyle={styles.txtSignUp}
        />
      </ScrollView>
    </Block>
  );
};

export default SignUpScreens;
