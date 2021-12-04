import React, {useEffect, useState} from 'react';
import {View, ToastAndroid, ScrollView} from 'react-native';
import styles from './style';
import {icons} from '@assets';
import {useNavigation} from '@react-navigation/native';
import {routes} from '../../../navigation/routes.js';
import {connect} from 'react-redux';
import {signUpAction} from '../../../redux/actions';
import Loading from '@components/Loadding/Loading';

import {
  Block,
  Button,
  Text,
  TextInput,
  Thumbnail,
  PressText,
  Header,
} from '@components';
import { theme } from '@theme';
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
const SignUpScreens = ({signUpAction, data,loadding, error}) => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [username, setUsername] = useState('');
    // tao useState Loadding
    const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (data !== null) {
      //alert(data);
    }
  }, [data]);

  useEffect(() => {
    if(error !== null){
      console.log(error);
    }
  }, [error])
  
    //Loadding trong screen
    useEffect(() => {
      setLoading(loadding)
    }, [loadding])

    const checkRegister = () => {

      var validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      var validPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  
      if (email === '' || password === '' || username === '' || password2 === '') {
        ToastAndroid.show('Vui lòng nhập đầy đủ thông tin!', ToastAndroid.SHORT);
      } 
      else if (!validRegex.test(email)){
        ToastAndroid.show('Email không hợp lệ!', ToastAndroid.SHORT);
      }
      else if (!validPassword.test(password)) {
        ToastAndroid.show('Mật khẩu tối thiểu 8 ký tự, ít nhất một chữ cái và một số!', ToastAndroid.SHORT);
      } 
      else if (password != password2) {
        ToastAndroid.show('Mật khẩu phải trùng nhau!', ToastAndroid.SHORT);
      } 
      else {
        let user = {
          email_user: email,
          pwd_user: password,
          name_user: username,
        };
        signUpAction(user);
        ToastAndroid.show('Đăng ký ok rồi đó, zô!', ToastAndroid.SHORT);
       }
    };

    return (
      <>
      <Header
          title="Đăng ký"
          iconLeft={icons.back}
          leftPress={() =>
            navigation.goBack()
          }
        />
      <Block flex paddingHorizontal={16} style={styles.container}>
  
        <Thumbnail
          source={icons.logoo}
          style={styles.viewLogo}
          imageStyle={styles.viewInLogo} />
  
        <Block style={styles.viewFormLogin}>
  
          <Text style={styles.txtTitle}>Tạo tài khoản mới</Text>
  
          <TextInput
            iconleft={icons.userlg}
            placeholder="Nhập họ tên..."
            placeholderTextColor={theme.colors.grayText}
            onChangeText={text => setUsername(text)}
            style={styles.txtInput}
            iconStyle={{width: 24, height: 24, tintColor: theme.colors.grayText}} />
  
          <TextInput
            iconleft={icons.email}
            placeholder="Nhập email..."
            placeholderTextColor={theme.colors.grayText}
            onChangeText={text => setEmail(text)}
            style={styles.txtInput}
            iconStyle={{width: 24, height: 24, tintColor: theme.colors.grayText}} 
            keyboardType='email-address'/>
  
          <TextInput
            iconleft={icons.psdlg}
            issecure
            placeholder="Nhập password..."
            placeholderTextColor={theme.colors.grayText}
            onChangeText={text => setPassword(text)}
            style={styles.txtInput}
            iconStyle={{width: 24, height: 24, tintColor: theme.colors.grayText}} />
  
          <TextInput
            iconleft={icons.psdlg}
            issecure
            placeholder="Nhập lại password..."
            placeholderTextColor={theme.colors.grayText}
            onChangeText={text => setPassword2(text)}
            style={styles.txtInput}
            iconStyle={{width: 24, height: 24, tintColor: theme.colors.grayText}} />

          <Button
            shadow
            title="ĐĂNG KÝ"
            onPress={() => {
              checkRegister();
            }}
            style={styles.viewButtonRegister}
            titleStyle={styles.txtButtonRegister} />
  
        </Block>
  
        <Block style={styles.viewSignIn}>
  
          <PressText
            title="ĐÃ CÓ TÀI KHOẢN? ĐĂNG NHẬP"
            onPress={() => navigation.navigate(routes.LOGINSCREENS)}
            titleStyle={styles.txtSignIn} />
  
        </Block>
        {/* Tao cai nay ms hien Loadding */}
            {loading && 
        (<Loading/>)}
      </Block>
      </>
    );
};
export default connect(mapStateToProps, mapDispatchToProps)(SignUpScreens);
