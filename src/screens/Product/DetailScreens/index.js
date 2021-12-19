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
  Alert,
} from 'react-native';
import {Block, Text, Thumbnail, Button} from '@components';
import CommentCard from './card';
import {icons} from '@assets';
import styles from './style';
import {theme} from '@theme';
import {useNavigation, CommonActions, useRoute} from '@react-navigation/native';
import {routes} from '@navigation/routes';
import {getSize} from '@utils/responsive';
const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');
import {connect} from 'react-redux';
import {useData} from 'config/config';
import {
  addLikeAction,
  checkstatusLikeAction,
  getCartByUser,
  getCommentByProduct,
  getCountComment,
  getProductbyCategories,
  getProductbyIdAction,
  removeLikeAction,
  UpdateCartByUser,
} from '../../../redux/actions';
import Count from '@components/Count';
import {formatCurrency} from '@utils/utils';
import Comment from './comment';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loading from '@components/Loadding/Loading';

const mapStateToProps = state => {
  return {
    dataCart: state.getCartByUserReducer
      ? state.getCartByUserReducer.data
      : null,
    error: state.getProductByIDReducer
      ? state.getProductByIDReducer.error
      : null,
    data: state.getProductByIDReducer ? state.getProductByIDReducer.data : null,
    loadding: state.getProductByIDReducer
      ? state.getProductByIDReducer.loadding
      : null,

    errorLike: state.editLikeReducer ? state.editLikeReducer.error : null,
    dataLike: state.editLikeReducer ? state.editLikeReducer.data : null,
    loaddingLike: state.editLikeReducer ? state.editLikeReducer.loadding : null,

    // errorLike: state.editLikeReducer ? state.editLikeReducer.error : null,
    // dataLike: state.editLikeReducer ? state.editLikeReducer.data : null,
    // loaddingLike: state.editLikeReducer ? state.editLikeReducer.loadding : null,

    errorStatusLike: state.getStatusLikeReducer
      ? state.getStatusLikeReducer.error
      : null,
    dataStatusLike: state.getStatusLikeReducer
      ? state.getStatusLikeReducer.data
      : null,
    loaddingStatusLike: state.getStatusLikeReducer
      ? state.getStatusLikeReducer.loadding
      : null,

    removeerrorLike: state.removeLikeReducer
      ? state.removeLikeReducer.error
      : null,
    removedataLike: state.removeLikeReducer
      ? state.removeLikeReducer.data
      : null,
    removeloaddingLike: state.removeLikeReducer
      ? state.removeLikeReducer.loadding
      : null,

    commenterror: state.getCommentsReducer
      ? state.getCommentsReducer.error
      : null,
    commentdata: state.getCommentsReducer
      ? state.getCommentsReducer.data
      : null,
    commentloadding: state.getCommentsReducer
      ? state.getCommentsReducer.loadding
      : null,

    addcommenterror: state.addCommentsReducer
      ? state.addCommentsReducer.error
      : null,
    addcommentdata: state.addCommentsReducer
      ? state.addCommentsReducer.data
      : null,
    addcommentloadding: state.addCommentsReducer
      ? state.addCommentsReducer.loadding
      : null,

    countcommenterror: state.getCountCommentsReducer
      ? state.getCountCommentsReducer.error
      : null,
    countcommentdata: state.getCountCommentsReducer
      ? state.getCountCommentsReducer.data
      : null,
    countcommentloadding: state.addCommentsReducer
      ? state.getCountCommentsReducer.loadding
      : null,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getProductbyCategories: categori => {
      dispatch(getProductbyCategories(categori));
    },
    getProductbyIdAction: id => {
      dispatch(getProductbyIdAction(id));
    },
    getCartByUser: id => {
      dispatch(getCartByUser(id));
    },
    UpdateCartByUser: input => {
      dispatch(UpdateCartByUser(input));
    },
    addLikeAction: input => {
      dispatch(addLikeAction(input));
    },
    checkstatusLikeAction: input => {
      dispatch(checkstatusLikeAction(input));
    },
    removeLikeAction: input => {
      dispatch(removeLikeAction(input));
    },
    getCommentByProduct: input => {
      dispatch(getCommentByProduct(input));
    },
    addComment: input => {
      dispatch(addComment(input));
    },
    getCountComment: input => {
      dispatch(getCountComment(input));
    },
  };
};

