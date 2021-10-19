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
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ScrollView} from 'react-native-gesture-handler';
import {Header} from '@components';
import {theme} from '@theme';

const ProfileScreens = () => {
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
        <TouchableRipple onPress={() => {}}>
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

// import React, {useState} from 'react';
// import {ToastAndroid, ScrollView, Pressable} from 'react-native';
// import {icons} from '@assets';
// import {
//   Block,
//   Header,
//   Thumbnail,
//   Button,
//   Text,
//   ProductFlatList,
//   ProductGridList,
// } from '@components';
// import styles from './style';
// import {theme} from '@theme';
// import {useNavigation} from '@react-navigation/native';
// import {routes} from '@navigation/routes';

// const products = [
//   {
//     id: 1,
//     nameProduct: 'IPorn 12',
//     imgProduct:
//       'https://image.thanhnien.vn/1024/uploaded/nthanhluan/2020_10_14/1_foyn.jpg',
//     price: '29,999,000',
//     time: '26 phút trước',
//   },
//   {
//     id: 2,
//     nameProduct: 'IPorn 12 Pro',
//     imgProduct:
//       'https://image.thanhnien.vn/1024/uploaded/nthanhluan/2020_10_14/1_foyn.jpg',
//     price: '29,999,000',
//     time: '26 phút trước',
//   },
//   {
//     id: 3,
//     nameProduct: 'IPorn 12 Pro',
//     imgProduct:
//       'https://image.thanhnien.vn/1024/uploaded/nthanhluan/2020_10_14/1_foyn.jpg',
//     price: '29,999,000',
//     time: '26 phút trước',
//   },
//   {
//     id: 4,
//     nameProduct: 'IPorn 12 Pro',
//     imgProduct:
//       'https://image.thanhnien.vn/1024/uploaded/nthanhluan/2020_10_14/1_foyn.jpg',
//     price: '29,999,000',
//     time: '26 phút trước',
//   },
//   {
//     id: 5,
//     nameProduct: 'IPorn 12 Pro',
//     imgProduct:
//       'https://image.thanhnien.vn/1024/uploaded/nthanhluan/2020_10_14/1_foyn.jpg',
//     price: '29,999,000',
//     time: '26 phút trước',
//   },
//   {
//     id: 6,
//     nameProduct: 'IPorn 12 Pro',
//     imgProduct:
//       'https://image.thanhnien.vn/1024/uploaded/nthanhluan/2020_10_14/1_foyn.jpg',
//     price: '29,999,000',
//     time: '26 phút trước',
//   },
// ];

// const ProfileScreens = () => {
//   const navigation = useNavigation();
//   const [avt, SetAvt] = useState(
//     'https://i.pinimg.com/originals/d9/b8/3a/d9b83aa1a08be3e46ebb47254db8cf75.jpg',
//   );
//   const [data, setData] = useState(products);
//   const [isFlat, setFlat] = useState(true);
//   // const ListProduct = () => {
//   //   if (isFlat) {
//   //     return <ProductFlatList data={data} />;
//   //   } else {
//   //     return <ProductGridList data={data} />;
//   //   }
//   // };
//   console.log(data);
//   return (
//     <Block flex style={styles.container}>
//       <Header iconRight={icons.more} rightPress={()=>navigation.navigate(routes.OPTIONSCREENS)}/>
//       <Block paddingHorizontal={8} style={styles.viewInfo}>
//         <Block paddingTop={12} marginHorizontal={12} row>
//           <Block width={'30%'}>
//             <Thumbnail
//               source={{uri: avt}}
//               imageStyle={styles.avt}
//               style={styles.viewAvt}
//             />
//           </Block>
//           <Block width={'50%'} justifyCenter paddingHorizontal={8}>
//             <Text style={styles.txtUsn}>HoaiBao0512</Text>
//             <Text style={styles.txtEmail}>hoaibao0512@gmail.com</Text>
//             <Text style={styles.txtPhone}>0696969696</Text>
//           </Block>
//           <Block width={'20%'}>
//             <Thumbnail
//               onPress={() => navigation.navigate(routes.INFORMATIONSCREEN)}
//               source={icons.edit}
//               resizeMode={'contain'}
//               style={styles.btnEdit}
//               imageStyle={{tintColor: theme.colors.white}}
//             />
//           </Block>
//         </Block>
//       </Block>
//       {/* View trắng chứa số lượng bài đăng, đã bán, đánh giá */}
//       <Block row shadow alignCenter justifyCenter style={styles.viewMiddle}>
//         <Block paddingHorizontal={12} alignCenter>
//           <Text style={styles.numBer}>1,234</Text>
//           <Text style={styles.category}>Sản phẩm</Text>
//         </Block>
//         <Block style={styles.line} />
//         <Block paddingHorizontal={12} alignCenter>
//           <Text style={styles.numBer}>6,789</Text>
//           <Text style={styles.category}>Đã bán</Text>
//         </Block>
//         <Block style={styles.line} />
//         <Block paddingHorizontal={12} alignCenter>
//           <Text style={styles.numBer}>3,6</Text>
//           <Text style={styles.category}>Đánh giá</Text>
//         </Block>
//       </Block>
//       {/* danh sách các bài đăng */}
//       <Block row style={styles.viewPostTitle}>
//         <Block width={'50%'}>
//           <Text style={styles.titlePost}>Sản phẩm</Text>
//         </Block>
//         <Block width={'50%'}>
//           <Thumbnail
//             onPress={() => setFlat(!isFlat)}
//             source={icons.sort}
//             resizeMode={'contain'}
//             style={styles.btnSort}
//             imageStyle={{tintColor: theme.colors.lightGray}}
//           />
//         </Block>
//       </Block>
//       {isFlat ? (
//         <ProductFlatList data={data} />
//       ) : (
//         <ProductGridList data={data} />
//       )}
//     </Block>
//   );
// };

// export default ProfileScreens;
