import React, {useEffect, useState} from 'react';
import {ToastAndroid, StyleSheet, TouchableOpacity, Text, FlatList, StatusBar} from 'react-native';
import {icons} from '@assets';
import {Block, Header, Thumbnail} from '@components';
import {theme} from '@theme';
import FavoList from '@components/List/FavoList';
import {useNavigation, useRoute} from '@react-navigation/native';
import {getSize} from '@utils/responsive';
import {connect} from 'react-redux';
import { routes } from '@navigation/routes';
import { getFavoriteAction } from '@redux/actions';
import Product_Card from '@components/Card/ProductCard2';
import Loading from '@components/Loadding/Loading';

const mapStateToProps = state => {
  console.log(state.getFavoriteReducer.data)
  console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaxxxxxxxxxxxxxxxxxxxxxxxxxxx")

  return {
    error: state.getFavoriteReducer ? state.getFavoriteReducer.error : null,
    data1: state.getFavoriteReducer ? state.getFavoriteReducer.data : null,
    loadding: state.getFavoriteReducer
      ? state.getFavoriteReducer.loadding
      : null,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getFavoriteAction: () => {
      dispatch(getFavoriteAction());
    },
    getFavoriteByIdAction: id => {
      dispatch(getFavoriteByIdAction(id));
    },
  };
};

const categori = [
  {id: 2, name: 'Liên quan'},
  {id: 3, name: 'Mới nhất'},
  {id: 4, name: 'Bán chạy'},
];

const FavoriteList = ({data1, getFavoriteAction, loadding, error}) => {
  const navigation = useNavigation();
  const [status, setStatus] = useState();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getFavoriteAction()
    
  }, [])

  useEffect(() => {
    if(data1 !== null){
      setData(data1.data);
      console.log(data1.data)
      console.log('aaaaaaaaaaaaaaaaa')

    }
  
  }, [data1])

  useEffect(() => {
    setLoading(loadding)
  }, [loadding])

  useEffect(() => {
    if(error !== null){
      console.log(error);
      ToastAndroid.show('Lỗi: ' + error, ToastAndroid.SHORT);
    }
  }, [error])

  const setStatusFilter = id => {
    setStatus(id);
  };
  const jewelStyle = id => {
    if (id === status) {
      return {
        justifyContent: 'center',
        color: theme.colors.primary,
        borderBottomWidth: 1,
        borderColor: theme.colors.primary,
        paddingVertical: getSize.s(10),
      };
    } else {
      return {
        justifyContent: 'center',
        color: theme.colors.black,
        paddingVertical: getSize.s(10),
        borderBottomWidth: 1,
        borderColor: '#808080',
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
        color: '#808080',
      };
    }
  };

  return (
    <Block flex>
      {/* header */}
      <Block
        backgroundColor={theme.colors.primary}
        paddingHorizontal={getSize.m(8)}>
        <Block
        paddingVertical={16}
          row
          justifyCenter
          alignCenter
          style={styles.header}>
          <Block justifyCenter  alignStart style={{flex: 2}}>
            <Thumbnail
              source={icons.back}
              style={{width: getSize.s(20), height: getSize.s(20)}}
              resizeMode="contain"
              onPress={() => {
                navigation.goBack();
              }}
            />
          </Block>
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
            <TouchableOpacity style={{ width:'100%',flex: 18,height:getSize.s(35)}} onPress={() =>{navigation.navigate(routes.SEARCHSCREEN)}}>
          <Block
            alignCenter
            row
            paddingVertical={getSize.m(2)}
            style={{ backgroundColor: '#77C8EB'}}
            width={'100%'}
            height={'100%'}
            paddingHorizontal={getSize.m(8)}>
            <Thumbnail
              source={icons.search}
            
              style={{width: 20, height: 20,marginRight:getSize.m(5)}}
              resizeMode="contain"
            />
            <Text size={getSize.m(18)} color={'white'}>
              Tìm kiếm
            </Text>
          </Block>
          </TouchableOpacity>
          <Block alignEnd justifyCenter style={{flex: 2}}>
            <Thumbnail
              source={icons.filter1}
              style={{
                marginHorizontal: 2,
                width: getSize.s(22),
                height: getSize.s(22),
              }}
            />
          </Block>
        </Block>
      </Block>
      <Block row justifyCenter alignCenter>
        {categori.map((item, index) => (
          <TouchableOpacity
            style={[
              jewelStyle(item.id),
              {
                width: '32%',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: theme.colors.white,
              },
            ]}
            onPress={() => {
              setStatusFilter(item.id);
            }}>
            <Text
              style={[
                jewelStyle2(item.id),
                {width: '100%', textAlign: 'center', borderColor: '#808080'},
                index === categori.length - 1
                  ? {borderLeftWidth: 0.7}
                  : {borderRightWidth: 0.7},
              ]}
              size={getSize.m(18)}>
              {item.name}
            </Text>
          </TouchableOpacity>
        ))}
      </Block>
      {/* content */}

      <Block flex alignCenter justifyCenter marginTop={10}>
        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          renderItem={({item, index}) => <Product_Card item={item} />}
        />
      </Block>
      {/*Có cái này mới hiện loading!!!*/}
      {loading && (<Loading/>)}
    </Block>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  header:{
    paddingTop: StatusBar.currentHeight,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteList);
