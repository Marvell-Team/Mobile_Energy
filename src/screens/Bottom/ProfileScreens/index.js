import React, {useState} from 'react';
import {ToastAndroid, ScrollView, Pressable} from 'react-native';
import {icons} from '@assets';
import {
  Block,
  Header,
  Thumbnail,
  Button,
  Text,
  ProductFlatList,
  ProductGridList,
} from '@components';
import styles from './style';
import {theme} from '@theme';
import {useNavigation} from '@react-navigation/native';
import {routes} from '@navigation/routes';

const products = [
  {
    id: 1,
    nameProduct: 'IPorn 12',
    imgProduct:
      'https://image.thanhnien.vn/1024/uploaded/nthanhluan/2020_10_14/1_foyn.jpg',
    price: '29,999,000',
    time: '26 phút trước',
  },
  {
    id: 2,
    nameProduct: 'IPorn 12 Pro',
    imgProduct:
      'https://image.thanhnien.vn/1024/uploaded/nthanhluan/2020_10_14/1_foyn.jpg',
    price: '29,999,000',
    time: '26 phút trước',
  },
  {
    id: 3,
    nameProduct: 'IPorn 12 Pro',
    imgProduct:
      'https://image.thanhnien.vn/1024/uploaded/nthanhluan/2020_10_14/1_foyn.jpg',
    price: '29,999,000',
    time: '26 phút trước',
  },
  {
    id: 4,
    nameProduct: 'IPorn 12 Pro',
    imgProduct:
      'https://image.thanhnien.vn/1024/uploaded/nthanhluan/2020_10_14/1_foyn.jpg',
    price: '29,999,000',
    time: '26 phút trước',
  },
  {
    id: 5,
    nameProduct: 'IPorn 12 Pro',
    imgProduct:
      'https://image.thanhnien.vn/1024/uploaded/nthanhluan/2020_10_14/1_foyn.jpg',
    price: '29,999,000',
    time: '26 phút trước',
  },
  {
    id: 6,
    nameProduct: 'IPorn 12 Pro',
    imgProduct:
      'https://image.thanhnien.vn/1024/uploaded/nthanhluan/2020_10_14/1_foyn.jpg',
    price: '29,999,000',
    time: '26 phút trước',
  },
];

const ProfileScreens = () => {
  const navigation = useNavigation();
  const [avt, SetAvt] = useState(
    'https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.6435-9/175359232_743984532948789_2282696370552683691_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=nPu3EZJ2n6gAX_3ZAHq&_nc_ht=scontent.fsgn2-1.fna&oh=383ed6b6ae6ac02e637258ae5a896c49&oe=6145D9DA',
  );
  const [data, setData] = useState(products);
  const [isFlat, setFlat] = useState(true);
  // const ListProduct = () => {
  //   if (isFlat) {
  //     return <ProductFlatList data={data} />;
  //   } else {
  //     return <ProductGridList data={data} />;
  //   }
  // };
  console.log(data);
  return (
    <Block flex style={styles.container}>
      <Header iconRight={icons.more} />
      <Block paddingHorizontal={8} style={styles.viewInfo}>
        <Block paddingTop={12} marginHorizontal={12} row>
          <Block width={'30%'}>
            <Thumbnail
              source={{uri: avt}}
              imageStyle={styles.avt}
              style={styles.viewAvt}
            />
          </Block>
          <Block width={'50%'} justifyCenter paddingHorizontal={8}>
            <Text style={styles.txtUsn}>HoaiBao0512</Text>
            <Text style={styles.txtEmail}>hoaibao0512@gmail.com</Text>
            <Text style={styles.txtPhone}>0696969696</Text>
          </Block>
          <Block width={'20%'}>
            <Thumbnail
              onPress={() => navigation.navigate(routes.INFORMATIONSCREEN)}
              source={icons.edit}
              resizeMode={'contain'}
              style={styles.btnEdit}
              imageStyle={{tintColor: theme.colors.white}}
            />
          </Block>
        </Block>
      </Block>
      {/* View trắng chứa số lượng bài đăng, đã bán, đánh giá */}
      <Block row shadow alignCenter justifyCenter style={styles.viewMiddle}>
        <Block paddingHorizontal={12} alignCenter>
          <Text style={styles.numBer}>1,234</Text>
          <Text style={styles.category}>Bài đăng</Text>
        </Block>
        <Block style={styles.line} />
        <Block paddingHorizontal={12} alignCenter>
          <Text style={styles.numBer}>6,789</Text>
          <Text style={styles.category}>Đã bán</Text>
        </Block>
        <Block style={styles.line} />
        <Block paddingHorizontal={12} alignCenter>
          <Text style={styles.numBer}>3,6</Text>
          <Text style={styles.category}>Đánh giá</Text>
        </Block>
      </Block>
      {/* danh sách các bài đăng */}
      <Block row style={styles.viewPostTitle}>
        <Block width={'50%'}>
          <Text style={styles.titlePost}>Bài đăng</Text>
        </Block>
        <Block width={'50%'}>
          <Thumbnail
            onPress={() => setFlat(!isFlat)}
            source={icons.sort}
            resizeMode={'contain'}
            style={styles.btnSort}
            imageStyle={{tintColor: theme.colors.lightGray}}
          />
        </Block>
      </Block>
      {isFlat ? (
        <ProductFlatList data={data} />
      ) : (
        <ProductGridList data={data} />
      )}
    </Block>
  );
};

export default ProfileScreens;
