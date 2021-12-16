import React, {useEffect, useState} from 'react';
import {View, ToastAndroid, ScrollView, TouchableOpacity} from 'react-native';
import styles from './style';
import {icons} from '@assets';
import {useNavigation} from '@react-navigation/native';
import {routes} from '../../../navigation/routes.js';
import {connect} from 'react-redux';
import Loading from '@components/Loadding/Loading';
import {
  Block,
  Button,
  Text,
  TextInput,
  Thumbnail,
  Header,
  PressText,
} from '@components';
import {theme} from '@theme';
import {getForgotPasswordByEmailAction} from '@redux/actions';
import {getSize} from '@utils/responsive';

const mapStateToProps = state => {
  return {
    error: state.getForgotPasswordByEmailReducer
      ? state.getForgotPasswordByEmailReducer.error
      : null,
    data1: state.getForgotPasswordByEmailReducer
      ? state.getForgotPasswordByEmailReducer.data
      : null,
    loadding: state.getForgotPasswordByEmailReducer
      ? state.getForgotPasswordByEmailReducer.loadding
      : null,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getForgotPasswordByEmailAction: number => {
      dispatch(getForgotPasswordByEmailAction(number));
    },
  };
};

const Email = ({
  data1,
  getForgotPasswordByEmailAction,
  loadding,
  error,
}) => {
  const navigation = useNavigation();
  const [textError, setTextError] = useState('');
  const [Email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   if (Email !== null) {
  //     getForgotPasswordByEmailAction(Email);
  //     //console.log(getForgotPasswordByEmailAction(Email))
  //     //console.log('33333333333333>>>>>>>>>>>>>>> getForgotPasswordByEmailAction: sid')
  //   }
  // }, [getForgotPasswordByEmailAction]);

  useEffect(() => {
    if (data1 !== null) {
      //setData2(data1.data);s
      // console.log(data1);
      // console.log(
      //   '----------->>>>>>>>>>>>>> Email useEffect --------->>>>>>>>>>>',
      // );
    }
  }, [data1]);

  useEffect(() => {
    setLoading(loadding);
  }, [loadding]);

  useEffect(() => {
    if (error !== null) {
      console.log(error);
      ToastAndroid.show('Lỗi: ' + error, ToastAndroid.SHORT);
    }
  }, [error]);

  const checkEmail = () => {
    var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (Email === '') {
      setTextError('Email không được bỏ trống!');
    } else if (!validRegex.test(Email)) {
      setTextError('Email không đúng định dạng!');
    } else {
      getForgotPasswordByEmailAction(Email);
      navigation.navigate(routes.SENDOTPSCREEN, {Email: Email});
      setTextError('');
    }
  };

  return (
    <>
      <Header iconLeft={icons.back} leftPress={() => navigation.goBack()} />
      <Block flex padding={getSize.m(16)} style={styles.container}>
        <Block style={styles.viewForm}>
          <Text style={styles.txtTitle}>Quên mật khẩu?</Text>
          <Text paddingTop={getSize.m(4)} style={styles.txt}>
            Vui lòng nhập địa chỉ Email để lấy lại mật khẩu
          </Text>
          <Block>
            <Text paddingTop={getSize.m(40)} style={styles.txtNumberPhone}>
              Email
            </Text>
            <Block>
              <TextInput
                style={styles.txtInput}
                value={Email}
                onChangeText={text => setEmail(text)}
                keyboardType="email-address"
                fontSize={getSize.m(16)}
                autoFocus={true}
              />
            </Block>
          </Block>
          <Block style={styles.viewFormResend} row paddingTop={32}></Block>
          <Text style={styles.txtError}>{textError}</Text>
        </Block>
        <Block style={styles.viewBtn}>
          <Block style={styles.viewButtonGetOTP}>
            <TouchableOpacity
              onPress={() => {
                checkEmail();
              }}
              style={styles.button}>
              <Text
                style={{
                  color: theme.colors.white,
                  fontSize: getSize.m(18),
                  fontWeight: 'bold',
                }}>
                Nhận mã OTP
              </Text>
            </TouchableOpacity>
          </Block>
        </Block>
        {/*Có cái này mới hiện loading!!!*/}
        {loading && <Loading />}
      </Block>
    </>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(Email);
