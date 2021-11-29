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
} from '@components';
import {View, Pressable, FlatList, ScrollView} from 'react-native';
import styles from './style';
import {icons} from '@assets';
import {theme} from '@theme';
import {category, listProduct} from '@utils/dummyData';
import {useIsFocused} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import {routes} from '@navigation/routes';

import {
  getProductbyCategories,
  getProductbyIdAction,
} from '../../../redux/actions';
import {useData} from 'config/config';
import {connect} from 'react-redux';
import {getCateGoryAction} from '@redux/actions';

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
  };
};

const HomeScreens = ({
  data,
  getProductbyCategories,
  getProductbyIdAction,
  loadding,
  error,
  getCateGoryAction,
  data1Cate,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [salesList, setSalesList] = useState([]);
  const [dataCate, setDataCate] = useState([]);
  const navigation = useNavigation();
  useEffect(() => {
    getProductbyCategories('PHONE');
  }, [getProductbyCategories]);
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
  }, []);

  const handlePressCategory = index => {};

  const blockListProduct = useCallback(() => {
    // console.log('DATA >>> ', salesList);
    return (
      <Block style={styles.blockProductContainer}>
        <Block style={styles.blockTitle}>
          <Text style={styles.textTitle}>TOP SẢN PHẨM ĐANG GIẢM GIÁ</Text>
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
          data={salesList}
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
        {blockListProduct()}
        {blockListProduct()}
      </ScrollView>
    </Block>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreens);
