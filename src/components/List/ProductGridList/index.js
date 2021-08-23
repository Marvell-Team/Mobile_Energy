import React from 'react';
import {FlatList, ToastAndroid} from 'react-native';
import {GridProduct} from '@components';
import {useNavigation} from '@react-navigation/native';

const ProductGridList = ({data}) => {
  const navigation = useNavigation();
  return (
    <FlatList
      data={data}
      numColumns={2}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <GridProduct
          onPress={() =>
            ToastAndroid.show('item: ' + ' ' + item.id, ToastAndroid.SHORT)
          }
          item={item}
        />
      )}
      style={{alignSelf: 'center'}}
    />
  );
};

export default ProductGridList;
