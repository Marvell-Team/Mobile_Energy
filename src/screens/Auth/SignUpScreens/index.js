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
const SignUpScreens = ({signUpAction, data,loadding}) => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
    // tao useState Loadding
    const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (data !== null) {
      alert(data);
    }
  }, [data]);

    //Loadding trong screen
    useEffect(() => {
      setLoading(loadding)
    }, [loadding])

    return (
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
            iconStyle={{width: 24, height: 24, tintColor: theme.colors.grayText}} />
  
          <TextInput
            iconleft={icons.pass}
            issecure
            placeholder="Nhập password..."
            placeholderTextColor={theme.colors.grayText}
            onChangeText={text => setPassword(text)}
            style={styles.txtInput}
            iconStyle={{width: 24, height: 24, tintColor: theme.colors.grayText}} />
  
          <Button
            shadow
            title="ĐĂNG KÝ"
            onPressOut={() => {
              let user = {
                email_user: email,
                pwd_user: password,
                name_user: username,
              };
              signUpAction(user);
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
    );
};
export default connect(mapStateToProps, mapDispatchToProps)(SignUpScreens);
