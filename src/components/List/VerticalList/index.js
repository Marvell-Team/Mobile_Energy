import React from 'react';
import {FlatList, ToastAndroid} from 'react-native';
import {FlatCard} from '@components';
import {useNavigation} from '@react-navigation/native';

const VerticalList = ({data}) => {
  const navigation = useNavigation();
  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <FlatCard
          onPress={() =>
            ToastAndroid.show('item: ' + ' ' + item.content, ToastAndroid.SHORT)
          }
          morePress={() =>
            ToastAndroid.show('Option: ' + item.id, ToastAndroid.SHORT)
          }
          item={item}
        />
      )}
    />
  );
};

export default VerticalList;
