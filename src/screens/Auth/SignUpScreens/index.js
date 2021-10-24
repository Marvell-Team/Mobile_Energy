import React, {useEffect, useState} from 'react';
import {View, ToastAndroid, ScrollView} from 'react-native';
import styles from './style';
import {icons} from '@assets';
import {useNavigation} from '@react-navigation/native';
import {routes} from '../../../navigation/routes.js';
import {connect} from 'react-redux';
import {signUpAction} from '../../../redux/actions';
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
    error: state.signupReducer.error,
    data: state.signupReducer.data,
    loadding: state.signupReducer.loadding,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signUpAction: user => {
      dispatch(signUpAction(user));
    },
  };
};
const SignUpScreens = ({signUpAction, data}) => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  useEffect(() => {
    if (data !== null) {
      alert(data);
    }
  }, [data]);
  return (
    <Block flex paddingHorizontal={12} style={styles.container}>
      <ScrollView indicatorStyle={'white'}>
        <Thumbnail source={icons.logo} style={styles.thumb} />
        <Text style={styles.txtTitle}>TẠO TÀI KHOẢN</Text>

        <TextInput
          iconleft={icons.user}
          placeholder="Nhập họ tên..."
          onChangeText={text => setUsername(text)}
          style={styles.input}
        />
        <TextInput
          iconleft={icons.email}
          placeholder="Nhập email..."
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
        <Button
          shadow
          title="ĐĂNG KÍ"
          onPressOut={() => {
            let user = {
              email_user: email,
              pwd_user: password,
              name_user: username,
            };
            signUpAction(user);
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
export default connect(mapStateToProps, mapDispatchToProps)(SignUpScreens);
