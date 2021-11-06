import React, {useEffect, useState} from 'react';
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
  Modal,
  TouchableOpacity,
} from 'react-native';
import {Block, Text, Thumbnail, Button} from '@components';
import CommentCard from './card';
import {icons} from '@assets';
import styles from './style';
import {theme} from '@theme';
import {useNavigation} from '@react-navigation/native';
import {routes} from '@navigation/routes';
import {getSize} from '@utils/responsive';
const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');
import {connect} from 'react-redux';
import {getProductbyCategories,getProductbyIdAction} from '../../../redux/actions';
const mapStateToProps = state => {
  //console.log(state.getProductByIDReducer.data)
  return {
    error: state.getProductByIDReducer?state.getProductByIDReducer.error:null, 
    data: state.getProductByIDReducer?state.getProductByIDReducer.data:null,
    loadding: state.getProductByIDReducer?state.getProductByIDReducer.loadding:null,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getProductbyCategories:(categori)=>{
      dispatch(getProductbyCategories(categori))
    },
    getProductbyIdAction:(id)=>{
      dispatch(getProductbyIdAction(id))
    },
  
  };
};
const datas = [
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
const DetailScreens = ({data,getProductbyIdAction}) => {
  const navigation = useNavigation();
  const [active, setActive] = useState(0);
  const [name, setName] = useState('')
  const [imageBG, setImageBG] = useState([]);
  const [price, setPrice] = useState(null)
  const [description, setDescription] = useState(null)
  // const [price, setPrice] = useState(null)
  // const [price, setPrice] = useState(null)
  // const [price, setPrice] = useState(null)
  // const [price, setPrice] = useState(null)
  

  const [modalVisible, setModalVisible] = useState(false);
  if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }
  const img =(str)=>{
    const newstr=str.replace(/localhost/i, '10.0.2.2');
    return newstr
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
  useEffect(() => {
    if(data !== null){
      const item = data.data;
      console.log(item.id_image.nameImage)
      setImageBG(item.id_image.nameImage);
      setName(item.nameProduct);
      setPrice(item.price_product);
      setDescription(item.description_product)


      Object.keys(item.description_product).map(function(key, index) {
       
        console.log( item.description_product[key] +"aa"+index);
      });
      
    


    }
  }, [data])
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
              source={{uri: img(item)}}></Image>
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
                {name}
              </Text>
              <Text style={{fontSize: 17, fontWeight: 'bold', color: 'red'}}>
                {price}
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

          {/* Body Detail product */}
          <Block
            width={width / 1.1}
            style={{borderWidth: 0.3, borderColor: theme.colors.dark}}
          />
          {isShow ? (
            <Block style={styles.detailbody}>
              {
                Object.keys(description).map((key,index)=>
                  (description.description_product===description[key]?(
                   
                    <Block paddingVertical={getSize.m(8)} backgroundColor={'#ffffff'} width={'100%'}>
                         <Text size={18} color={'#333333'}>{ description[key]}</Text>
                      </Block>
                  ):
                  (
                    index%2===0?(
                      <Block paddingVertical={getSize.m(6)} backgroundColor={'#ffffff'} width={'100%'}>
                        <Text size={16} ><Text style={{fontWeight: 'bold'}} size={16}>{key}</Text>: { description[key]}</Text>
                      </Block>
                    ): (
                      <Block paddingVertical={getSize.m(6)} backgroundColor={'#f5f5f5'} width={'100%'}>
                        <Text size={16}  ><Text style={{fontWeight: 'bold'}} size={16}>{key}</Text>: { description[key]}</Text>
                      </Block>
                    )
                  )
                  )
               )
              }
               {/* {
                Object.keys(description_product).map(function(key, index) {
                  (
                    <Text size={16}>Hãng: Apple</Text>
                  )
              }
              } */}
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
              data={datas}
              renderItem={({item, index}) => <CommentCard item={item} />}
            />
          </Block>
        </Block>
      </ScrollView>
      <Block row width={width} height={height / 14} backgroundColor={'blue'}>
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={{
            flex: 2,
            backgroundColor: '#186999',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Thumbnail source={icons.cart} style={{width: 25, height: 25}} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 3,
            backgroundColor: theme.colors.primary,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            color={theme.colors.white}
            size={17}
            style={{fontWeight: 'bold'}}>
            Mua hàng
          </Text>
        </TouchableOpacity>
      </Block>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <Block
          backgroundColor="#00000066"
          width={width}
          height={height}
          justifyEnd
          alignEnd
          style={{position: 'absolute',bottom:0}}>
          <Block
          padding={20}
            backgroundColor={theme.colors.white}
            width={width}
            style={{
              borderTopLeftRadius: getSize.m(20),
              borderTopRightRadius: getSize.m(20),
            }}>
            <Block row >
              <Block flex alignCenter justifyCenter></Block>
              <Block style={{flex: 7}} alignCenter justifyCenter>
                <Text
                  style={{fontWeight: 'bold'}}
                  size={20}
                  color={theme.colors.primary}>
                  Thêm vào giỏ hàng
                </Text>
              </Block>
              <Block flex alignCenter justifyCenter>
                <Thumbnail
                  onPress={() =>{setModalVisible(false)}}
                  source={icons.close}
                  style={{width: 30, height: 30}}></Thumbnail>
              </Block>
            </Block>
            <Block style={{borderBottomWidth:0.8}} borderColor='black' row>
              <Block style={{flex: 2}}>
                
                
                {/* hinh anh */}



              </Block>
              <Block style={{flex: 7,marginBottom:20}}>
                <Text style={{fontWeight: 'bold'}} size={20}>
                  IPHONE 11 PRO PLUS 256GB
                </Text>
                <Text color="#949599">
                  Hãng:<Text>Apple</Text> - Màu:<Text>Đen</Text> - Dung lượng:
                  <Text>256 GB</Text>{' '}
                </Text>
                <Text size={20}>28.500.000 Đ</Text>
                <Block row>
                  <Block
                    justifyCenter
                    borderColor={theme.colors.primary}
                    borderWidth={1}
                    width={getSize.s(30)}
                    height={getSize.v(30)}>
                    <Thumbnail source={icons.subtract}></Thumbnail>
                  </Block>
                  <Block
                    width={getSize.s(30)}
                    height={getSize.v(30)}
                    alignCenter
                    justifyCenter
                    borderColor={theme.colors.primary}
                    borderWidth={1}>
                    <Text size={18}>0</Text>
                  </Block>
                  <Block
                    justifyCenter
                    width={getSize.s(30)}
                    height={getSize.v(30)}
                    borderColor={theme.colors.primary}
                    borderWidth={1}>
                    <Thumbnail source={icons.plus}></Thumbnail>
                  </Block>
                </Block>
              </Block>
            </Block>
             <Block row paddingTop={20}>
                <Block style={{flex:4}} >
                  <Text size={18}>Tổng</Text>
                  <Text color='red' size={20} style={{fontWeight: 'bold'}}>228.000 Đ</Text>
                </Block>
                <Block style={{flex:7}}>
                  <TouchableOpacity style={{width:'100%', height:getSize.v(60),backgroundColor:theme.colors.primary,borderRadius:getSize.m(10),alignItems:'center',justifyContent:'center'}}>
                     <Text color='white' style={{fontWeight: 'bold'}} size={22}  >Thêm Giỏ Hàng</Text>
                  </TouchableOpacity>
                </Block>
             </Block>
          </Block>
        </Block>
      </Modal>
    </Block>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(DetailScreens);

