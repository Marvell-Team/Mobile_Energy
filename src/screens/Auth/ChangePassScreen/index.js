import React, {useState, useEffect} from 'react';
import {TouchableOpacity, ToastAndroid} from 'react-native';
import {icons} from '@assets';
import {Block, Header, Text, TextInput} from '@components';
import {useNavigation} from '@react-navigation/native';
import {routes} from '@navigation/routes';
import {StyleSheet, Dimensions} from 'react-native';
import {theme} from '@theme';
import {getSize, height, width} from '@utils/responsive';
import {connect} from 'react-redux';
import {resetPasswordAction} from '@redux/actions';
import Loading from '@components/Loadding/Loading';
import {useData} from 'config/config';
import {RESET_PASSWORD_NULL} from '@redux/actions/ForgotPasswordAction';

const mapStateToProps = state => {
  return {
    error: state.resetPasswordReducer ? state.resetPasswordReducer.error : null,
    data: state.resetPasswordReducer ? state.resetPasswordReducer.data : null,
    loadding: state.resetPasswordReducer
      ? state.resetPasswordReducer.loadding
      : null,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    resetPasswordAction: input => {
      dispatch(resetPasswordAction(input));
    },
    resetNull: () => {
      dispatch({type: RESET_PASSWORD_NULL});
    },
  };
};

const ForgotPassword = ({
  data,
  resetPasswordAction,
  loadding,
  error,
  resetNull,
}) => {
  const navigation = useNavigation();
  const [newPassword, setNewPassword] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword2, setNewPassword2] = useState('');
  const [id_user, setId_user] = useState(useData.id);
  const [textError, setTextError] = useState('');
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (data !== null) {
      resetNull();
      navigation.goBack();
    }
  }, [data]);

  useEffect(() => {
    setLoading(loadding);
  }, [loadding]);

  useEffect(() => {
    if (error !== null) {
      resetNull();
      console.log(error);
      ToastAndroid.show('Lỗi: ' + error, ToastAndroid.LONG);
    }
  }, [error]);

  const checkForgotPassword = () => {
    var validPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (newPassword === '' && newPassword2 === '' && oldPassword === '') {
      setTextError('Vui lòng nhập đầy đủ thông tin!');
    } else if (newPassword === '') {
      setTextError('Mật khẩu không được để trống!');
    } else if (newPassword2 === '') {
      setTextError('Mật khẩu không được để trống!');
    } else if (!validPassword.test(newPassword)) {
      setTextError(
        'Mật khẩu tối thiểu 8 ký tự, ít nhất một chữ cái và một số!',
      );
    } else if (newPassword != newPassword2) {
      setTextError('Mật khẩu phải trùng nhau!');
    } else {
      let input = {
        id_user: id_user,
        oldPass: newPassword,
        newPassWord: newPassword,
      };
      resetPasswordAction(input);
      setTextError('');
    }
  };

  return (
    <Block flex styles={styles.container}>
      <Header
        title={'Đổi mật khẩu'}
        iconLeft={icons.back}
        iconStyle={{width: getSize.s(24), height: getSize.v(24)}}
        leftPress={() => navigation.goBack()}
      />

      <Block style={styles.viewEdit} padding={getSize.m(16)}>
        <Block style={styles.viewText}>
          <Text size={getSize.m(15)} style={styles.txtTitle}>
            Mật khẩu cũ
          </Text>
          <TextInput
            issecure
            fontSize={getSize.m(18)}
            style={styles.textInput}
            onChangeText={setOldPassword}
            placeholder="Nhập mật khẩu cũ"
            autoFocus={true}
          />
        </Block>
        <Block style={styles.viewText}>
          <Text size={getSize.m(15)} style={styles.txtTitle}>
            Mật khẩu mới
          </Text>
          <TextInput
            issecure
            fontSize={getSize.m(18)}
            style={styles.textInput}
            onChangeText={setNewPassword}
            placeholder="Nhập mật khẩu mới"
            autoFocus={true}
          />
        </Block>

        <Block style={styles.viewText}>
          <Text size={getSize.m(15)} style={styles.txtTitle}>
            Nhập lại mật khẩu mới
          </Text>
          <TextInput
            issecure
            fontSize={getSize.m(18)}
            style={styles.textInput}
            onChangeText={setNewPassword2}
            placeholder="Nhập lại mật khẩu mới"
          />
        </Block>

        <Text style={styles.txtError}>{textError}</Text>
      </Block>
      <Block style={styles.viewBtn}>
        <Block style={styles.viewButtonGetOTP}>
          <TouchableOpacity
            onPress={() => {
              checkForgotPassword();
            }}
            style={styles.button}>
            <Text
              style={{
                color: theme.colors.white,
                fontSize: getSize.m(18),
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
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    position: 'relative',
  },

  viewEdit: {
    backgroundColor: theme.colors.white,
  },

  viewText: {
    backgroundColor: theme.colors.white,
    height: getSize.m(80),
  },

  textInput: {
    height: getSize.m(48),
    backgroundColor: theme.colors.white,
    borderColor: '#FFF',
    alignSelf: 'flex-start',
    borderBottomColor: theme.colors.gray,
    borderRadius: 0,
    borderWidth: 0.5,
    paddingLeft: 0,
  },

  txtTitle: {
    color: theme.colors.black,
    marginLeft: getSize.m(4),
  },

  viewButtonGetOTP: {
    height: getSize.v(52),
    width: '92%',
    backgroundColor: theme.colors.primary,
    justifyContent: 'center',
    position: 'absolute',
    alignSelf: 'center',
    alignItems: 'center',
    bottom: getSize.m(16),
    borderRadius: 6,
  },

  txtButtonGetOTP: {
    fontSize: getSize.m(18),
    fontWeight: 'bold',
    backgroundColor: theme.colors.blue,
  },

  txtError: {
    fontSize: getSize.m(16),
    textAlign: 'center',
    color: theme.colors.red,
  },

  viewBtn: {
    flex: 1,
    justifyContent: 'flex-end',
  },

  button: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
  },
});
