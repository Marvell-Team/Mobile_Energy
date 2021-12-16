import React, {useState, useEffect} from 'react';
import {TouchableOpacity} from 'react-native';
import {icons} from '@assets';
import {Block, Header, Text, TextInput} from '@components';
import styles from './style';
import {useNavigation} from '@react-navigation/native';
import {routes} from '@navigation/routes';
import { theme } from '@theme';
import { getSize } from '@utils/responsive';
import { connect } from 'react-redux';
import { useData } from 'config/config';

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
  };
};

const ChangePassScreen = ({data, resetPasswordAction, error, loadding}) => {
  const navigation = useNavigation();
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newPassword2, setNewPassword2] = useState('');
  const [textError, setTextError] = useState('');

  useEffect(() => {
    if (useData.token !== null && useData.id !== null) {
      console.log(useData.id);
      console.log(
        '=================>>>>>>>> USEDATA.ID <<<<<<<<<<<================',
      );
    }
  }, []);

  const checkChangePass = () => {
    var validPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (oldPassword === '' && newPassword === '' && newPassword2 === '') {
      setTextError('Vui lòng nhập đầy đủ thông tin!');
    } 

    else if (oldPassword === '') {
      setTextError('Vui lòng nhập mật khẩu cũ!');
    } 
    else if (newPassword === '') {
      setTextError('Vui lòng nhập mật khẩu mới!');
    } 
    else if (newPassword2 === '') {
      setTextError('Vui lòng nhập mật khẩu mới!');
    } 
    else if (newPassword === '') {
      setTextError('Mật khẩu mới không được để trống!');
    } else if (newPassword2 === '') {
      setTextError('Mật khẩu mới không được để trống!');
    } else if (!validPassword.test(newPassword)) {
      setTextError(
        'Mật khẩu tối thiểu 8 ký tự, ít nhất một chữ cái và một số!',
      );
    } else if (newPassword != newPassword2) {
      setTextError('Mật khẩu phải trùng nhau!');
    } else {
      let input = {
        id_user: id_user,
        newPassWord: newPassword,
      };
      resetPasswordAction(input);
      navigation.navigate(routes.LOGINSCREENS);
      setTextError('');
    }
  };


  return (
    <Block flex styles={styles.container}>
      <Header
        iconLeft={icons.back}
        iconStyle={{width: getSize.s(24), height: getSize.s(24)}}
        leftPress={() =>
          navigation.navigate(routes.BOTTOMTABBAR, {
            screen: routes.PROFILESCREENS,
          })
        }
        title={'Đổi mật khẩu'}
      />

      <Block style={styles.viewEdit} padding={16}>
        <Block style={styles.viewText}>
          <Text size={getSize.m(15)} style={styles.txtTitle}>
            Mật khẩu hiện tại
          </Text>
          <TextInput
            issecure
            fontSize={getSize.m(18)}
            style={styles.textInput}
            onChangeText={setOldPassword}
            placeholder="Nhập mật khẩu"
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
            onChangeText={setNewPassword}
            placeholder="Nhập lại mật khẩu mới"
          />
        </Block>

        <Text style={styles.txtError}>{textError}</Text>

      </Block>

      <Block style={styles.viewBtn}>
          <Block style={styles.viewButtonGetOTP}>
            <TouchableOpacity
              onPress={() => {
                checkChangePass();
              }}
              style={styles.button}>
              <Text
                style={{
                  color: theme.colors.white,
                  fontSize: getSize.m(18),
                  fontWeight: 'bold',
                }}>
                Đổi mật khẩu
              </Text>
            </TouchableOpacity>
          </Block>
        </Block>
    </Block>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ChangePassScreen);
