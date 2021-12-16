import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  ToastAndroid,
  ScrollView,
  TouchableOpacity,
  Text,
  TextInput,
} from 'react-native';
import styles from './style';
import {icons} from '@assets';
import {useNavigation, useRoute} from '@react-navigation/native';
import {routes} from '../../../navigation/routes.js';
import {connect} from 'react-redux';
import Loading from '@components/Loadding/Loading';
import {Block, Button, Thumbnail, Header, PressText} from '@components';
import {theme} from '@theme';
import {
  getForgotPasswordByEmailAction,
  verifyUserByCodeNumberAction,
} from '@redux/actions';
import {getSize} from '@utils/responsive';

const mapStateToProps = state => {
  console.log(state.verifyUserByCodeNumberReducer.data);
  console.log(
    '----------->>>>>>>>>>>>>> SEND OTP useEffect --------->>>>>>>>>>>',
  );
  return {
    error: state.verifyUserByCodeNumberReducer
      ? state.verifyUserByCodeNumberReducer.error
      : null,
    data: state.verifyUserByCodeNumberReducer
      ? state.verifyUserByCodeNumberReducer.data
      : null,
    loadding: state.verifyUserByCodeNumberReducer
      ? state.verifyUserByCodeNumberReducer.loadding
      : null,

    errorEmail: state.getForgotPasswordByEmailReducer
      ? state.getForgotPasswordByEmailReducer.error
      : null,
    dataEmail: state.getForgotPasswordByEmailReducer
      ? state.getForgotPasswordByEmailReducer.data
      : null,
    loaddingEmail: state.getForgotPasswordByEmailReducer
      ? state.getForgotPasswordByEmailReducer.loadding
      : null,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    verifyUserByCodeNumberAction: input => {
      dispatch(verifyUserByCodeNumberAction(input));
    },
    getForgotPasswordByEmailAction: number => {
      dispatch(getForgotPasswordByEmailAction(number));
    },
  };
};

const SendOTP = ({
  data,
  dataEmail,
  verifyUserByCodeNumberAction,
  getForgotPasswordByEmailAction,
  loadding,
  error,
  errorEmail,
}) => {
  const navigation = useNavigation();
  const [textError, setTextError] = useState('');
  let clockCall = null;
  let textInput = useRef(null);
  const lengthInput = 6;
  const defaultCountdown = 60;
  const [internalValue, setInternalValue] = useState('');
  const [countdown, setCountdown] = useState(defaultCountdown);
  const [enableResend, setEnableResend] = useState(false);
  const route = useRoute();
  const {Email} = route.params;
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (data !== null) {
      console.log(data);
      console.log(
        '----------->>>>>>>>>>>>>> DATA SEND OTP useEffect --------->>>>>>>>>>>',
      );
    }
  }, [data]);

  useEffect(() => {
    if (Email !== null) {
      //setEmail(Email)
      console.log(Email);
      console.log(
        '----------->>>>>>>>>>>>>> DATA PHONE NUMBER useEffect --------->>>>>>>>>>>',
      );
    }
  }, [dataEmail]);

  const onChangeText = value => {
    setInternalValue(value);
  };

  useEffect(() => {
    setLoading(loadding);
  }, [loadding]);

  useEffect(() => {
    if (error !== null) {
      console.log(error);
      ToastAndroid.show('Lỗi: ' + error, ToastAndroid.SHORT);
    }
  }, [error]);

  useEffect(() => {
    if (errorEmail !== null) {
      console.log(errorEmail);
      ToastAndroid.show('Lỗi: ' + errorEmail, ToastAndroid.SHORT);
    }
  }, [errorEmail]);

  useEffect(() => {
    clockCall = setInterval(() => {
      decrementClock();
    }, 1000);
    return () => {
      clearInterval(clockCall);
    };
  });

  const decrementClock = () => {
    if (countdown === 0) {
      setEnableResend(true);
      setCountdown(0);
      clearInterval(clockCall);
    } else {
      setCountdown(countdown - 1);
    }
  };

  useEffect(() => {
    textInput.focus();
  }, []);

  const onResendOTP = () => {
    if (enableResend) {
      setCountdown(defaultCountdown);
      setEnableResend(false);
      clearInterval(clockCall);
      clockCall = setInterval(() => {
        decrementClock();
      }, 1000);
      getForgotPasswordByEmailAction(Email);
    }
  };

  const checkSendOTP = () => {
    if (internalValue === '') {
      setTextError('Mã OTP không được bỏ trống!');
    } else {
      let input = {
        code: internalValue,
        email: Email,
      };
      verifyUserByCodeNumberAction(input);
      navigation.navigate(routes.FORGOTPASSWORDSCREEN);
      setTextError('');
    }
  };

  return (
    <>
      <Header iconLeft={icons.back} leftPress={() => navigation.goBack()} />
      <Block flex padding={getSize.m(16)} style={styles.container}>
        <Block style={styles.viewForm}>
          <Text style={styles.txtTitle}>Mã đã được gửi đến Email của bạn!</Text>
          <Text
            paddingTop={getSize.m(4)}
            paddingBottom={getSize.m(40)}
            style={styles.txt}>
            Vui lòng nhập mã code đã được gửi trong email
          </Text>

          <TextInput
            ref={input => (textInput = input)}
            onChangeText={onChangeText}
            value={internalValue}
            maxLength={lengthInput}
            keyboardType="numeric"
            style={{width: 0, height: 0}}
          />
          <Block row style={styles.viewInput}>
            {Array(lengthInput)
              .fill()
              .map((data, index) => (
                <Block
                  style={[
                    styles.viewInInput,
                    {
                      borderBottomColor:
                        index === internalValue.length
                          ? theme.colors.primary
                          : theme.colors.greyText,
                    },
                  ]}>
                  <Text
                    style={styles.txtInInput}
                    onPress={() => textInput.focus()}>
                    {internalValue && internalValue.length > 0
                      ? internalValue[index]
                      : ''}
                  </Text>
                </Block>
              ))}
          </Block>

          <Block style={styles.viewFormResend} row paddingTop={getSize.m(40)}>
            <Block style={styles.viewResendOTP}>
              <Text
                onPress={() => onResendOTP()}
                style={
                  ([styles.txtResendOTP],
                  {
                    color: enableResend ? theme.colors.primary : '#969593',
                  })
                }>
                Gửi lại mã OTP({countdown})
              </Text>
            </Block>
          </Block>
          <Text style={styles.txtError}>{textError}</Text>
        </Block>
        <Block style={styles.viewBtn}>
          <Block style={styles.viewButtonGetOTP}>
            <TouchableOpacity
              onPress={() => {
                checkSendOTP();
              }}
              style={styles.button}>
              <Text
                style={{
                  color: theme.colors.white,
                  fontSize: 18,
                  fontWeight: 'bold',
                }}>
                Đổi mật khẩu mới
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
export default connect(mapStateToProps, mapDispatchToProps)(SendOTP);
