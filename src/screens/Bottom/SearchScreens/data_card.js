import React, {useState, useEffect} from 'react';
import {
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {Block, Text, Thumbnail, Button, Header, TextInput} from '@components';
import {icons} from '@assets';
import styles from './style';
import {theme} from '@theme';
import {useNavigation, useRoute} from '@react-navigation/native';
import {getSize} from '@utils/responsive';
import {routes} from '@navigation/routes';
import {formatCurrency} from '@utils/utils';
import Product_Card from '@components/Card/ProductCard2';
const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');
import {
  getProductbyCategories,
  getProductbyIdAction,
  getProduct,
} from '../../../redux/actions';

import {connect} from 'react-redux';
const categori = [
  {id: 2, name: 'Liên quan'},
  {id: 3, name: 'Mới nhất'},
  {id: 4, name: 'Bán chạy'},
];
const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    getProductbyIdAction: id => {
      dispatch(getProductbyIdAction(id));
    },
  };
};
const Product = ({getProductbyIdAction}) => {
  const navigation = useNavigation();
  const route = useRoute();
  const {item} = route.params;
  const [status, setStatus] = useState();
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
        height={getSize.s(90)}
        backgroundColor={theme.colors.primary}
        paddingHorizontal={getSize.m(10)}>
        <Block
          row
          height={'60%'}
          justifyCenter
          alignCenter
          style={styles.header}>
          <Block justifyCenter alignStart style={{flex: 2}}>
            <Thumbnail
              source={icons.back}
              style={{width: getSize.s(20), height: getSize.s(20)}}
              resizeMode="contain"
              onPress={() => {
                navigation.goBack();
              }}
            />
          </Block>
          <TouchableOpacity
            style={{width: '100%', flex: 18, height: getSize.s(35)}}
            onPress={() => {
              navigation.navigate(routes.SEARCHSCREEN);
            }}>
            <Block
              alignCenter
              row
              paddingVertical={getSize.m(2)}
              style={{backgroundColor: '#77C8EB'}}
              width={'100%'}
              height={'100%'}
              paddingHorizontal={getSize.m(8)}>
              <Thumbnail
                source={icons.search}
                style={{width: 20, height: 20, marginRight: getSize.m(5)}}
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

      {/* content */}

      <Block flex alignCenter justifyCenter marginTop={10}>
        <FlatList
          data={item}
          numColumns={2}
          renderItem={({item, index}) => (
            <Product_Card
              item={item}
              getProductbyIdAction={getProductbyIdAction}
            />
          )}
        />
      </Block>
    </Block>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(Product);
