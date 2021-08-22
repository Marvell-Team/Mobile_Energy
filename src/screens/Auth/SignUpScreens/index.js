import React, {useState} from 'react';
import {View, ToastAndroid, ScrollView} from 'react-native';
import styles from './style';
import {icons} from '@assets';
import {useNavigation} from '@react-navigation/native';
import {routes} from '../../../navigation/routes.js';
import {
  Block,
  Button,
  Text,
  TextInput,
  Thumbnail,
  PressText,
} from '@components';
const SignUpScreens = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  return (
    <Block flex paddingHorizontal={12} style={styles.container}>
      <ScrollView indicatorStyle={'white'}>
        <Thumbnail source={icons.logo} style={styles.thumb} />
        <Text style={styles.txtTitle}>TẠO TÀI KHOẢN</Text>

        <TextInput
          iconleft={icons.user}
          placeholder="Nhập họ tên..."
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
          title="ĐÃ CÓ TÀI KHOẢN? ĐĂNG NHẬP"
          onPress={() => navigation.navigate(routes.LOGINSCREENS)}
          style={styles.signUp}
          titleStyle={styles.txtSignUp}
        />
      </ScrollView>
    </Block>
  );
};

export default SignUpScreens;
