import React,{useEffect, useState} from 'react';
import {StyleSheet, Dimensions, Text, View} from 'react-native';
import {Thumbnail} from '@components';
import {theme} from '@theme';
import {getSize} from '@utils/responsive';
import {routes} from '@navigation/routes';
import { useNavigation,useRoute } from '@react-navigation/native';
import { getProductByCategoriesChild, } from '@redux/actions';
import {connect} from 'react-redux';
import { GET_PRODUCT_BY_CATEGORYS_CHILD } from '@redux/actions/ProductAction';


const mapStateToProps = state => {
  return {
    error: state.getProductByCategoriesChildReducer ? state.getProductByCategoriesChildReducer.error : null,
   data: state.getProductByCategoriesChildReducer ? state.getProductByCategoriesChildReducer.data : null,

   loadding: state.getProductByCategoriesChildReducer? state.getProductByCategoriesChildReducer.loadding: null,
    loadingCategories: state.getProductByCategoriesChildReducer? state.getProductByCategoriesChildReducer.loading: null,
    dataCategories: state.getProductByCategoriesChildReducer ? state.getProductByCategoriesChildReducer.data: null,
    errorCategories: state.getProductByCategoriesChildReducer ? state.getProductByCategoriesChildReducer.error : null,

};
}
const mapDispatchToProps = dispatch => {

 return {
   getProductByCategoriesChild: (id) => {
     dispatch(getProductByCategoriesChild(id));
   },
 };
};
const CategoryItem = ({item,getProductByCategoriesChild,dataCategories,data,_id}) => {
  const navigation = useNavigation();
<<<<<<< HEAD
  //  const onPress = () => {getProductByCategoriesChild(item._id)
  //  console.log('ITEM >>>>>> ', item._id);
  // const onPress= () => navigation.navigate(routes.PRODUCRTSRC);
  
  useEffect(() => { 
=======
  const onPress = () => {
   // getProductByCategoriesChild(item._id);  
    console.log(item._id)
    navigation.navigate(routes.PRODUCTCUSTOM,{id:item._id,type:GET_PRODUCT_BY_CATEGORYS_CHILD})
  };
 useEffect(() => { 
>>>>>>> d21793440c2e98dc59e45fa25cf40de728d22be5
   if(dataCategories !==null){
     console.log(dataCategories.data)
     console.log('========>aaa')
   }
 },[getProductByCategoriesChild])

  return (
    <Thumbnail
      source={{uri:item.img_categorys}}
      onPress={() =>navigation.navigate(routes.PRODUCRTSRC,{item:item._id})}
      style={styles.boxImg}
      imageStyle={styles.img_category}
      resizeMode="contain"

    />
  );
};
 export default connect (mapStateToProps, mapDispatchToProps)(CategoryItem);

const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');
const styles = StyleSheet.create({
  boxImg: {
    width: width / 6.1,
    height: width / 6.1,
    borderRadius: 8,
    backgroundColor: theme.colors.thirdy,
    padding: getSize.s(5),
    justifyContent: 'center',
    alignItems: 'center',
    margin: getSize.s(5),
  },
  img_category: {
    width: '70%',
    height: '70%',
  },
});