const DetailScreens = ({
  data,
  getCountComment,
  countcommentdata,
  getProductbyIdAction,
  dataCart,
  getCartByUser,
  UpdateCartByUser,
  addLikeAction,
  dataStatusLike,
  checkstatusLikeAction,
  removeLikeAction,
  dataLike,
  removedataLike,
  commentdata,
  getCommentByProduct,
  addComment,
  addcommentdata,
  loadding,
  error,
  errorLike,
  errorStatusLike,
  removeerrorLike,
  commenterror,
  addcommenterror,
  countcommenterror,
}) => {
  const route = useRoute();
  const {id} = route.params;

  const [amount, setAmount] = useState(1);
  const [dataCarts, setDataCarts] = useState([]);
  const [totalCarts, setTotalCarts] = useState(null);
  const navigation = useNavigation();
  const [active, setActive] = useState(0);
  const [name, setName] = useState('');
  const [imageBG, setImageBG] = useState([]);
  const [price, setPrice] = useState(null);
  const [description, setDescription] = useState(null);
  const [check, setCheck] = useState(false);
  const [checkId, setcheckId] = useState('');
  const [dataComment, setDataComment] = useState([]);
  const [countComment, setCountComment] = useState();
  const [allcountComment, setAllCountComment] = useState('');
  const [avdComment, setAvdComment] = useState('');
  const [loading, setLoading] = useState(false);

  // const [price, setPrice] = useState(null)
  // const [price, setPrice] = useState(null)
  // const [price, setPrice] = useState(null)
  // const [price, setPrice] = useState(null)

  useEffect(() => {
    if (error !== null) {
      ToastAndroid.show('Lỗi: ' + error, ToastAndroid.SHORT);
    }
  }, [error]);

  useEffect(() => {
    if (errorLike !== null) {
      ToastAndroid.show('Lỗi: ' + errorLike, ToastAndroid.SHORT);
    }
  }, [errorLike]);

  useEffect(() => {
    if (errorStatusLike !== null) {
      ToastAndroid.show('Lỗi: ' + errorStatusLike, ToastAndroid.SHORT);
    }
  }, [errorStatusLike]);

  useEffect(() => {
    if (removeerrorLike !== null) {
      ToastAndroid.show('Lỗi: ' + removeerrorLike, ToastAndroid.SHORT);
    }
  }, [removeerrorLike]);

  useEffect(() => {
    if (commenterror !== null) {
      ToastAndroid.show('Lỗi: ' + commenterror, ToastAndroid.SHORT);
    }
  }, [commenterror]);

  useEffect(() => {
    if (addcommenterror !== null) {
      ToastAndroid.show('Lỗi: ' + addcommenterror, ToastAndroid.SHORT);
    }
  }, [addcommenterror]);

  useEffect(() => {
    if (countcommenterror !== null) {
      ToastAndroid.show('Lỗi: ' + countcommenterror, ToastAndroid.SHORT);
    }
  }, [countcommenterror]);

  useEffect(() => {
    getCommentByProduct({id_product: id});
    getCountComment(id);
    getProductbyIdAction(id);
    //  setDataComment(datas)
  }, [addcommentdata, addComment]);
  useEffect(() => {
    if (commentdata !== null) {
      setDataComment(commentdata.data);
    }
  }, [commentdata, addComment, addcommentdata]);
  useEffect(() => {
    if (countcommentdata !== null) {
      setCountComment(countcommentdata.data);
      setAllCountComment(countcommentdata.data.comments);
      setAvdComment(countcommentdata.data.avd);
    }
  }, [countcommentdata]);
  useEffect(() => {
    if (useData.token !== null && useData.id !== null) {
      if (dataStatusLike !== null) {
        if (dataStatusLike.data !== null) {
          setCheck(true);
          setcheckId(dataStatusLike.data._id);
        } else {
          setCheck(false);
          setcheckId('');
        }
      } else {
        setCheck(false);
        setcheckId('');
      }
    } else {
      setCheck(false);
      setcheckId('');
    }
  }, [dataStatusLike]);
  useEffect(() => {
    if (useData.token !== null && useData.id !== null) {
      checkstatusLikeAction({id_user: useData.id, id_product: id});
    }
  }, [dataLike, removedataLike]);
  useEffect(async () => {
    if (useData.token !== null) {
      const cart = await AsyncStorage.getItem(useData.id);
      const aa = JSON.parse(cart);
      if (cart !== undefined) {
        setDataCarts(aa.products);
        setTotalCarts(aa.total);
      }
    }
  }, []);

  useEffect(() => {
    if (useData.token !== null && useData.id !== null) {
      getCartByUser(useData.id);
    }
  }, [getCartByUser, UpdateCartByUser]);

  useEffect(() => {
    setLoading(loadding);
  }, [loadding]);

  const [modalVisible, setModalVisible] = useState(false);
  const [modalType, setModalType] = useState('');
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

  useEffect(() => {
    if (data !== null) {
      const item = data.data;
      setImageBG(item.id_image.nameImage);
      setName(item.nameProduct);
      setPrice(item.price_product);
      setDescription(item.description_product);
    }
  }, [data]);
  const addCart = async (Carts, id, amount, total) => {
    const index = Carts.findIndex(el => el.id_product === id);

    let items = [];

    if (index === -1 || index === undefined) {
      console.log('CREATE');
      const item = {
        id_product: id,
        id_image: imageBG[0],
        price_product: parseInt(price),
        nameProduct: name,
        amount: amount,
      };
      items.push(...Carts, item);
      let cart = {
        total: total + parseInt(price) * parseInt(amount),
        products: items,
      };

      await AsyncStorage.setItem(useData.id, JSON.stringify(cart));
    } else {
      console.log('ADD');
      Carts[index].amount = Carts[index].amount + amount;
      items.push(...Carts);
      let cart = {
        total: total + parseInt(price) * parseInt(amount),
        products: items,
      };
      console.log(cart);
      await AsyncStorage.setItem(useData.id, JSON.stringify(cart));
    }
    // navigation.dispatch(
    //   CommonActions.reset({
    //     index: 1,
    //     routes: [
    //       {
    //         name: routes.CARTSCREENS,
    //       },
    //     ],
    //   }),
    // );
    navigation.navigate(routes.CARTSCREENS);
  };
  const remove = idc => {
    if (idc !== '') {
      removeLikeAction(checkId);
      setcheckId('');
      setCheck(false);
    }
  };

  return (
    <Block style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* image header  */}
        <ScrollView
          onScroll={({nativeEvent}) => change(nativeEvent)}
          showsHorizontalScrollIndicator={false}
          horizontal={true}>
          {Array.isArray(imageBG) && imageBG.length
            ? imageBG.map((item, index) => (
                <Image
                  key={item}
                  resizeMode="stretch"
                  style={{
                    flexDirection: 'row',
                    width: width,
                    height: height / 2.5,
                  }}
                  source={{uri: item}}></Image>
              ))
            : null}
        </ScrollView>
        {/*header*/}
        {/* dot cho image */}
        <Block
          justifyCenter
          style={{
            flexDirection: 'row',
            width: getSize.v(width),
            height: getSize.v(height / 15),
            position: 'absolute',
            top: getSize.m(height / 3),
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
          <Block margin={getSize.m(16)} flex alignStart>
            <Thumbnail
              source={icons.back}
              onPress={() => navigation.goBack()}
              imageStyle={{width: getSize.s(24), height: getSize.s(24)}}
              style={{
                width: 40,
                height: 40,
                backgroundColor: theme.colors.smoke,
                opacity: 0.7,
                borderRadius: 50,
                justifyContent: 'center',
              }}
            />
          </Block>
          <Block margin={getSize.m(16)} flex alignEnd>
            <Thumbnail
              source={icons.more}
              imageStyle={{width: getSize.s(24), height: getSize.s(24)}}
              style={{
                width: getSize.v(40),
                height: getSize.v(40),
                backgroundColor: theme.colors.smoke,
                opacity: 0.7,
                borderRadius: 50,
                justifyContent: 'center',
              }}
            />
          </Block>
        </Block>

        {/* Body All */}
        <Block alignCenter style={styles.body}>
          {/* Body Name Product */}
          <Block row style={styles.bodyname}>
            <Block justifyCenter style={{flex: 3}}>

              <Text style={{fontSize: getSize.m(18), fontWeight: '500', marginBottom: getSize.m(4)}}>{name}</Text>
              <Text style={{fontSize: getSize.m(16), fontWeight: 'bold', color: theme.colors.red}}>
                {formatCurrency(price)}
              </Text>
              {/* <Text style={{fontSize: 12}}>16 giờ trước</Text> */}
            </Block>
            <Block flex justifyCenter>
              <Button
                onPress={() => {
                  check
                    ? remove(checkId)
                    : addLikeAction({
                        id_user: useData.id,
                        id_product: data.data._id,
                      });
                }}
                shadow
                title={check ? 'Đã thích' : 'Yêu thích'}
                style={styles.button}
                titleStyle={{
                  fontSize: getSize.m(16),
                  color: theme.colors.primary,
                }}
              />
            </Block>
          </Block>
          <Block
            width={width / 1.1}
            style={{borderWidth: 0.3, borderColor: theme.colors.gray}}
          />

          {/* Body Detail product */}
          <Block
            width={width / 1.1}
            style={{borderWidth: 0.3, borderColor: theme.colors.gray}}
          />
          {isShow ? (
            <Block style={styles.detailbody}>
              {Object.keys(description).map((key, index) =>
                description.description_product === description[key] ? (
                  <Block
                    paddingVertical={getSize.m(8)}
                    backgroundColor={'#ffffff'}
                    width={'100%'}>
                    <Text size={getSize.m(18)} color={'#333333'}>
                      {description[key]}
                    </Text>
                  </Block>
                ) : index % 2 === 0 ? (
                  <Block
                    paddingVertical={getSize.m(6)}
                    backgroundColor={'#ffffff'}
                    width={'100%'}>
                    <Text size={getSize.m(16)}>
                      <Text style={{fontWeight: 'bold'}} size={getSize.m(16)}>
                        {key}
                      </Text>
                      : {description[key]}
                    </Text>
                  </Block>
                ) : (
                  <Block
                    paddingVertical={getSize.m(6)}
                    backgroundColor={'#f5f5f5'}
                    width={'100%'}>
                    <Text size={16}>
                      <Text style={{fontWeight: 'bold'}} size={16}>
                        {key}
                      </Text>
                      : {description[key]}
                    </Text>
                  </Block>
                ),
              )}
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
            titleStyle={{fontSize: getSize.m(16), color: theme.colors.primary}}
            onPress={() => {
              LayoutAnimation.easeInEaseOut();
              setIsShow(!isShow);
            }}
          />
          <Block
            marginBottom={getSize.m(8)}
            width={width / 1.1}
            style={{borderWidth: 0.3, borderColor: theme.colors.gray}}
          />
          {/* duyet+ report */}
          {/* <Block flex width={width / 1.1}>
            <Block row alignCenter style={{flex: 2}}>
              <Thumbnail
                marginRight={10}
                style={{flex: 1}}
                source={icons.safety}
                style={{width: 80, height: 80}}
              />
              <Block style={{flex: 3}}>
                <Text size={16}>
                  Sản phẩm đã được kiểm duyệt. Nếu gặp vấn đề gì vui lòng báo
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
                titleStyle={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: theme.colors.red,
                }}
                title="Báo cáo tin"></Button>
            </Block>
          </Block> */}
          {/* Comment body */}
          <Block marginBottom={getSize.m(8)} style={styles.commentbody}>
            <Block alignCenter row marginBottom={getSize.m(8)}>
              <Text flex size={getSize.m(16)} style={{fontWeight: '500'}}>
                Bài viết đánh giá
              </Text>
              {allcountComment !== 0 ? (
              <Text flex size={getSize.m(14)} right style={{fontStyle: 'italic'}}>
                
                {allcountComment} đánh giá - {parseFloat(avdComment).toFixed(2)}
                /5
                
              </Text>
               ) : (
                <Text style={styles.txt}>Chưa có đánh giá</Text>
                )}
            </Block>
            <Block
              width={width / 1.1}
              style={{
                borderWidth: 0.3,
                borderColor: theme.colors.gray,
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
              data={dataComment}
              renderItem={({item, index}) =>
                index < 3 ? <CommentCard item={item} /> : null
              }
            />
            <Block row>
              <Block flex alignCenter marginTop={getSize.m(16)}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate(routes.VOTE_SCREEN);
                  }}
                  style={[
                    styles.btnComment,
                    {
                      backgroundColor: theme.colors.secondary,
                      marginRight: getSize.m(8),
                    },
                  ]}>
                  <Text
                    style={[styles.txtComment, {color: theme.colors.white}]}>
                    Viết đánh giá
                  </Text>
                </TouchableOpacity>
              </Block>
              {Array.isArray(dataComment) && dataComment.length ? (
                <Block flex alignCenter>
                  <TouchableOpacity
                    onPress={() => {
                      setModalVisible(true), setModalType('Comment');
                    }}
                    style={[styles.btnComment, {marginLeft: getSize.m(8), marginTop: getSize.m(16)}]}>
                    <Text
                      style={[
                        styles.txtComment,
                        {color: theme.colors.secondary},
                      ]}>
                      Xem {dataComment.length} đánh giá
                    </Text>
                  </TouchableOpacity>
                </Block>
              ) : null}
            </Block>
          </Block>
        </Block>
      </ScrollView>
      {/* {dataComment.map((item, index)=><CommentCard item={item} />)} */}
      <Block row width={width} height={height / 14} backgroundColor={'blue'}>
        <TouchableOpacity
          onPress={() => {
            //</Block>  getCountComment(id);
            //  console.log(countcommentdata);
            setModalVisible(true), setModalType('Cart');
          }}
          style={{
            flex: 1,
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
          setModalType('');
        }}>
        {modalType === 'Cart' ? (
          <Block
            backgroundColor="#00000066"
            width={width}
            height={height}
            justifyEnd
            alignEnd
            style={{position: 'absolute', bottom: 0}}>
            <Block
              padding={16}
              backgroundColor={theme.colors.white}
              width={width}
              style={{
                borderTopLeftRadius: getSize.m(20),
                borderTopRightRadius: getSize.m(20),
              }}>
              <Block row>
                <Block flex alignCenter justifyCenter></Block>
                <Block style={{flex: 7}} alignCenter justifyCenter>
                  <Text
                    style={{fontWeight: 'bold'}}
                    size={17}
                    color={theme.colors.primary}>
                    Thêm vào giỏ hàng
                  </Text>
                </Block>
                <Block flex alignEnd justifyCenter>
                  <Thumbnail
                    onPressOut={() => {
                      setModalVisible(false);
                      setModalType('');
                    }}
                    source={icons.close}
                    imageStyle={{tintColor: theme.colors.grayTitle}}
                    style={{width: 20, height: 20}}></Thumbnail>
                </Block>
              </Block>
              <Block
                style={{marginTop: 16, borderBottomWidth: 0.5, padding: 16}}
                borderColor={theme.colors.gray}
                row>
                <Block alignStart marginTop={4}>
                  <Thumbnail
                    source={{uri: imageBG[0]}}
                    resizeMode={'contain'}
                    style={{width: getSize.s(80), height: getSize.s(80)}}
                  />
                </Block>
                <Block style={{marginHorizontal: 8, marginBottom: 8}}>
                  <Text style={{fontWeight: 'bold', marginBottom: 6}} size={18}>
                    {name}
                  </Text>
                  <Text marginBottom={6} color="#949599">
                    Hãng:<Text> Apple</Text> - Dung lượng:
                    <Text> 256 GB</Text>{' '}
                  </Text>
                  <Text marginBottom={6} size={17}>
                    {formatCurrency(price)}
                  </Text>
                  <Count
                    onPressSubtract={() => {
                      amount > 1 ? setAmount(amount - 1) : null;
                    }}
                    amount={amount}
                    onPressPlus={() => {
                      setAmount(amount + 1);
                    }}
                  />
                </Block>
              </Block>
              <Block row marginTop={16}>
                <Block style={{width: '40%'}}>
                  <Text size={16}>Tổng</Text>
                  <Text
                    color={theme.colors.red}
                    size={18}
                    style={{fontWeight: 'bold'}}>
                    {formatCurrency(price * amount)}
                  </Text>
                </Block>
                <Block style={{width: '60%'}}>
                  <TouchableOpacity
                    onPress={() => {
                      addCart(dataCarts, data.data._id, amount, totalCarts);
                    }}
                    style={{
                      width: '100%',
                      height: getSize.v(52),
                      backgroundColor: theme.colors.primary,
                      borderRadius: getSize.m(6),
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text color="white" style={{fontWeight: 'bold'}} size={16}>
                      Thêm Giỏ Hàng
                    </Text>
                  </TouchableOpacity>
                </Block>
              </Block>
            </Block>
          </Block>
        ) : (
          <Comment
            navigation={navigation}
            countComment={countComment}
            name={name}
            price={price}
            image={imageBG}
            dataComment={dataComment}
            setModalType={setModalType}
            setModalVisible={setModalVisible}
          />
        )}
      </Modal>
      {/*Có cái này mới hiện loading!!!*/}
      {loading && <Loading />}
    </Block>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(DetailScreens);
