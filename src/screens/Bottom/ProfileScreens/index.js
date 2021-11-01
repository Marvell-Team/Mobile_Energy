import React, {useEffect, useState} from 'react';
import {View, SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';
import {routes} from '@navigation/routes';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ScrollView} from 'react-native-gesture-handler';
import {Header, Thumbnail} from '@components';
import {theme} from '@theme';
import EditProfile from './EditProfile';
import {useNavigation} from '@react-navigation/native';
import {getSize, height, width} from '@utils/responsive';
import {useData, token} from 'config/config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {CommonActions} from '@react-navigation/native';

import {useSelector, useDispatch} from 'react-redux';
import {getUserByID, logoutAction} from '@redux/actions';
import {connect} from 'react-redux';
import { icons } from '@assets';
const mapStateToProps = state => {
  return {
    error: state.getOneUserReducer ? state.getOneUserReducer.error : null,
    data: state.getOneUserReducer ? state.getOneUserReducer.data : null,
    loadding: state.getOneUserReducer ? state.getOneUserReducer.loadding : null,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logoutAction: () => {
      dispatch(logoutAction());
    },
    getUserByID: id => {
      dispatch(getUserByID(id));
    },
  };
};
const ProfileScreens = ({logoutAction, data, error, getUserByID}) => {
  const navigation = useNavigation();
  const [checktoken, setChecktoken] = useState(null);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState(null);
  const [email, setEmail] = useState('');
  useEffect(() => {
    if (data !== null) {
      setName(data.data.name_user);
      setEmail(data.data.email_user);
      setPhone(data.data.phone_user);
      setAddress(data.data.address_user);
    }
  }, [data]);
  useEffect(() => {
    if (useData.token !== null) {
      getUserByID(useData.id);
    }
  }, [getUserByID]);
  useEffect(() => {
    if (useData.token !== null) {
      console.log('token' + useData.token);
      setChecktoken(useData.token);
    }
  }, [useData.token]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        {checktoken === null ? (
          <View
            style={{
              width: '100%',
              height: '100%',
              alignItems: 'flex-end',
              justifyContent: 'center',
              paddingVertical: getSize.m(20),
              flexDirection: 'row',
            }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(routes.LOGINSCREENS);
              }}
              style={[
                styles.button,
                {width: width / 3, alignItems: 'flex-end'},
              ]}>
              <Text style={[styles.textbtn]}>Đăng nhập</Text>
            </TouchableOpacity>
            <View
              style={{
                paddingVertical: getSize.m(10),
                backgroundColor: theme.colors.white,
              }}>
              <Text style={styles.textbtn}>/</Text>
            </View>

            <TouchableOpacity
              onPress={() => {
                //navigation.navigate(routes.SIGNUPSCREENS);
                console.log(useData.token, useData.id);
              }}
              style={[
                styles.button,
                {width: width / 3, alignItems: 'flex-start'},
              ]}>
              <Text style={styles.textbtn}>Đăng ký</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={{flexDirection:'row'}}>
            <View style={{flex:9}}>
            <View style={styles.userInfoSection}>
              <View style={{flexDirection: 'row', marginTop: getSize.m(15)}}>
                <Avatar.Image
                  source={{
                    uri: '',
                  }}
                  size={getSize.s(80)}
                />
                <View
                  style={{marginLeft: getSize.m(15), justifyContent: 'center'}}>
                  <Title style={[styles.title]}>{name}</Title>
                </View>
              </View>
            </View>

            <View style={styles.userInfoSection}>
              <View style={styles.row}>
                <Icon name="email" color="white" size={getSize.m(24)} />
                <Text
                  style={{
                    color: 'white',
                    marginLeft: 20,
                    fontSize: getSize.m(18),
                  }}>
                  {email}
                </Text>
              </View>
              <View style={styles.row}>
                <Icon
                  name="map-marker-radius"
                  color="white"
                  size={getSize.m(24)}
                />
                <Text
                  style={[
                    {
                      color: 'white',
                      marginLeft: 20,
                      fontSize: getSize.m(18),
                    },
                    address !== '' ? null : {opacity: 0.5},
                  ]}>
                  {address !== '' ? address : 'Địa chỉ'}
                </Text>
              </View>
              <View style={styles.row}>
                <Icon name="phone" color="white" size={getSize.m(24)} />
                <Text
                  style={[
                    {
                      color: 'white',
                      marginLeft: 20,
                      fontSize: getSize.m(18),
                    },
                    phone !== null ? null : {opacity: 0.5},
                  ]}>
                  {phone !== null ? phone : 'Số điện thoại'}
                </Text>
              </View>
            </View>
            
            </View>
            <View style={{flex:1,justifyContent: 'center',alignItems:'center'}}>
            <Thumbnail source={icons.next} imageStyle={{width:getSize.s(30),height:getSize.s(30)}} />
            </View>
          </View>
        )}
      </View>

      <View style={styles.infoBoxWrapper}>
        <View
          style={[
            styles.infoBox,
            {
              borderRightColor: '#dddddd',
              borderRightWidth: 1,
            },
          ]}>
          <Title>140.000.000 VND</Title>
          <Caption>Ví Tiền</Caption>
        </View>
        <View style={styles.infoBox}>
          <Title>12</Title>
          <Caption>Đơn Hàng</Caption>
        </View>
      </View>

      <ScrollView style={styles.menuWrapper}>
        <TouchableRipple
          onPress={() => {
            console.log(useData.token, useData.id);
          }}>
          <View style={styles.menuItem}>
            <Icon name="heart-outline" color="#FF6347" size={30} />
            <Text style={styles.menuItemText}>Yêu Thích</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple
          onPress={() => {
            getUserByID(useData.id);
          }}>
          <View style={styles.menuItem}>
            <Icon name="credit-card" color="#FF6347" size={30} />
            <Text style={styles.menuItemText}>Thanh Toán</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="history" color="#FF6347" size={30} />
            <Text style={styles.menuItemText}>Lịch Sử Mua Hàng</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="account-check-outline" color="#FF6347" size={30} />
            <Text style={styles.menuItemText}>Hỗ Trợ</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple
          onPress={() => {
            console.log(checktoken);
          }}>
          <View style={styles.menuItem}>
            <Icon name="cog-outline" color="#FF6347" size={30} />
            <Text style={styles.menuItemText}>Cài Đặt</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple
          onPress={() => {
            navigation.navigate(routes.EDITPROFILE);
          }}>
          <View style={styles.menuItem}>
            <Icon name="key-outline" color="#FF6347" size={30} />
            <Text style={styles.menuItemText}>Đổi Mật Khẩu</Text>
          </View>
        </TouchableRipple>
        <TouchableOpacity
          onPress={async () => {
            await AsyncStorage.removeItem('token');
            useData['token'] = null;
            logoutAction();
            setChecktoken(null);
            navigation.navigate(routes.HOMESCREENS);
          }}>
          <View style={styles.menuItem}>
            <Icon name="logout" color="#FF6347" size={30} />
            <Text style={styles.menuItemText}>Đăng Xuất</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 20,
    backgroundColor: theme.colors.primary,
    paddingVertical: 10,
  },
  header: {
    width: width,
    height: getSize.v(240),
    backgroundColor: theme.colors.primary,
  },
  button: {
    paddingVertical: getSize.m(10),
    backgroundColor: theme.colors.white,
    paddingHorizontal: getSize.m(10),
  },
  textbtn: {
    fontWeight: 'bold',
    fontSize: getSize.m(18),
    color: theme.colors.primary,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
    color: 'white',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    backgroundColor: '#FFFAFA',
    paddingVertical: 8,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: '#FFFAFA',
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 26,
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreens);
