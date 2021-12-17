import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from './colors';
import Phones from './Phones';
import {Block, Header, Thumbnail, CategoryItem} from '@components';
import {useNavigation} from '@react-navigation/native';
import {routes} from '@navigation/routes';
import {category} from '@utils/dummyData';
import {getSize} from '@utils/responsive';
import {theme} from '@theme';
import {icons} from '@assets';
import {api} from 'config/config';
import axios from 'axios';
import Loading from '@components/Loadding/Loading';

const categori = [
  {id: 2, name: 'Điện thoại', nameid: 'PHONE'},
  {id: 3, name: 'Phụ kiện', nameid: 'ACCESSORY'},
];
import {connect} from 'react-redux';
import {getCateGoryAction} from '@redux/actions';
const mapStateToProps = state => {
  return {
    error: state.getCategoriesReducer ? state.getCategoriesReducer.error : null,
    data1: state.getCategoriesReducer ? state.getCategoriesReducer.data : null,
    loadding: state.getCategoriesReducer
      ? state.getCategoriesReducer.loadding
      : null,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCateGoryAction: categori => {
      dispatch(getCateGoryAction(categori));
    },
  };
};
const CartCard = ({item}) => {
  return (
    <View style={style.cartCard}>
      <CategoryItem item={item} />
      <Text style={{fontSize: getSize.m(14), fontWeight: '500'}}>
        {item.name_category}
      </Text>
    </View>
  );
};
const Category = ({getCateGoryAction, data1, loadding, error}) => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [status, setStatus] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // getListCategory();
    getCateGoryAction('PHONE');
    setStatusFilter(2);
  }, []);
  useEffect(() => {
    if (data1 !== null) {
      setData(data1.data);
    }
  }, [data1]);

  useEffect(() => {
    setLoading(loadding);
  }, [loadding]);

  useEffect(() => {
    if (error !== null) {
      console.log(error);
      ToastAndroid.show('Lỗi: ' + error, ToastAndroid.SHORT);
    }
  }, [error]);

  const jewelStyle = id => {
    if (id === status) {
      return {
        padding: getSize.m(6),
        backgroundColor: theme.colors.white,
        justifyContent: 'center',
        color: theme.colors.primary,
        fontWeight: 'bold',
        borderRadius: getSize.m(35),
      };
    } else {
      return {
        padding: getSize.m(10),
        justifyContent: 'center',
        color: theme.colors.white,
        fontWeight: 'bold',
        borderRadius: getSize.m(35),
        paddingHorizontal: getSize.s(10),
      };
    }
  };
  const jewelStyle2 = id => {
    if (id === status) {
      return {
        color: theme.colors.primary,
      };
    } else {
      return {
        color: theme.colors.white,
      };
    }
  };
  const setStatusFilter = id => {
    setStatus(id);
  };

  return (
    <SafeAreaView style={{backgroundColor: COLORS.white, flex: 1}}>
      <Block
        backgroundColor={theme.colors.primary}
        paddingHorizontal={getSize.m(8)}>
        <Block row justifyCenter alignCenter style={style.header2}>
          {/* <TextInput
            placeholder="Tìm kiếm"
            underlineColorAndroid="transparent"
            onChangeText={text => seachFilter(text)}
            alignCenter
            placeholderTextColor={'white'}
            paddingVertical={getSize.m(2)}
            style={{flex: 18, backgroundColor: '#77C8EB'}}
            inputstyle={{color: 'white', fontSize: getSize.m(18)}}
            width={'100%'}
            height={getSize.s(35)}
            iconleft={icons.search}></TextInput> */}
          <TouchableOpacity
            style={{width: '90%', height: getSize.s(35)}}
            onPress={() => {
              navigation.navigate(routes.SEARCHSCREEN);
            }}>
            <Block
              alignCenter
              row
              style={{backgroundColor: '#77C8EB'}}
              width={'98%'}
              height={'100%'}
              paddingHorizontal={getSize.m(8)}
              marginLeft={getSize.m(8)}>
              <Thumbnail
                imageStyle={{
                  tintColor: theme.colors.white,
                }}
                source={icons.search}
                style={{width: 22, height: 22, marginRight: getSize.m(8)}}
                imageStyle={{tintColor: theme.colors.white}}
                resizeMode="contain"
              />

              <Text size={getSize.m(18)} style={{color: theme.colors.white}}>
                Tìm kiếm
              </Text>
            </Block>
          </TouchableOpacity>

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
      </Block>
      <Block
        style={{
          borderBottomRightRadius: getSize.m(20),
          borderBottomLeftRadius: getSize.m(20),
        }}
        row
        justifyCenter
        alignCenter
        height={'10%'}
        backgroundColor={theme.colors.primary}>
        {categori.map((item, index) => (
          <TouchableOpacity
            style={[
              jewelStyle(item.id),
              {
                width: '30%',
                justifyContent: 'center',
                alignItems: 'center',
                marginHorizontal: 32,
              },
            ]}
            onPress={() => {
              getCateGoryAction(item.nameid);
              console.log(item.nameid);
              setStatusFilter(item.id);
            }}>
            <Text
              style={[
                jewelStyle2(item.id),
                {fontWeight: 'bold', fontSize: getSize.m(16)},
              ]}
              size={getSize.m(20)}>
              {item.name}
            </Text>
          </TouchableOpacity>
        ))}
      </Block>

      <View style={style.header}>
        <Text
          style={{
            fontSize: 17,
            color: theme.colors.blackText,
            fontWeight: '500',
            marginTop: getSize.m(10),
          }}>
          Danh Mục Sản Phẩm
        </Text>
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        horizontal={false}
        numColumns={4}
        renderItem={({item}) => <CartCard item={item} />}
      />
      {/*Có cái này mới hiện loading!!!*/}
      {loading && <Loading />}
    </SafeAreaView>
  );
};
const style = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    backgroundColor: COLORS.white,

    paddingBottom: 12,
    borderBottomWidth: 1,
    borderColor: theme.colors.grey,
    borderBottomWidth: 1,
  },
  cartCard: {
    marginVertical: 6,
    marginHorizontal: 4,
    paddingVertical: 8,
    paddingHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header2: {
    paddingTop: StatusBar.currentHeight + 16,
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Category);
