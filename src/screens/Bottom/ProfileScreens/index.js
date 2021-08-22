import React, {useState} from 'react';
import {ToastAndroid, ScrollView, StatusBar} from 'react-native';
import {icons} from '@assets';
import {Block, Header, Thumbnail, Button, Text} from '@components';
import styles from './style';
import style from '../HomeScreens/style';
const ProfileScreens = () => {
  const [avt, SetAvt] = useState(
    'https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.6435-9/175359232_743984532948789_2282696370552683691_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=nPu3EZJ2n6gAX_3ZAHq&_nc_ht=scontent.fsgn2-1.fna&oh=383ed6b6ae6ac02e637258ae5a896c49&oe=6145D9DA',
  );
  return (
    <Block flex style={styles.container}>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor={'#46B3F6'}
      />
      <Header iconLeft={icons.back} iconRight={icons.more} />
      <Block paddingTop={5} paddingHorizontal={8} style={styles.viewInfo}>
        <Block row>
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
          <Block justifyCenter>
            <Button title="Thay đổi" style={styles.changeBtn} />
          </Block>
        </Block>
        <Block row alignCenter justifyCenter style={styles.viewMiddle}>
          <Block marginHorizontal={12} alignCenter>
            <Text style={styles.numBer}>1,234</Text>
            <Text style={styles.category}>Bài đăng</Text>
          </Block>
          <Block style={styles.line} />
          <Block marginHorizontal={12} alignCenter>
            <Text style={styles.numBer}>6,789</Text>
            <Text style={styles.category}>Hàng bán ra</Text>
          </Block>
          <Block style={styles.line} />
          <Block marginHorizontal={12} alignCenter>
            <Text style={styles.numBer}>3.6</Text>
            <Text style={styles.category}>Đánh giá</Text>
          </Block>
        </Block>
      </Block>
    </Block>
  );
};

export default ProfileScreens;
