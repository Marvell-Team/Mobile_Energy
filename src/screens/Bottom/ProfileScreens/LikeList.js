import React, {useEffect, useState} from 'react';
import {
  ToastAndroid,
  StyleSheet,
  TouchableOpacity,
  Text,
  FlatList,
  StatusBar,
} from 'react-native';
import {icons} from '@assets';
import {Block, Header, Thumbnail} from '@components';
import {theme} from '@theme';
import {useNavigation, useRoute} from '@react-navigation/native';
import {getSize} from '@utils/responsive';
import {connect} from 'react-redux';
import {routes} from '@navigation/routes';
import ProductCard2 from '@components/Card/ProductCard2';
import {getLikeByUserAction} from '../../../redux/actions';
import {useData} from 'config/config';
import Loading from '@components/Loadding/Loading';
import {getProductbyIdAction} from '../../../redux/actions';
const mapStateToProps = state => {
  console.log(state.getLikeByUserReducer.data);
  console.log(
    '----------->>>>>>>>>>>>> getLikeByUserReducer --------->>>>>>>>>>> ',
  );
  return {
    error: state.getLikeByUserReducer ? state.getLikeByUserReducer.error : null,
    data1: state.getLikeByUserReducer ? state.getLikeByUserReducer.data : null,
    loadding: state.getLikeByUserReducer
      ? state.getLikeByUserReducer.loadding
      : null,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getLikeByUserAction: id => {
      dispatch(getLikeByUserAction(id));
    },
    getProductbyIdAction: id => {
      dispatch(getProductbyIdAction(id));
    },
  };
};

const categori = [
  {id: 2, name: 'Liên quan'},
  {id: 3, name: 'Mới nhất'},
  {id: 4, name: 'Bán chạy'},
];

const LikeList = ({
  data1,
  getLikeByUserAction,
  loadding,
  error,
  getProductbyIdAction,
}) => {
  const navigation = useNavigation();
  const [status, setStatus] = useState();
  const [data2, setData2] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (useData.token !== null && useData.id !== null) {
      getLikeByUserAction(useData.id);
      // console.log(useData.id);
      // console.log(
      //   '---------------->>>>>>>>>>>>>>> getLikeByUserAction(useData.id):',
      // );
    }
  }, [getLikeByUserAction]);

  useEffect(() => {
    if (data1 !== null) {
      setData2(data1.data);
      // console.log(data1.data);
      // console.log(
      //   '----------->>>>>>>>>>>>>> LikeList useEffect --------->>>>>>>>>>>',
      // );
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

  return (
    <Block style={styles.container}>
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
          <TouchableOpacity
            style={{width: '100%', flex: 18, height: getSize.s(35)}}
            onPress={() => {
              navigation.navigate(routes.SEARCHSCREEN);
            }}>
            <Block
              alignCenter
              row
              
              style={{backgroundColor: '#77C8EB'}}
              width={'98%'}
              height={'100%'}
              paddingHorizontal={getSize.m(8)}>
              <Thumbnail
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

      <Block alignCenter>
        {Array.isArray(data2) && data2.length ? (
          <FlatList
            data={data2}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            renderItem={({item}) => (
              <ProductCard2
                getProductbyIdAction={getProductbyIdAction}
                item={item.id_product}
              />
            )}
          />
        ) : (
          <Block style={styles.viewTxt}>
            <Text style={styles.txt}>Bạn chưa like bài đăng nào!</Text>
          </Block>
        )}
      </Block>
      {/*Có cái này mới hiện loading!!!*/}
      {loading && <Loading />}
    </Block>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  header: {
    paddingTop: StatusBar.currentHeight + 16,
  },
  viewTxt: {
    height: '100%',
    color: theme.colors.black,
    fontSize: 18,
    justifyContent: 'center',
  },
  txt: {
    color: theme.colors.black,
    fontSize: 18,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LikeList);
