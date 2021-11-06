import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, Image, StatusBar } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from './colors';
import Phones from './Phones';


const Category = ({ }) => {
  const CartCard = ({ item }) => {
    return (
      <View style={style.cartCard}>
        <View style={{}}>
          <Image source={item.image} style={{ height: 80, width: 80,borderRadius:15}} />
        </View>
        <View
          style={{
            width:80,
          }}>
          <Text style={{ fontSize:18,fontWeight: 'bold' }}>{item.name}</Text>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
      <View style={style.header}>
        <Icon name="arrow-back-ios" size={28} color="black" />
        <Text style={{ fontSize: 20, color: COLORS.dark }}>Danh Mục Sản Phẩm</Text>
      </View>
      <FlatList 
      
        showsVerticalScrollIndicator={false}
        data={Phones}
        horizontal={false}
        numColumns={4}
        renderItem={({ item }) => <CartCard item={item}
        
        
//tu xu di
        />}
      />
    </SafeAreaView>
  );
};
const style = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    backgroundColor: COLORS.white,
    paddingTop: StatusBar.currentHeight + 12,
    paddingBottom: 12,
  },
  cartCard: {
    marginVertical:6,
    marginHorizontal:4,
    paddingVertical:8,
    paddingHorizontal:8

    
  },
  
});


export default Category;
