import React, {useState} from 'react';
import {ToastAndroid} from 'react-native';
import {Block, Text, Header, Thumbnail} from '@components';
import {icons} from '@assets';
import styles from './style';
import {theme} from '@theme';

const InformationScreen = () => {
  const [avt, SetAvt] = useState(
    'https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.6435-9/175359232_743984532948789_2282696370552683691_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=nPu3EZJ2n6gAX_3ZAHq&_nc_ht=scontent.fsgn2-1.fna&oh=383ed6b6ae6ac02e637258ae5a896c49&oe=6145D9DA',
  );
  return (
    <Block flex style={styles.container}>
      <Header
        iconLeft={icons.back}
        iconRight={icons.more}
        rightPress={() => ToastAndroid.show('more', ToastAndroid.SHORT)}
      />
      {/* View xanh chứa avatar */}
      <Block alignCenter style={styles.viewPrimary}>
        <Block style={styles.viewAvt}>
          <Thumbnail
            source={{uri: avt}}
            imageStyle={styles.avt}
            onPress={() => console.log('Edit')}
          />
          <Thumbnail
            source={icons.bpen}
            style={styles.viewEdit}
            imageStyle={styles.icEdit}
          />
        </Block>
        <Block style={styles.viewBorder} />
      </Block>
      {/* View trắng chứa thông tin user */}
      <Block style={styles.viewInfo}>
        {/* Tiêu đề và icon edit information */}
        <Block row paddingHorizontal={8}>
          <Block width={'50%'}>
            <Text style={styles.titleInfo}>Thông tin cá nhân</Text>
          </Block>
          <Block width={'50%'}>
            <Thumbnail
              onPress={() => console.log('edit infor')}
              source={icons.bpen}
              resizeMode={'contain'}
              style={styles.btnEditInfo}
              imageStyle={styles.icEditInfo}
            />
          </Block>
        </Block>
        {/* View chứa các box thông tin */}
        <Block marginVertical={16} paddingHorizontal={8}>
          {/* box name */}
          <Block shadow style={styles.boxInfo}>
            <Text style={styles.titleBox}>Họ tên</Text>
            <Text style={styles.contentBox}>Nguyễn Hoài Bão</Text>
          </Block>
          {/* box male */}
          <Block shadow style={styles.boxInfo}>
            <Text style={styles.titleBox}>Giới tính</Text>
            <Text style={styles.contentBox}>Khác</Text>
          </Block>
          {/* box date */}
          <Block shadow style={styles.boxInfo}>
            <Text style={styles.titleBox}>Ngày sinh</Text>
            <Text style={styles.contentBox}>6/9/2069</Text>
          </Block>
          {/* box phone */}
          <Block shadow style={styles.boxInfo}>
            <Text style={styles.titleBox}>Số điện thoại</Text>
            <Text style={styles.contentBox}>0696969696</Text>
          </Block>
          {/* box email */}
          <Block shadow style={styles.boxInfo}>
            <Text style={styles.titleBox}>Email</Text>
            <Text style={styles.contentBox}>hoaibao0512@gmail.com</Text>
          </Block>
          {/* box adress */}
          <Block shadow style={styles.boxInfo}>
            <Text style={styles.titleBox}>Địa chỉ</Text>
            <Text style={styles.contentBox}>
              CVPM Quang Trung, Quận 12, TP.HCM
            </Text>
          </Block>
        </Block>
      </Block>
    </Block>
  );
};

export default InformationScreen;
