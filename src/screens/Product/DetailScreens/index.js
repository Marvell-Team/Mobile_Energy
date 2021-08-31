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
  Image,
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
  const [active, setActive] = useState(0);
  const [imageBG, setImageBG] = useState([
    'https://i.ytimg.com/vi/SbR0_YbVSbU/maxresdefault.jpg',
    'https://vnn-imgs-f.vgcloud.vn/2019/10/08/17/samsung-se-bo-galaxy-fold-va-galaxy-note-de-ra-dong-flagship-moi-3.jpg',
  ]);
  if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }
  const [isShow, setIsShow] = useState(false);

  const change = nativeEvent => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
    );
    if (slide !== active) {
      setActive(slide);
    }
  };
  return (
    <Block style={styles.container}>
      <ScrollView>
        {/* image header  */}
        <ScrollView
          onScroll={({nativeEvent}) => change(nativeEvent)}
          showsHorizontalScrollIndicator={false}
          horizontal={true}>
          {imageBG.map((item, index) => (
            <Image
              key={item}
              resizeMode="stretch"
              style={{flexDirection: 'row', width: width, height: height / 2.5}}
              source={{uri: item}}></Image>
          ))}
        </ScrollView>
        {/*header*/}
        {/* dot cho image */}
        <Block
          justifyCenter
          style={{
            flexDirection: 'row',
            width: width,
            height: height / 15,
            position: 'absolute',
            top: height / 3,
          }}>
          {imageBG.map((item, index) => (
            <Text
              style={active === index ? styles.dotActive : styles.dot}
              size={20}>
              ●
            </Text>
          ))}
        </Block>
        <Block
          style={{
            flexDirection: 'row',
            width: width,
            height: height / 15,
            position: 'absolute',
            top: 0,
          }}>
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
        </Block>

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
              <Block row alignCenter>
              <Text
              color={theme.colors.green}
              size={20} style={{marginTop:-3}}>
              ●
            </Text>
              <Text size={12}> Dang hoat dong</Text>
            </Block>
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
          <Block
            marginTop={10}
            marginBottom={15}
            width={width / 1.1}
            style={{borderWidth: 0.3, borderColor: theme.colors.dark}}
          />
          {/* duyet+ report */}
          <Block flex width={width / 1.1}>
            <Block row alignCenter style={{flex: 2}}>
              <Thumbnail
                marginRight={10}
                style={{flex: 1}}
                source={icons.safety}
                style={{width: 80, height: 80}}
              />
              <Block style={{flex: 3}}>
                <Text size={16}>
                  Sản phẩm đã đuọc kiểm duyệt .Nếu gắp vấn đề gì vui lòng báo
                  cáo tin đăng
                </Text>
              </Block>
            </Block>
            <Block flex>
              <Button
                style={{
                  alignSelf: 'center',
                  backgroundColor: 'white',
                  width: width / 2,
                  height: height / 29,
                  borderColor: theme.colors.dark,
                  borderWidth: 1,
                }}
                titleStyle={{fontSize: 18, fontWeight: 'bold', color: 'red'}}
                title="Báo cáo tin"></Button>
            </Block>
          </Block>
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
