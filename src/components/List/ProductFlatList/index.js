import React from 'react';
import {FlatList, ToastAndroid} from 'react-native';
import {FlatProduct} from '@components';
import {useNavigation} from '@react-navigation/native';

const ProductFlatList = ({data}) => {
  const navigation = useNavigation();
  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <FlatProduct
          onPress={() =>
            ToastAndroid.show('item: ' + ' ' + item.content, ToastAndroid.SHORT)
          }
          item={item}
        />
      )}
    />
  );
};

export default ProductFlatList;
