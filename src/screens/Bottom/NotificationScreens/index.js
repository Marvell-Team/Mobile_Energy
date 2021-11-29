import React, {useState, useEffect} from 'react';
import {ToastAndroid, FlatList, Text} from 'react-native';
import {icons} from '@assets';
import {Block, FlatCard, Header, NotifiList} from '@components';
import styles from './style';
import {connect} from 'react-redux';

import {useData} from 'config/config';
import {getBillDetailByIdAction, getNotificationByUserAction} from '@redux/actions';

const mapStateToProps = state => {
  // console.log(state.getNotificationByUserReducer.data);
  // console.log(
  //   '=============>>>>>>>>>>>>> getNotificationByUserReducer ===============>>>>>>>>>>> ',
  // );
  return {
    error: state.getNotificationByUserReducer
      ? state.getNotificationByUserReducer.error
      : null,
    data1: state.getNotificationByUserReducer
      ? state.getNotificationByUserReducer.data
      : null,
    loadding: state.getNotificationByUserReducer
      ? state.getNotificationByUserReducer.loadding
      : null,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getNotificationByUserAction: id => {
      dispatch(getNotificationByUserAction(id));
    },
    getBillDetailByIdAction: id => {
      dispatch(getBillDetailByIdAction(id));
    },
  };
};

const NotificationScreens = ({data1, getNotificationByUserAction, getBillDetailByIdAction}) => {
   const [data2, setData2] = useState([]);
  useEffect(() => {
    if (useData.token !== null && useData.id !== null) {
      getNotificationByUserAction(useData.id);
      // console.log(useData.id);
      // console.log(
      //   '============>>>>>>>>>>>> getLikeByUserAction(useData.id) =============>>>>>>>>>>>',
      // );

      // console.log(useData.token);
      // console.log('======================>>>>>>>>>>>>>>>>>>>>>> TOKEN: ');
    }
  }, [getNotificationByUserAction]);

  useEffect(() => {
    if (data1 !== null) {
      setData2(data1.data);
      // console.log(data1.data);
      // console.log(
      //   '===============>>>>>>>>>>>>>> NotificationScreens =============>>>>>>>>>>>',
      // )
    }
  }, [data1]);

  useEffect(() => {
    if (data2 !== null) {
      console.log(data2);
      console.log(
        '===============>>>>>>>>>>>>>> DATA22222222222 =============>>>>>>>>>>>',
      )
    }
  }, [data2]);

 
  // console.log(data2);
  // console.log(
  //   '===============>>>>>>>>>>>>>> data =============>>>>>>>>>>>',
  // );
  return (
    <Block flex style={styles.container}>
      <Header title="Thông báo" />
      <Block flex justifyCenter>
        {Array.isArray(data2) && data2.length ? (
          <FlatList
            data={data2.reverse()}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) =>
             <FlatCard
              getBillDetailByIdAction={getBillDetailByIdAction}
              item={item} 
            />}
          />
        ) : (
          <Text style={styles.txt}>Bạn chưa like bài đăng nào!</Text>
        )}
      </Block>
    </Block>
  );
};

export default connect(mapStateToProps,mapDispatchToProps)(NotificationScreens);
