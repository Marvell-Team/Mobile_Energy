import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Button, Header} from '@components';
import { icons } from '@assets';
import { theme } from '@theme';
import { getSize } from '@utils/responsive';
const {width} = Dimensions.get('window');
const {height} = Dimensions.get('window');

const OrderLocation = () => {
  const navigation = useNavigation();
  const [pickerValue, setPickerValue] = useState('Nam');
  return (
    <View style={styles.container}>
      <Header iconLeft={icons.back} title="Địa chỉ nhận hàng" />
      <View style={styles.body}>
        <Text style={styles.text}>Họ tên</Text>
        <TextInput placeholder={'Nhập họ tên'} style={styles.textin} />

        <Text style={styles.text}>Số điện thoại</Text>
        <TextInput placeholder={'01232130823'} style={styles.textin} />

        <Text style={styles.text}>Địa chỉ cụ thể</Text>
        <TextInput placeholder={'số nhà, đường'} style={styles.textin} />

        <Text style={styles.text}>Tỉnh/ thành phố</Text>
        <TextInput placeholder={'TP. HCM'} style={styles.textin} />

        <Text style={styles.text}>Quận/ huyện</Text>
        <TextInput placeholder={'huyện Củ Chi'} style={styles.textin} />

        <Text style={styles.text}>Phường/ xã</Text>
        <TextInput placeholder={'xã Tân Phú Trung'} style={styles.textin} />
      </View>

      <View style={styles.footer}>
          <Button style={styles.button} title="Lưu địa chỉ" />
      </View>
    </View>
  );
};
export default OrderLocation;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    paddingVertical: getSize.s(24),
    backgroundColor: theme.colors.white,
    paddingHorizontal: getSize.s(12),
  },
  footer: {
    width: width,
    paddingVertical: getSize.s(12),
    position: 'absolute',
    justifyContent: 'center',
    bottom: 0,
    backgroundColor: theme.colors.white
  },
  image: {
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'Arial',
    marginTop: getSize.v(8),
  },
  textin: {
    borderBottomWidth: 1,
    borderColor: theme.colors.lightGray,
    height: 45,
  },
  picker: {
    borderBottomWidth: 0.5,
  },
  button: {
    marginVertical: getSize.v(10),
    backgroundColor: theme.colors.primary,
    marginHorizontal:  getSize.s(12),
  },
});
