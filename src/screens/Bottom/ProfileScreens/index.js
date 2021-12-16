import React, {useEffect, useState} from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
  Image,
} from 'react-native';
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
import {Header, Thumbnail, Block} from '@components';
import {theme} from '@theme';
import EditProfile from './EditProfile';
import {useNavigation} from '@react-navigation/native';
import {getSize, height, width} from '@utils/responsive';
import {useData, token} from 'config/config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {CommonActions} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useSelector, useDispatch} from 'react-redux';
import {getUserByID, logoutAction} from '@redux/actions';
import {connect} from 'react-redux';
import Loading from '@components/Loadding/Loading';
import {icons} from '@assets';
import {getFavoriteApi} from '@redux/api/favorite';
import {getFavoriteAction} from '@redux/actions/FavoriteAction';
const mapStateToProps = state => {
  return {
    error: state.getOneUserReducer ? state.getOneUserReducer.error : null,
    data: state.getOneUserReducer ? state.getOneUserReducer.data : null,
    loadding: state.getOneUserReducer ? state.getOneUserReducer.loadding : null,
    //loading
    loadding: state.getOneUserReducer.loadding,
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
const ProfileScreens = ({logoutAction, data, error, getUserByID, loadding}) => {
  // tao useState Loadding
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();
  const [checktoken, setChecktoken] = useState(null);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState(null);
  const [email, setEmail] = useState('');
  const [url, setUrl] = useState('');
  //Loadding trong screen
  useEffect(() => {
    setLoading(loadding);
  }, [loadding]);

  useEffect(() => {
    if (data !== null) {
      setName(data.data.name_user);
      setEmail(data.data.email_user);
      setPhone(data.data.phone_user);
      setAddress(data.data.address_user);
      setUrl(data.data.avt_user);
      useData['address'] = data.data.address_user;
      useData['name'] = data.data.name_user;
      useData['birthday'] = data.data.born_day;
      useData['gender'] = data.data.gender_user;
      useData['avatar'] = data.data.avt_user;
      useData['phone'] = data.data.phone_user;
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

  useEffect(() => {
    if (error !== null) {
      console.log(error);
      ToastAndroid.show('Lỗi: ' + error, ToastAndroid.SHORT);
    }
  }, [error]);

  return (
    <Block style={styles.container}>
      <View style={styles.header}>
        {checktoken === null ? (
          <View
            style={{
              width: '100%',
              alignItems: 'flex-end',
              justifyContent: 'center',
              paddingVertical: getSize.m(20),
              flexDirection: 'row',
              marginTop: getSize.m(24),
              backgroundColor: theme.colors.primary,
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
                navigation.navigate(routes.SIGNUPSCREENS);
              }}
              style={[
                styles.button,
                {width: width / 3, alignItems: 'flex-start'},
              ]}>
              <Text style={styles.textbtn}>Đăng ký</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(routes.EDITPROFILE);
              }}
              style={{
                flexDirection: 'row',
                marginTop: getSize.m(24),
                backgroundColor: theme.colors.primary,
                width: '100%',
              }}>
              <View style={styles.userInfoSection}>
                <View
                  style={{flexDirection: 'column', marginTop: getSize.m(8)}}>
                  {url === '' ? (
                    <Image
                      source={icons.duser}
                      resizeMode="contain"
                      style={{
                        width: getSize.v(72),
                        height: getSize.v(72),
                        borderRadius: 50,
                        tintColor: theme.colors.white,
                      }}
                    />
                  ) : (
                    <Thumbnail
                      source={{
                        uri: url,
                      }}
                      imageStyle={{
                        width: getSize.v(72),
                        height: getSize.v(72),
                        borderRadius: 50,
                      }}
                    />
                  )}
                </View>
              </View>

              <View style={styles.userInfoSectionn}>
                <View
                  style={{
                    justifyContent: 'center',
                  }}>
                  <Text style={[styles.title]}>{name}</Text>
                </View>
                {/* <View style={styles.row}>
                      <Icon name="email" color="white" size={getSize.m(24)} />
                      <Text
                        style={{
                          color: 'white',
                          marginLeft: getSize.m(8),
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
                            marginLeft: getSize.m(8),
                            fontSize: getSize.m(18),
                          },
                          address !== '' ? null : {opacity: 0.5},
                        ]}>
                        {address !== '' ? address : 'Địa chỉ'}
                      </Text>
                    </View> */}
                <View style={styles.row}>
                  {/* <Icon name="phone" color="white" size={getSize.m(24)} /> */}
                  <Text
                    style={[
                      {
                        color: 'white',
                        //marginLeft: getSize.m(8),
                        fontSize: getSize.m(18),
                      },
                      email !== null ? null : {opacity: 0.5},
                    ]}>
                    {email !== null ? email : 'Email'}
                  </Text>
                </View>
              </View>
              <Block style={styles.iconedit}>
                <Image
                  source={icons.next}
                  style={{
                    width: 24,
                    height: 24,
                    tintColor: theme.colors.white,
                    marginRight: 8,
                  }}
                />
              </Block>
              {/* <View style={styles.iconedit}>

                </View> */}
            </TouchableOpacity>
          </View>
          /* <TouchableOpacity onPress={() =>{ navigation.navigate(routes.EDITPROFILE);}}>
              <MaterialIcons color={'white'} icon={} size={getSize.m(24)}/>
            </TouchableOpacity> */
        )}
      </View>

      {/* <View style={styles.infoBoxWrapper}>
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
      </View> */}

      <Block style={styles.menuWrapper}>
        <View
          style={{
            justifyContent: 'center',
          }}>
          <Title
            style={{
              color: theme.colors.blackText,
              fontSize: 20,
              paddingVertical: getSize.m(12),
              borderBottomWidth: 0.3,
              borderColor: theme.colors.greyTitle,
              marginHorizontal: getSize.m(20),
            }}>
            Thông tin
          </Title>
        </View>
        <TouchableRipple
          onPress={() => {
            console.log(useData.token, useData.id);
            navigation.navigate(routes.LIKELISTSCREEN);
          }}>
          <View style={styles.menuItem}>
            <Icon name="heart-outline" color="#46B3F6" size={30} />
            <Text style={styles.menuItemText}>Danh sách yêu thích</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple
          onPress={() => {
            getUserByID(useData.id);
          }}>
          <View style={styles.menuItem}>
            <Icon name="credit-card" color="#46B3F6" size={30} />
            <Text style={styles.menuItemText}>Thanh Toán</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple
          onPress={() => {
            navigation.navigate(routes.MYBILLSCREENS);
          }}>
          <View style={styles.menuItem}>
            <Icon name="history" color="#46B3F6" size={30} />
            <Text style={styles.menuItemText}>Đơn Hàng Của Tôi</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple
          onPress={() => {
            ToastAndroid.show('Chưa có hỗ trợ!', ToastAndroid.SHORT);
          }}>
          <View style={styles.menuItem}>
            <Icon name="account-check-outline" color="#46B3F6" size={30} />
            <Text style={styles.menuItemText}>Hỗ Trợ</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple
          onPress={() => {
            console.log(checktoken);
          }}>
          <View style={styles.menuItem}>
            <Icon name="cog-outline" color="#46B3F6" size={30} />
            <Text style={styles.menuItemText}>Cài Đặt</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple
          onPress={() => {
            navigation.navigate(routes.CHANGEPASSSCREEN);
          }}>
          <View style={styles.menuItem}>
            <Icon name="key-outline" color="#46B3F6" size={30} />
            <Text style={styles.menuItemText}>Đổi Mật Khẩu</Text>
          </View>
        </TouchableRipple>
        <TouchableOpacity
          onPress={async () => {
            await AsyncStorage.removeItem('token');
            useData['token'] = null;
            useData['id'] = null;
            logoutAction();
            setChecktoken(null);
            navigation.dispatch(
              CommonActions.reset({
                index: 1,
                routes: [
                  {
                    name: routes.BOTTOMTABBAR,
                  },
                ],
              }),
            );
          }}>
          <View style={styles.menuItem}>
            <Icon name="logout" color="#46B3F6" size={30} />
            <Text style={styles.menuItemText}>Đăng Xuất</Text>
          </View>
        </TouchableOpacity>
      </Block>

      {/* Tao cai nay ms hien Loadding */}
      {loading && <Loading />}
    </Block>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primary,
    position: 'relative',
  },
  iconedit: {
    backgroundColor: theme.colors.primary,
    justifyContent: 'center',
    position: 'absolute',
    height: '100%',
    right: 0,
  },
  userInfoSection: {
    backgroundColor: theme.colors.primary,
    paddingVertical: getSize.m(16),
    paddingHorizontal: getSize.m(16),
  },
  userInfoSectionn: {
    backgroundColor: theme.colors.primary,
    paddingVertical: getSize.m(0),
    paddingHorizontal: getSize.m(2),
    justifyContent: 'center',
  },
  header: {
    width: width,
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
    fontSize: getSize.m(20),
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
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    //backgroundColor: '#FFFAFA',
    paddingVertical: 8,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: getSize.m(20),
  },
  menuWrapper: {
    marginTop: 0,
    height: '100%',
    backgroundColor: theme.colors.white,
    borderTopLeftRadius: getSize.m(20),
    borderTopRightRadius: getSize.m(20),
    flex: 1,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: getSize.m(12),
    paddingHorizontal: getSize.m(20),
  },
  menuItemText: {
    color: theme.colors.blackText,
    marginLeft: getSize.m(20),
    fontSize: getSize.m(18),
    lineHeight: getSize.m(26),
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreens);
