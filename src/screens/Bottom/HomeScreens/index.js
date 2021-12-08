import React, {useState, useCallback, useEffect} from 'react';
import {
  Block,
  Button,
  Header,
  Text,
  TextInput,
  Thumbnail,
  CategoryItem,
  ProductCard,
  ProductCard2,
} from '@components';
import {View, Pressable, FlatList, ScrollView} from 'react-native';
import styles from './style';
import {icons} from '@assets';
import {theme} from '@theme';
import {category, listProduct} from '@utils/dummyData';
import {useIsFocused} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import {routes} from '@navigation/routes';
import Loading from '@components/Loadding/Loading';

import {
  getProductbyCategories,
  getProductbyIdAction,
  getProduct,
} from '../../../redux/actions';
import {useData} from 'config/config';
import {connect} from 'react-redux';
import {getCateGoryAction} from '@redux/actions';
import {getSize} from '@utils/responsive';

const mapStateToProps = state => {
  console.log(state.getProductByCategoriesReducer.data);
  return {
    error: state.getProductByCategoriesReducer
      ? state.getProductByCategoriesReducer.error
      : null,
    data: state.getProductByCategoriesReducer
      ? state.getProductByCategoriesReducer.data
      : null,
    loadding: state.getProductByCategoriesReducer
      ? state.getProductByCategoriesReducer.loadding
      : null,

    errorCate: state.getCategoriesReducer
      ? state.getCategoriesReducer.error
      : null,
    data1Cate: state.getCategoriesReducer
      ? state.getCategoriesReducer.data
      : null,
    loaddingCate: state.getCategoriesReducer
      ? state.getCategoriesReducer.loadding
      : null,

    errorPrdt: state.getProductReducer ? state.getProductReducer.error : null,
    dataPrdt: state.getProductReducer ? state.getProductReducer.data : null,
    loaddingPrdt: state.getProductReducer
      ? state.getProductReducer.loadding
      : null,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getProductbyCategories: categori => {
      dispatch(getProductbyCategories(categori));
    },
    getProductbyIdAction: id => {
      dispatch(getProductbyIdAction(id));
    },
    getCateGoryAction: categori => {
      dispatch(getCateGoryAction(categori));
    },
    getProduct: categori => {
      dispatch(getProduct(categori));
    },
  };
};

const HomeScreens = ({
  data,
  getProductbyCategories,
  getProductbyIdAction,
  loadding,
  getProduct,
  error,
  dataPrdt,
  getCateGoryAction,
  data1Cate,
  errorCate,
  errorPrdt,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [salesList, setSalesList] = useState([]);
  const [dataSell, setDataSell] = useState([]);
  const [dataCate, setDataCate] = useState([]);
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getProductbyCategories({name: 'PHONE'});
  }, []);
  useEffect(() => {
    if (dataPrdt !== null) {
      setDataSell(dataPrdt.data);
    }
  }, [dataPrdt]);
  useEffect(() => {
    if (data !== null) {
      setSalesList(data.data);
    }
  }, [data]);
  useEffect(() => {
    if (data1Cate !== null) {
      setDataCate(data1Cate.data);
    }
  }, [data1Cate]);
  useEffect(() => {
    getCateGoryAction('PHONE');
    getProduct({
      price: null,
      sell: 1,
    });
  }, []);

  useEffect(() => {
    setLoading(loadding)
  }, [loadding])

  useEffect(() => {
    if(error !== null){
      console.log(error);
    }
  }, [error])

  useEffect(() => {
    if(errorCate !== null){
      console.log(errorCate);
    }
  }, [errorCate])

  useEffect(() => {
    if(errorPrdt !== null){
      console.log(errorPrdt);
    }
  }, [errorPrdt])

  const handlePressCategory = index => {};

  const blockListProduct = useCallback(({title, data}) => {
    // console.log('DATA >>> ', salesList);
    return (
      <Block style={styles.blockProductContainer}>
        <Block style={styles.blockTitle}>
          <Text style={styles.textTitle}>{title}</Text>
          <Pressable
            onPress={() => getProductbyCategories('PHONE')}
            style={styles.viewMore}>
            <Text style={styles.txtMore}>Xem thêm</Text>
            <Thumbnail
              source={icons.next}
              style={{width: 22, height: 22}}
              imageStyle={{tintColor: theme.colors.primary}}
            />
          </Pressable>
        </Block>
        <FlatList
          data={data}
          style={{alignSelf: 'center', marginTop: 15}}
          showsHorizontalScrollIndicator={false}
          horizontal
          renderItem={({item, index}) =>
            item.id_category !== null && (
              <ProductCard
                getProductbyIdAction={getProductbyIdAction}
                item={item}
              />
            )
          }
        />
      </Block>
    );
  });

  return (
    <Block flex style={styles.container}>
      <Block row style={styles.header}>
        <Text style={[styles.headerTitle, {fontWeight: 'bold'}]}>
          Energy Moblie
        </Text>
        <Thumbnail
          source={icons.search}
          style={styles.viewIcon}
          resizeMode="contain"
          imageStyle={{
            width: '70%',
            height: '70%',
            tintColor: theme.colors.primary,
          }}
          onPress={() => navigation.navigate(routes.SEARCHSCREEN)}
        />
      </Block>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Block style={styles.blockTop}>
          <Thumbnail
            source={{
              uri: 'https://t4.ftcdn.net/jpg/02/14/36/43/360_F_214364367_ybIaCyV7swPGFwA231CGoy0sMlVJZSxO.jpg',
            }}
            style={styles.bannerBlock}
            imageStyle={styles.banner}
          />
        </Block>
        <Block style={styles.blockCategory}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <FlatList
              data={dataCate}
              style={{alignSelf: 'center'}}
              numColumns={5}
              renderItem={({item}) => <CategoryItem item={item} />}
            />
          </ScrollView>
        </Block>
        {blockListProduct({title: 'SẢN PHẨM BÁN CHẠY', data: dataSell})}
        {blockListProduct({title: 'PHỤ KIỆN PHỔ BIẾN', data: salesList})}
        <Text
          style={[
            styles.textTitle,
            {
              fontSize: getSize.m(20),
              fontWeight: 'bold',
              marginLeft: getSize.m(10),
            },
          ]}>
          GỢI Ý HÔM NAY
        </Text>
        <Block justifyCenter alignCenter>
          <FlatList
            data={salesList}
            numColumns={2}
            renderItem={({item}) => (
              <ProductCard2
                item={item}
                getProductbyIdAction={getProductbyIdAction}
              />
            )}
          />
        </Block>
      </ScrollView>
      {/*Có cái này mới hiện loading!!!*/}
      {loading && (<Loading/>)}
    </Block>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreens);
