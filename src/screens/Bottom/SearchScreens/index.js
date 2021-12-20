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
  Pressable,
  TouchableOpacity,
} from 'react-native';
import {Block, Text, Thumbnail, Button, Header, TextInput} from '@components';
import {icons} from '@assets';
import styles from './style';
import {theme} from '@theme';
import {useNavigation} from '@react-navigation/native';
import Product_Card from './data_card';
import {getSize, width} from '@utils/responsive';
const {height} = Dimensions.get('screen');
import {connect} from 'react-redux';
import {getProduct} from '../../../redux/actions';
import {routes} from '@navigation/routes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loading from '@components/Loadding/Loading';
const categori = [
  {id: 2, name: 'Điện thoại'},
  {id: 3, name: 'Phụ kiện'},
];

const mapStateToProps = state => {
  return {
    error: state.getProductReducer.error,
    data1: state.getProductReducer.data,
    //loading here
    loadding: state.getProductReducer.loadding,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getProduct: input => {
      dispatch(getProduct(input));
    },
  };
};
const SEARCHSCREEN = ({getProduct, data1, loadding}) => {
  // tao useState Loadding
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();
  const [masterData, setMasterData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [seach, setSeach] = useState('');
  const [searchShow, setSearchShow] = useState(true);

  //Loadding trong screen
  useEffect(() => {
    setLoading(loadding);
  }, [loadding]);

  useEffect(() => {
    getDataSeach();
  }, []);
  const seachFilter = async text => {
    if (text) {
      const newData = masterData.filter(item => {
        const itemData = item.nameProduct
          ? item.nameProduct.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilterData(newData);
      setSeach(text);
    } else {
      getDataSeach();
    }
  };
  const getDataSeach = async () => {
    setSeach('');
    const jsonValue = await AsyncStorage.getItem('history');
    const value = jsonValue != null ? JSON.parse(jsonValue) : [];
    setFilterData(value);
  };
  const storeData = async value => {
    console.log(value);
    try {
      const jsonValues = await AsyncStorage.getItem('history');
      const values = jsonValues != null ? JSON.parse(jsonValues) : [];
      let item = [];
      if (values.length > 0) {
        item.push(...values, value);
      } else {
        item.push(value);
      }
      const jsonValue = JSON.stringify(item);
      await AsyncStorage.setItem('history', jsonValue);
    } catch (e) {
      console.log(e);
    }
  };
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('history');

      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
    }
  };
  const clickseach = async text => {
    if (text) {
      const newData = masterData.filter(item => {
        const itemData = item.nameProduct
          ? item.nameProduct.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      storeData({nameProduct: text});

      navigation.navigate(routes.PRODUCTSEARCH, {item: newData});
    }
  };
  useEffect(() => {
    if (data1 !== null) {
      setMasterData(data1.data);
    }
  }, [data1]);

  useEffect(() => {
    getProduct({
      price: null,
      sell: 1,
    });
  }, []);
  return (
    <Block flex backgroundColor={theme.colors.white}>
      {/* header */}
      <Block
        backgroundColor={theme.colors.primary}
        paddingHorizontal={getSize.m(8)}
        paddingBottom={getSize.m(16)}>
        <Block row justifyCenter alignCenter style={styles.header}>
          <Block justifyCenter alignStart style={{flex: 2}}>
            <Thumbnail
              source={icons.back}
              style={{width: getSize.s(24), height: getSize.s(24)}}
              resizeMode="contain"
              onPress={() => {
                navigation.goBack();
              }}
            />
          </Block>
          <TextInput
            placeholder="Tìm kiếm"
            value={seach}
            underlineColorAndroid="transparent"
            onChangeText={text => seachFilter(text)}
            alignCenter
            placeholderTextColor={'white'}
            paddingVertical={getSize.m(2)}
            style={{
              flex: 16,
              backgroundColor: '#77C8EB',
              borderColor: theme.colors.primary,
            }}
            inputstyle={{color: 'white', fontSize: getSize.m(16)}}
            width={'100%'}
            height={getSize.s(35)}
            iconleft={icons.search}
            iconStyle={{
              width: getSize.v(24),
              height: getSize.s(24),
              tintColor: theme.colors.white,
            }}
          />
          <Block alignEnd justifyCenter style={{flex: 2}}>
            <Thumbnail
              source={icons.filter1}
              style={{
                marginHorizontal: 2,
                width: getSize.s(24),
                height: getSize.s(24),
              }}
            />
          </Block>
        </Block>
        {/* <Block row justifyCenter alignCenter height={'35%'}>
          {categori.map((item, index) => (
            <TouchableOpacity
              style={[jewelStyle(item.id),{width:'40%',justifyContent:'center',alignItems:'center'}]}
              onPress={() => {
                setStatusFilter(item.id);
              }}>
              <Text style={[jewelStyle2(item.id),{fontWeight: 'bold'}]} size={getSize.m(20)}>
                {item.name}
              </Text>
            </TouchableOpacity>
          ))}
        </Block> */}
      </Block>
      {/* content */}

      <Block flex alignCenter justifyCenter>
        <ScrollView>
          {filterData.map((item, index) =>
            searchShow ? (
              index < 4 ? (
                <TouchableOpacity
                  onPress={() => {
                    clickseach(item.nameProduct);
                  }}>
                  <Block
                    width={width}
                    paddingVertical={getSize.m(8)}
                    paddingHorizontal={getSize.m(8)}>
                    <Text size={18}>{item.nameProduct}</Text>
                  </Block>
                </TouchableOpacity>
              ) : null
            ) : (
              <TouchableOpacity
                onPress={() => {
                  clickseach(item.nameProduct);
                }}>
                <Block
                  width={width}
                  paddingVertical={getSize.m(8)}
                  paddingHorizontal={getSize.m(8)}
                  backgroundColor={theme.colors.white}>
                  <Text size={18}>{item.nameProduct}</Text>
                </Block>
              </TouchableOpacity>
            ),
          )}
          {Array.isArray(filterData) && filterData.length ? (
            <TouchableOpacity
              onPress={() => {
                searchShow
                  ? setSearchShow(!searchShow)
                  : (setFilterData([]),
                    setSearchShow(true),
                    AsyncStorage.removeItem('history'));
              }}>
              <Block
                width={width}
                style={{borderTopWidth: 0.3, borderColor: theme.colors.gray}}
                paddingVertical={getSize.m(8)}
                paddingHorizontal={getSize.m(10)}
                justifyCenter
                alignCenter>
                <Text size={17}>
                  {searchShow ? 'Hiển thị tất cả' : 'Xóa lịch sử tìm kiếm'}
                </Text>
              </Block>
            </TouchableOpacity>
          ) : null}
        </ScrollView>
      </Block>

      {/* Tao cai nay ms hien Loadding */}
      {loading && <Loading />}
    </Block>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(SEARCHSCREEN);
