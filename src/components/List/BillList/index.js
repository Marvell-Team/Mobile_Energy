import React, {useState} from 'react';
import {FlatList, ToastAndroid} from 'react-native';
import {BillCard} from '@components';
import {useNavigation} from '@react-navigation/native';

const BillList = ({data, style}) => {
  const navigation = useNavigation();
  //   const [isShow, setShow] = useState(item.show);
  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <BillCard
          onPress={() =>
            ToastAndroid.show('item: ' + ' ' + item.id, ToastAndroid.SHORT)
          }
          item={item}
        />
      )}
      style={style}
    />
  );
};

export default BillList;
