import React, {useEffect, useState} from 'react';
import {View, ToastAndroid, ScrollView, StatusBar} from 'react-native';
import styles from './style';
import {icons} from '@assets';
import {routes} from '../../../navigation/routes.js';
import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';
import {loginAction} from '../../../redux/actions';
import {
  Block,
  Button,
  Text,
  TextInput,
  Thumbnail,
  PressText,
} from '@components';
const mapStateToProps = state => {
  return {
    error: state.loginReducers.error,
    data: state.loginReducers.data,
    loadding: state.loginReducers.loadding,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loginAction: (user, password) => {
      dispatch(loginAction(user, password));
    },
  };
};
const LoginScreens = ({loginAction, data}) => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const _login = () => {
    navigation.navigate(routes.BOTTOMTABBAR);
  };

  useEffect(() => {
    if (data !== null) {
      _login();
    }
  }, [data]);

  return (
    <Block flex paddingHorizontal={12} style={styles.container}>
      <ScrollView indicatorStyle={'white'}>
        <Thumbnail source={icons.logo} style={styles.thumb} />
        <Text style={styles.txtTitle}>ĐĂNG NHẬP</Text>
        <TextInput
          iconleft={icons.email}
          placeholder="Nhập email..."
          onChangeText={text => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          iconleft={icons.pass}
          issecure
          placeholder="Nhập password..."
          onChangeText={text => setPassword(text)}
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
          onPress={() => {
            loginAction(email, password);
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
          onPress={() => navigation.navigate(routes.SIGNUPSCREENS)}
          style={styles.signUp}
          titleStyle={styles.txtSignUp}
        />
      </ScrollView>
    </Block>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreens);
