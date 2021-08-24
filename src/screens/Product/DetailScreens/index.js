import React, {useState} from 'react';
import {
  ToastAndroid,
  Image,
  ScrollView,
  Dimensions,
  ImageBackground,
  FlatList
} from 'react-native';
import {Block, Text, Thumbnail, Button, Header} from '@components';
import {icons} from '@assets';
import styles from './style';
import {theme} from '@theme';
import CommentListItem from './item'
const data=[
  {
      id:1,
      name:'Huỳnh Nhật Bản',
      content:'Dien thoat xin do nhung dc cai la anh nam dep trai wa cho em xin info vs',
      image:'https://cdn01.dienmaycholon.vn/filewebdmclnew/public//userupload/images/dien%20thoai%20mong%20nhe%20Samsung%20Galaxy%20Fold.jpg',

      currenttime:10
  },
  {
      id:2,
      name:'Huỳnh Nhật Bản',
      content:'Dien thoat xin do nhung dc cai la anh nam dep trai wa',
      image:null,
      currenttime:13
  },
  {
      id:3,
      name:'Huỳnh Nhật Bản',
      content:'Dien thoat xin do nhung dc cai la anh nam dep trai wa',
      image:null,
      currenttime:16
  },
  {
    id:3,
    name:'Huỳnh Nhật Bản',
    content:'Dien thoat xin do nhung dc cai la anh nam dep trai wa',
    image:'https://cdn01.dienmaycholon.vn/filewebdmclnew/public//userupload/images/dien%20thoai%20mong%20nhe%20Samsung%20Galaxy%20Fold.jpg',
    currenttime:16
}
  ];
const DetailScreens = () => {
  const [isshow, setIsshow] = useState(false);
  const [image, setImage] = useState(
    'https://cdn01.dienmaycholon.vn/filewebdmclnew/public//userupload/images/dien%20thoai%20mong%20nhe%20Samsung%20Galaxy%20Fold.jpg',
  );
  return (
    <Block style={styles.container}>
    <ScrollView >
      <ImageBackground style={styles.image} source={{uri: image}}>
        <Block flex>
          <Thumbnail
            source={icons.back}
            style={{width: 27, height: 27, alignSelf: 'flex-start', margin: 10}}
          />
        </Block>
        <Block>
          <Thumbnail
            source={icons.more}
            style={{width: 27, height: 27, alignSelf: 'flex-end', margin: 10}}
          />
        </Block>
      </ImageBackground>
      <Block style={styles.body}>
        <Block alignCenter row style={styles.namebody}>
          <Block
            width="69.3%"
            alignSelf="flex-start"
            marginTop={15}
            marginLeft={15}>
            <Text fontType style={{fontSize: 18, fontWeight: 'bold'}}>
              XSM 64G Gold
            </Text>
            <Text fontType color={theme.colors.red} style={{fontSize: 14}}>
              500,000,000 VND
            </Text>
            <Text style={{fontSize: 10}}>26 phut trước</Text>
          </Block>
          <Button
            shadow
            titleStyle={{color: theme.colors.primary}}
            title="Yêu thích"
            style={styles.button}></Button>
        </Block>
        <Block alignCenter row style={styles.userbody}>
          <Thumbnail
            source={icons.user}
            marginLeft={15}
            style={styles.imageuser}
          />
          <Block width="50%" height="70%" paddingTop={10} margin={10}>
            <Text fontType style={{fontSize: 20, fontWeight: 'bold'}}>
              Huynh Nhat Ban
            </Text>
            <Text style={{fontSize: 10}}>26 phut trước</Text>
          </Block>
          <Button
            shadow
            titleStyle={{color: theme.colors.primary}}
            title="Xem Trang"
            style={styles.button}></Button>
        </Block>
        {isshow ? (
          <Block style={styles.detailbody}>
            <Text style={{fontSize: 16}}>
              Bán điện thoại số lượng lớn, bảo hành trọn đời, 1 mua không trả
              lại. Pin xài 5 phút bảo đảm không hết.
            </Text>
            <Text style={{fontSize: 16, color: theme.colors.blue}}>
              Liên hê ngay:0862509***
            </Text>
            <Text style={{fontSize: 16}}>Hãng:Apple</Text>
            <Text style={{fontSize: 16}}>Tình trạng:Cũ</Text>
            <Text style={{fontSize: 16}}>Dung lượng:8GB</Text>
            <Text style={{fontSize: 16, marginBottom: 10}}>Số lượng:100</Text>
            <Block
              style={{borderBottomWidth: 0.5, borderColor: theme.colors.dark}}
            />
          </Block>
        ) : null}
        <Block width={width} height={height / 15} justifyCenter alignCenter>
          <Button
            titleStyle={{color: theme.colors.primary}}
            shadow
            title={isshow ? 'Rút gọn' : 'Chi tiết'}
            style={{
              borderRadius: 20,
              width: width / 4,
              height: width / 12,
              backgroundColor: theme.colors.white,
              borderColor: theme.colors.primary,
              borderWidth: 2,
            }}
            onPress={() => setIsshow(!isshow)}></Button>
        </Block>
       
        <Block row alignCenter style={{width:width,height:height/25}}>
          <Text  flex style={{textAlign: 'left',marginLeft:10,fontSize:20,fontWeight:'bold'}}>Bình luận</Text>
          <Text  flex style={{textAlign: 'right',marginRight:10}}>100 đánh giá - 3.5/5</Text>
        </Block>
        <Block
          style={{borderBottomWidth: 0.5, borderColor: theme.colors.dark}}
        />
      </Block>
      <Block>
        <FlatList
        ItemSeparatorComponent={
          Platform.OS !== 'android' &&
          (({ highlighted }) => (
            <View
              style={[
                style.separator,
                highlighted && { marginLeft: 0 }
              ]}
            />
          ))
        }
        data={data}
        renderItem={({item,index}) =><CommentListItem item={item}/>}/>
      </Block>
    </ScrollView>
    <Block width={width} row height={height/13} >
       <Block flex justifyCenter alignCenter style={{backgroundColor:'#144C6E'}}>
         <Thumbnail source={icons.wchat} style={{width:30,height:30}}/>
       </Block>
       <Block flex justifyCenter style={{backgroundColor:'#186999'}}>
       <Thumbnail source={icons.wchat} style={{width:30,height:30,alignSelf:'center'}}/>
       </Block>
       <Block style={{flex:2,backgroundColor:theme.colors.primary}} justifyCenter alignCenter>
         <Text >Mua hàng</Text>
       </Block>
    </Block>
    </Block>
  );
};
const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');
export default DetailScreens;
