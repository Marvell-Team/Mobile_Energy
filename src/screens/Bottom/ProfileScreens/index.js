import React, {useState} from 'react';
import {ToastAndroid, ScrollView} from 'react-native';
import {icons} from '@assets';
import {
  Block,
  Header,
  Thumbnail,
  Button,
  Text,
  ProductFlatList,
} from '@components';
import styles from './style';
import style from '../HomeScreens/style';

const products = [
  {
    id: 1,
    nameProduct: 'IPorn 12 Pro',
    imgProduct:
      'https://product.hstatic.net/1000283534/product/xanhduong_2_e0efee9d9cf547f19e74827b04059af0.png',
    price: '29,999,000',
    time: '26 phút trước',
  },
  {
    id: 2,
    nameProduct: 'IPorn 12 Pro',
    imgProduct:
      'https://product.hstatic.net/1000283534/product/xanhduong_2_e0efee9d9cf547f19e74827b04059af0.png',
    price: '29,999,000',
    time: '26 phút trước',
  },
  {
    id: 3,
    nameProduct: 'IPorn 12 Pro',
    imgProduct:
      'https://product.hstatic.net/1000283534/product/xanhduong_2_e0efee9d9cf547f19e74827b04059af0.png',
    price: '29,999,000',
    time: '26 phút trước',
  },
  {
    id: 4,
    nameProduct: 'IPorn 12 Pro',
    imgProduct:
      'https://product.hstatic.net/1000283534/product/xanhduong_2_e0efee9d9cf547f19e74827b04059af0.png',
    price: '29,999,000',
    time: '26 phút trước',
  },
  {
    id: 5,
    nameProduct: 'IPorn 12 Pro',
    imgProduct:
      'https://product.hstatic.net/1000283534/product/xanhduong_2_e0efee9d9cf547f19e74827b04059af0.png',
    price: '29,999,000',
    time: '26 phút trước',
  },
  {
    id: 6,
    nameProduct: 'IPorn 12 Pro',
    imgProduct:
      'https://product.hstatic.net/1000283534/product/xanhduong_2_e0efee9d9cf547f19e74827b04059af0.png',
    price: '29,999,000',
    time: '26 phút trước',
  },
];
const ProfileScreens = () => {
  const [avt, SetAvt] = useState(
    'https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.6435-9/175359232_743984532948789_2282696370552683691_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=nPu3EZJ2n6gAX_3ZAHq&_nc_ht=scontent.fsgn2-1.fna&oh=383ed6b6ae6ac02e637258ae5a896c49&oe=6145D9DA',
  );
  const [data, setData] = useState(products);
  console.log(data);
  return (
    <Block flex style={styles.container}>
      <Header
        iconLeft={icons.back}
        title="Trang cá nhân"
        iconRight={icons.more}
      />
      <Block paddingHorizontal={8} style={styles.viewInfo}>
        <Block paddingTop={5} row>
          <Thumbnail
            source={{uri: avt}}
            imageStyle={styles.avt}
            style={styles.viewAvt}
          />
          <Block justifyCenter paddingHorizontal={8}>
            <Text style={styles.txtUsn}>HoaiBao0512</Text>
            <Text style={styles.txtEmail}>hoaibao0512@gmail.com</Text>
            <Text style={styles.txtPhone}>0696969696</Text>
          </Block>
          <Block>
            <Button
              title="Thay đổi"
              style={styles.changeBtn}
              titleStyle={styles.txtBtn}
            />
          </Block>
        </Block>
      </Block>
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
      <Text style={styles.titlePost}>Bài đăng</Text>
      <ProductFlatList data={data} />
    </Block>
  );
};

export default ProfileScreens;
