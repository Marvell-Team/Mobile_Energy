import React from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
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
import {Header} from '@components';
import {theme} from '@theme';
import EditProfile from './EditProfile';
import {useNavigation} from '@react-navigation/native';

const ProfileScreens = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userInfoSection}>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <Avatar.Image
            source={{
              uri: '',
            }}
            size={80}
          />
          <View style={{marginLeft: 20}}>
            <Title
              style={[
                styles.title,
                {
                  marginTop: 30,
                  marginBottom: 5,
                },
              ]}>
              Trường An
            </Title>
          </View>
        </View>
      </View>

      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Icon name="map-marker-radius" color="white" size={24} />
          <Text style={{color: 'white', marginLeft: 20, fontSize: 18}}>
            TPHCM,VietNam{' '}
          </Text>
        </View>
        <View style={styles.row}>
          <Icon name="phone" color="white" size={24} />
          <Text style={{color: 'white', marginLeft: 20, fontSize: 18}}>
            0929447829
          </Text>
        </View>
        <View style={styles.row}>
          <Icon name="email" color="white" size={24} />
          <Text style={{color: 'white', marginLeft: 20, fontSize: 18}}>
            hotruongan19992017@gmail.com
          </Text>
        </View>
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
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="heart-outline" color="#FF6347" size={30} />
            <Text style={styles.menuItemText}>Yêu Thích</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
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
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="cog-outline" color="#FF6347" size={30} />
            <Text style={styles.menuItemText}>Cài Đặt</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="key-outline" color="#FF6347" size={30} />
            <Text style={styles.menuItemText}>Đổi Mật Khẩu</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple
          onPress={() => {
            navigation.navigate(routes.EDITPROFILE);
          }}>
          <View style={styles.menuItem}>
            <Icon name="logout" color="#FF6347" size={30} />
            <Text style={styles.menuItemText}>Đăng Xuất</Text>
          </View>
        </TouchableRipple>
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

export default ProfileScreens;
