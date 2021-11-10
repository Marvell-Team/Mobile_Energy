import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  StatusBar,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from './colors';
import Phones from './Phones';
import {PrimaryButton} from './Button';
import Count from '@components/Count';
import {formatCurrency} from '@utils/utils';
import {connect} from 'react-redux';
import {
  getCartByUser, UpdateCartByUser
} from '../../../redux/actions';
import { useData } from 'config/config';
const mapStateToProps = state => {
  return {
    error: state.getCartByUserReducer
      ? state.getCartByUserReducer.error
      : null,
    data: state.getCartByUserReducer
      ? state.getCartByUserReducer.data
      : null,
    dataUpdate: state.updateCartByCartReducer
      ? state.updateCartByCartReducer.data
      : null,
    loadding: state.getCartByUserReducer
      ? state.getCartByUserReducer.loadding
      : null,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCartByUser: id => {
      dispatch(getCartByUser(id));
    },
    UpdateCartByUser: input =>{
      dispatch(UpdateCartByUser(input))
    },
  };
};
const CartScreens = ({data,getCartByUser,UpdateCartByUser,dataUpdate}) => {
  
  const [dataCart, setDataCart] = useState([]);
  const [dataID, setDataID] = useState('');
  const [dataTotal, setDataTotal] = useState(0);
  useEffect(() => {
    if(useData.token!==null){
      getCartByUser(useData.id)
    }
  }, [UpdateCartByUser,dataUpdate,getCartByUser]);
  useEffect(() => {
    if(data !== null){
      console.log(data.data)
       setDataCart(data.data.products);
       setDataID(data.data._id);
       setDataTotal(data.data.total)
    }
  }, [data])



  
  return (
    <SafeAreaView style={{backgroundColor: COLORS.white, flex: 1}}>
      <View style={style.header}>
        <Icon name="arrow-back-ios" size={28} color="white" />
        <Text style={{fontSize: 20, color: COLORS.white}}>Giỏ Hàng</Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 80}}
        data={dataCart}
        renderItem={({item,index}) => <CartCard setDataTotal={setDataTotal} dataTotal={dataTotal} item={item} index={index} dataCart={dataCart} dataID={dataID} UpdateCartByUser={UpdateCartByUser}/>}
        ListFooterComponentStyle={{paddingHorizontal: 20, marginTop: 20}}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 12,
          position: 'absolute',
          bottom: 8,
          marginTop: 8,
        }}>
        <View style={{width: '50%', justifyContent: 'center'}}>
          <Text style={{fontSize: 18}}>Tổng</Text>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: 'red'}}>
            {formatCurrency(dataTotal)}
          </Text>
        </View>
        <View style={{width: '50%'}}>
          <PrimaryButton title="Thanh Toán" onPress={()=>{getCartByUser(useData.id),console.log('aa')}}/>
        </View>
      </View>
    </SafeAreaView>
  );
};
const CartCard = ({setDataTotal,item,index,dataCart,dataID,UpdateCartByUser,dataTotal}) => {
  const [amount, setAmount] = useState(0);
  useEffect(() => {
    setAmount(item.amount)
  }, [item])
  const {id_image,price_product,nameProduct}=item.id_product

  const addCart=(Carts,idcart,index)=>{
    let items=[];
    Carts[index].amount=Carts[index].amount+parseInt(1);
  
    setAmount(Carts[index].amount);
   // console.log(parseInt(dataTotal)+parseInt(price_product))
    setDataTotal(parseInt(dataTotal)+parseInt(price_product))   
    items.push(...Carts);
    console.log(dataCart)
     UpdateCartByUser({idcart:idcart,id_product:items,total:parseInt(dataTotal)-parseInt(price_product)});
    
    
  }
  const subtractCart=(Carts,idcart,index)=>{
    let items=[];
    Carts[index].amount=Carts[index].amount-parseInt(1);
    console.log(index+'aaa'+Carts[index].amount+'idcart'+idcart)
    setAmount(Carts[index].amount)
    
    items.push(...Carts);
    console.log(dataCart)
    UpdateCartByUser({idcart:idcart,id_product:items,total:parseInt(dataTotal)+parseInt(price_product)});
    
    
  }

const img = str => {
  const newstr = str.replace(/localhost/i, '10.0.2.2');
  return newstr;
};
  return (
    <View style={style.cartCard}>
      <Image source={{uri:img(id_image.nameImage[0])}} style={{height: 80, width: 80}} />
      <View
        style={{
          height: 100,
          marginLeft: 10,
          paddingVertical: 20,
          flex: 1,
        }}>
        <Text style={{fontWeight: 'bold', fontSize: 16}}>{nameProduct}</Text>
        <Text style={{fontSize: 13, color: COLORS.grey}}>
          {item.ingredients}
        </Text>
        <Text style={{fontSize: 17, fontWeight: 'bold'}}>{formatCurrency(price_product*item.amount)}</Text>
      </View>
      <View style={{marginRight: 20, alignItems: 'center'}}>
        <Count amount={amount} onPressSubtract={()=>{subtractCart(dataCart,dataID,index)}} onPressPlus={()=>{addCart(dataCart,dataID,index)}}/>
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    backgroundColor: COLORS.primary,
    paddingTop: StatusBar.currentHeight + 12,
    paddingBottom: 12,
  },
  cartCard: {
    height: 100,
    marginVertical: 5,
    marginHorizontal: 12,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderColor: COLORS.grey,
    borderWidth: 0.5,
    borderRadius: 8,
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
export default connect(mapStateToProps, mapDispatchToProps)(CartScreens);

