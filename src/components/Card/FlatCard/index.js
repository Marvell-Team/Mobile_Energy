import React,{useEffect, useState} from 'react';
import {Pressable, Image} from 'react-native';
import {icons} from '@assets';
import {theme} from '@theme';
import {Block, Text, Header, Thumbnail} from '@components';
import styles from './style';
import {useNavigation} from '@react-navigation/native';
import { routes } from '@navigation/routes';
function timeSince(date) {
  const d1 = new Date(date);
  const result = d1.getTime();
  var seconds = Math.floor((new Date() - result) / 1000);

  var interval = seconds / 31536000;

  if (interval > 1) {
    return Math.floor(interval) + " năm trước";
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + " tháng trước";
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + " ngày trước";
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + " giờ trước";
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + " phút trước";
  }
  return Math.floor(seconds) + " giây trước";
}

const FlatCard = ({item, getBillDetailByIdAction}) => {
  const navigation = useNavigation();
  const [imageProduct, setImageProduct] = useState([]);

  const {nameProduct} = item.id_billdetail.products[0].id_product;
  const {image} = item.id_billdetail.products[0].id_product.id_image.nameImage[0];

  // useEffect(() => {
  //   const product=item.id_billdetail.products;
  //   if(product.length>0){
  //     console.log(product[0].id_product.id_image.nameImage[0]);
  //     console.log('======================>>>>>>>>>>>>>>>> IMAGE: ')
  //   }
  // }, [item])

  useEffect(() => {
    if (image !== null) {
      setImageProduct(item.id_billdetail.products[0].id_product.id_image.nameImage[0]);
      console.log(item.id_billdetail.products[0].id_product.id_image.nameImage[0]);
      console.log(
        '===============>>>>>>>>>>>>>>>>>>>>> Image Product ==========>>>>>>>>>>>>>>>>',
      );
    }
  }, [image]);

  //nham 
 //thui tui cho ong tu set zo nhe
 //user  name: item.id_user.name_user  image:item.id_user.image tí tự copy vao
 // phần product ay ông custom them cho tui cái mã id thui nó nằm trên content
 //prodct  image : item.id_billdetail.products[0].id_product.id_image.nameImage[0]

  //const {id_product, content, date, id_image} = item;
  //console.log(id_image.nameImage[0]);

  //console.log('==================================== id_image.nameImage[0]');
  //console.log(item.data.id_billdetail.products.id_product.nameProduct);
  //console.log('==================================== nameProduct');
  //ong cho hinh anh cai avatar la cua ca nhan nha neu chua co hinh anh thi cho vao cai incon.avt
  //Cái hình product bó tay rồi hả? // ko lay ra r do // tai co card no ko hinh anh 
  //nen ms underfile ong bo vao cai useState r setImage vao cho cho 
  //dieu kien luon con tui chỉnh lại cái card cho
  return (
    <Pressable onPress={() => {
      getBillDetailByIdAction(item.id_billdetail._id),
      console.log(item)
      console.log(item.id_billdetail._id)

      console.log('========================>>>>>>>>>>>>>>>>>>>>> ID_BILLDETAIL')
      navigation.navigate(routes.ORDERDETAIL,{id:item.id_billdetail._id});
    }}>
      <Block flex column margin={8} backgroundColor={theme.colors.white} borderRadius={8}> 
        <Block flex row>
          <Block style={styles.view}>

            <Thumbnail
              style={styles.viewIcon}
              source={icons.dbell}
              imageStyle={styles.inViewIcon}
              resizeMode='contain'
               />
              
            {/* <Thumbnail
              style={styles.viewIsSeen}
              source={ {uri: ''}}
              imageStyle={styles.inViewIsSeen} /> */}

          </Block>
          

          <Block flex column justifyCenter>
            <Text style={styles.txtTitle}> {item.content} </Text>
            <Text style={styles.txtTime}> {timeSince(item.date)} </Text>
          </Block>

          </Block>
          <Block flex row alignCenter style={styles.viewContent}>
                
            <Image
              style={styles.viewContentImage}
              source={{uri: imageProduct}}/>

            <Text style={styles.txtContent}> Mã đơn hàng: {item._id} </Text>

          </Block>

        </Block>

    </Pressable>
  );
};

export default FlatCard;
