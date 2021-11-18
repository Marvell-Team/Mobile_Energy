import React, {useState} from 'react';
import {ToastAndroid, StyleSheet} from 'react-native';
import {icons} from '@assets';
import {Block, Header, NotifiList, List} from '@components';
import {theme} from '@theme';
import FavoList from '@components/List/FavoList';
import {useNavigation} from '@react-navigation/native';
import {routes} from '@navigation/routes';

const list = [
  {
    idFL: 1,
    imageFL: 'https://smartviets.com/template/plugins/timthumb.php?src=/upload/image/slide/13/13%20pro%20tr%E1%BA%AFng.jpg&w=770&h=770&q=80',
    titleFL: 'iPhone 13 Bro Mac 521 GB hàng new',
    priceFL: '43.000.000',
    boughtFL: 'Đã bán 69',
  },
  {
    idFL: 2,
    imageFL: 'https://product.hstatic.net/1000309862/product/iphone-13-pro-max-gold-select_a53789a2d76347738ac56f36d919c729_1024x1024.png',
    titleFL: 'iPhone 13 Bro Mac 521 GB hàng new',
    priceFL: '43.000.000',
    boughtFL: 'Đã bán 69',
  },
  {
    idFL: 3,
    imageFL: 'https://product.hstatic.net/1000309862/product/iphone-13-pro-max-graphite-select_69ee5a81053048659803770ce28f79f4_1024x1024.png',
    titleFL: 'iPhone 13 Bro Mac 521 GB hàng new',
    priceFL: '43.000.000',
    boughtFL: 'Đã bán 69',
  },
  {
    idFL: 4,
    imageFL: 'https://product.hstatic.net/1000309862/product/iphone-13-pro-max-blue-select_61df59b840354f50b0fc2567e92ede2a_1024x1024.png',
    titleFL: 'iPhone 13 Bro Mac 521 GB hàng new',
    priceFL: '43.000.000',
    boughtFL: 'Đã bán 69',
  },
  {
    idFL: 5,
    imageFL: 'https://smartviets.com/template/plugins/timthumb.php?src=/upload/image/slide/13/13%20pro%20tr%E1%BA%AFng.jpg&w=770&h=770&q=80',
    titleFL: 'iPhone 13 Bro Mac 521 GB hàng new',
    priceFL: '43.000.000',
    boughtFL: 'Đã bán 69',
  },
  {
    idFL: 6,
    imageFL: 'https://product.hstatic.net/1000309862/product/iphone-13-pro-max-gold-select_a53789a2d76347738ac56f36d919c729_1024x1024.png',
    titleFL: 'iPhone 13 Bro Mac 521 GB hàng new',
    priceFL: '43.000.000',
    boughtFL: 'Đã bán 69',
  },
];
const FavoriteList = () => {
  const navigation = useNavigation();
  const [data, setData] = useState(list);
  console.log(data);
  return (
    <Block flex style={styles.container}>
      <Header iconLeft={icons.back}   
                leftPress={() =>
                  navigation.navigate(routes.BOTTOMTABBAR, {
                    screen: routes.PROFILESCREENS,
                  })
                }         
                   title="Danh sách yêu thích"/>

        <FavoList data={data} />
    </Block>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white, 
  },
})

export default FavoriteList;
