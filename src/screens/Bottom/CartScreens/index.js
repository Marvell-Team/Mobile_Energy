import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, Image,StatusBar} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from './colors';
import Phones from './Phones';
import {PrimaryButton} from './Button';


const CartScreens = ({}) => {
  const CartCard = ({item}) => {
    return (
      <View style={style.cartCard}>
        <Image source={item.image} style={{height: 80, width: 80}} />
        <View
          style={{
            height: 100,
            marginLeft: 10,
            paddingVertical: 20,
            flex: 1,
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 16}}>{item.name}</Text>
          <Text style={{fontSize: 13, color: COLORS.grey}}>
            {item.ingredients}
          </Text>
          <Text style={{fontSize: 17, fontWeight: 'bold'}}>đ{item.price}</Text>
        </View>
        <View style={{marginRight: 20, alignItems: 'center'}}>
          <Text style={{fontWeight: 'bold', fontSize: 18}}>2</Text>
          <View style={style.actionBtn}>
            <Icon name="remove" size={25} color={COLORS.white} />
            <Icon name="add" size={25} color={COLORS.white} />
          </View>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={{backgroundColor: COLORS.white, flex: 1}}>
      <View style={style.header}>
        <Icon name="arrow-back-ios" size={28} color="white" />
        <Text style={{fontSize: 20,color: COLORS.white}}>Giỏ Hàng</Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 80}}
        data={Phones}
        renderItem={({item}) => <CartCard item={item} />}
        ListFooterComponentStyle={{paddingHorizontal: 20, marginTop: 20}}
        
      />
       <View  
            
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal:12,
              position: 'absolute',
              bottom:8,
              marginTop:8
            }}>

             <View style={{width: '50%',justifyContent: 'center'}}>
             <Text style={{fontSize: 18,}}>
              Tổng 
            </Text>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: 'red'}}>đ50.000.000</Text> 
               </View> 
              <View style={{width: '50%',}}>
              <PrimaryButton title="Thanh Toán" />
                </View> 
        </View>
    </SafeAreaView>
  );
};
const style = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal:12,
    backgroundColor: COLORS.primary,
    paddingTop:StatusBar.currentHeight+12,
    paddingBottom:12,
    
  },
  cartCard: {
    height: 100,
    marginVertical: 5,
    marginHorizontal: 12,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderColor:COLORS.grey,
    borderWidth:0.5,
    borderRadius:8
    
    
  },
  actionBtn: {
    width: 80,
    height: 30,
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
});


export default CartScreens;
