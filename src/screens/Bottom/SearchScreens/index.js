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
import { getSize } from '@utils/responsive';
const {height} = Dimensions.get('screen');
import {connect} from 'react-redux';
import {getProduct} from '../../../redux/actions'
const categori = [
  {id: 2, name: 'Điện thoại'},
  {id: 3, name: 'Phụ kiện'},

];

const mapStateToProps = state => {
  return {
    error: state.getProductReducer.error,
    data1: state.getProductReducer.data,
    loadding: state.getProductReducer.loadding,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getProduct: () => {
      dispatch(getProduct());
    },
  };
};
const SEARCHSCREEN = ({getProduct,data1}) => {
  
  const [status, setStatus] = useState();
  const [data, setData] = useState([])
  const [masterData, setMasterData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [seach, setSeach] = useState('');
  const setStatusFilter = id => {
    setStatus(id);
  };
  const seachFilter = text => {
    if (text) {
      const newData = masterData.filter(item => {
        const itemData = item.nameProduct ? item.nameProduct.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilterData(newData);
      setSeach(text);
    } else {
      setFilterData(masterData);
      setSeach(text);
      console.log(filterData + '22');
    }
  };
  useEffect(() => {
    if(data1!==null){
      setMasterData(data1.data);
      setFilterData(data1.data);
   
    }
    
  }, [data1])

  const jewelStyle = id => {
    if (id === status) {
      return {
        padding: getSize.m(10),
        backgroundColor: theme.colors.white,
        justifyContent: 'center',
        color: theme.colors.primary,
        fontWeight: 'bold',
        borderRadius:getSize.m(35),
          paddingHorizontal:getSize.s(10),
       
      };
    } else {
      return {
        padding: getSize.m(10),
        justifyContent: 'center',
        color: theme.colors.white,
        fontWeight: 'bold',
        borderRadius:getSize.m(35),
        paddingHorizontal:getSize.s(10),
          
      };
    }
  };
  const jewelStyle2 = id => {
    if (id === status) {
      return {
        color:theme.colors.primary
      };
    } else {
      return {
        color:theme.colors.white
      };
    }
  };
 
  
  useEffect(() => {
    getProduct()
  }, [getProduct])
  return (
    <Block flex>
      {/* header */}
      <Block height={getSize.s(170)}  backgroundColor={theme.colors.primary} paddingHorizontal={getSize.m(10)} style={{borderBottomLeftRadius:getSize.m(15),borderBottomRightRadius:getSize.m(15)}}>
      <Block
        row
       
        height={'60%'}
        
        justifyCenter
        alignCenter
        style={styles.header}>
        <Block justifyCenter alignStart style={{flex: 2}}>
          <Thumbnail source={icons.back}
          style={{ width: getSize.s(20), height: getSize.s(20)}}
          resizeMode="contain"/>
        </Block>
        <TextInput
        placeholder="Tìm kiếm"
        value={seach}
        underlineColorAndroid="transparent"
        onChangeText={text => seachFilter(text)}
         alignCenter placeholderTextColor={'white'}  paddingVertical={getSize.m(2)} style={{flex: 18,backgroundColor:'#77C8EB'}} inputstyle={{color:'white',fontSize:getSize.m(18)}} width={'100%'}  height={getSize.s(35)} iconleft={icons.search}>
         
        </TextInput>
        <Block alignEnd justifyCenter style={{flex: 2}}>
          <Thumbnail source={icons.filter}

          style={{marginHorizontal: 2, width: getSize.s(22), height: getSize.s(22)}}
         />
        </Block>
        
      </Block>
      <Block row justifyCenter alignCenter height={'35%'}>
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
        </Block>
      </Block>
      {/* content */}
     
      <Block flex alignCenter justifyCenter marginTop={10}>
        
        <FlatList
          data={filterData}
          numColumns={2}
          renderItem={({item, index}) => <Product_Card item={item} />}
        />
      </Block>
    </Block>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(SEARCHSCREEN);
