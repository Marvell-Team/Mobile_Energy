import React, {useState} from 'react';
import {
  ToastAndroid,
  ImageBackground,
  Dimensions,
  ScrollView,
  FlatList,
  Platform,
  UIManager,
  LayoutAnimation,
} from 'react-native';
import {Block, Text, Thumbnail, Button} from '@components';
import CommentCard from './card';
import {icons} from '@assets';
import styles from './style';
import {theme} from '@theme';
import {useNavigation} from '@react-navigation/native';
import {routes} from '@navigation/routes';
const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');
const data = [
  {
    id: 1,
    name: 'Nguyễn Hoài Bão',
    image:
      'https://vnn-imgs-f.vgcloud.vn/2019/10/08/17/samsung-se-bo-galaxy-fold-va-galaxy-note-de-ra-dong-flagship-moi-3.jpg',
    content: 'Sản phẩm này tốt như anh Nam z đẹp trai vô cùng còn thông nữa',
    currentime: '16 giờ trước',
  },
  {
    id: 1,
    name: 'Nguyễn Hoài Bão',
    image:
      'https://vnn-imgs-f.vgcloud.vn/2019/10/08/17/samsung-se-bo-galaxy-fold-va-galaxy-note-de-ra-dong-flagship-moi-3.jpg',
    content: 'Sản phẩm này tốt như anh Nam z đẹp trai vô cùng còn thông nữa',
    currentime: '16 giờ trước',
  },
  {
    id: 2,
    name: 'Nguyễn Hoài Bão',
    image: '',
    content: 'Sản phẩm này tốt như anh Nam z đẹp trai vô cùng còn thông nữa',
    currentime: '16 giờ trước',
  },
];
const DetailScreens = () => {
  const navigation = useNavigation();
  const [imageBG, setImageBG] = useState(
    'https://vnn-imgs-f.vgcloud.vn/2019/10/08/17/samsung-se-bo-galaxy-fold-va-galaxy-note-de-ra-dong-flagship-moi-3.jpg',
  );
  if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }
  const [isShow, setIsShow] = useState(false);
  return (
    <Block style={styles.container}>
      <ScrollView>
        {/* image header  */}
        <ImageBackground
          style={{flexDirection: 'row', width: width, height: height / 2.5}}
          source={{uri: imageBG}}>
          <Block margin={10} flex alignStart>
            <Thumbnail
              source={icons.back}
              onPress={() => navigation.navigate(routes.PROFILESCREENS)}
              style={{width: 30, height: 30}}
            />
          </Block>
          <Block margin={10} flex alignEnd>
            <Thumbnail source={icons.more} style={{width: 30, height: 30}} />
          </Block>
        </ImageBackground>
        {/* Body All */}
        <Block alignCenter style={styles.body}>
          {/* Body Name Product */}
          <Block row style={styles.bodyname}>
            <Block justifyCenter style={{flex: 3}}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                Xsm 64g. gold
              </Text>
              <Text style={{fontSize: 17, fontWeight: 'bold', color: 'red'}}>
                50000000 VND
              </Text>
              <Text style={{fontSize: 12}}>16 giờ trước</Text>
            </Block>
            <Block flex justifyCenter>
              <Button
                shadow
                title="Yêu thích"
                style={styles.button}
                titleStyle={{
                  fontSize: 16,
                  color: theme.colors.primary,
                }}
              />
            </Block>
          </Block>
          <Block
            width={width / 1.1}
            style={{borderWidth: 0.3, borderColor: theme.colors.dark}}
          />
          {/* Body User */}
          <Block row alignCenter style={styles.bodyuser}>
            <Block style={{flex: 1.5}}>
              <Thumbnail source={icons.user} style={{width: 50, height: 50}} />
            </Block>
            <Block style={{flex: 4, marginLeft: 10}}>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                Huynh Nhat Ban
              </Text>
              <Text style={{fontSize: 10}}>Dang hoat dong</Text>
            </Block>
            <Block justifyCenter style={{flex: 2}}>
              <Button
                shadow
                title="Yêu thích"
                style={styles.button}
                titleStyle={{
                  fontSize: 16,
                  color: theme.colors.primary,
                }}
              />
            </Block>
          </Block>
          {/* Body Detail product */}
          <Block
            width={width / 1.1}
            style={{borderWidth: 0.3, borderColor: theme.colors.dark}}
          />
          {isShow ? (
            <Block style={styles.detailbody}>
              <Text size={16}>
                Bán điện thoại số lượng lớn, bảo hành trọn đời, 1 mua không trả
                lại. Pin xài 5 phút bảo đảm không hết.
              </Text>
              <Text size={16} color="blue">
                Liên hệ ngay: 088828***
              </Text>
              <Text size={16}>Hãng: Apple</Text>
              <Text size={16}>Tình trạng: Cũ</Text>
              <Text size={16}>Dung lượng: 69 GB</Text>
              <Text size={16}>Số lượng: 96</Text>
            </Block>
          ) : null}
          <Button
            shadow
            title={isShow ? 'Rút gọn' : 'Xem thêm'}
            style={styles.button}
            titleStyle={{fontSize: 16, color: theme.colors.primary}}
            onPress={() => {
              LayoutAnimation.easeInEaseOut();
              setIsShow(!isShow);
            }}
          />
          {/* Comment body */}
          <Block marginBottom={5} style={styles.commentbody}>
            <Block alignCenter row marginBottom={10}>
              <Text flex size={18} style={{fontWeight: 'bold'}}>
                Bình luận
              </Text>
              <Text flex size={14} right style={{fontStyle: 'italic'}}>
                100 đánh giá - 3,6/5
              </Text>
            </Block>
            <Block
              width={width / 1.1}
              style={{
                borderWidth: 0.3,
                borderColor: theme.colors.dark,
              }}
            />
            <FlatList
              ItemSeparatorComponent={
                Platform.OS !== 'android' &&
                (({highlighted}) => (
                  <Block
                    style={[styles.separator, highlighted && {marginLeft: 0}]}
                  />
                ))
              }
              data={data}
              renderItem={({item, index}) => <CommentCard item={item} />}
            />
          </Block>
        </Block>
      </ScrollView>
      <Block row width={width} height={height / 14} backgroundColor={'blue'}>
        <Block
          justifyCenter
          alignCenter
          style={{flex: 2, backgroundColor: '#144C6E'}}>
          <Thumbnail source={icons.wchat} style={{width: 25, height: 25}} />
        </Block>
        <Block
          justifyCenter
          alignCenter
          style={{flex: 2, backgroundColor: '#186999'}}>
          <Thumbnail source={icons.cart} style={{width: 25, height: 25}} />
        </Block>
        <Block
          style={{flex: 3, backgroundColor: theme.colors.primary}}
          justifyCenter
          alignCenter>
          <Text
            color={theme.colors.white}
            size={17}
            style={{fontWeight: 'bold'}}>
            Mua hàng
          </Text>
        </Block>
      </Block>
    </Block>
  );
};

export default DetailScreens;
