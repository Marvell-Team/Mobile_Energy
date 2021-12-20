import React, {useEffect, useState} from 'react';
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
import {icons} from '@assets';
import {theme} from '@theme';
import {getSize} from '@utils/responsive';
import {getStoreAction, getStoreByIdAction} from '@redux/actions';

import Modalpicker from '@components/Modal/ModalPicker';
const {width} = Dimensions.get('window');
const {height} = Dimensions.get('window');
import {connect} from 'react-redux';
import Loading from '@components/Loadding/Loading';

const mapStateToProps = state => {
  return {
    error: state.getStoreReducer ? state.getStoreReducer.error : null,
    data: state.getStoreReducer ? state.getStoreReducer.data : null,

    loadding: state.getStoreReducer ? state.getStoreReducer.loadding : null,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getStoreAction: () => {
      dispatch(getStoreAction());
    },
    getStoreByIdAction: id => {
      dispatch(getStoreByIdAction(id));
    },
  };
};

//
const OrderLocation = ({
  data,
  getStoreAction,
  getStoreByIdAction,
  loadding,
  error,
}) => {
  const [idlocal, setIdlocal] = useState();
  const [data1, setData1] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getStoreAction();
  }, [getStoreAction]);
  useEffect(() => {
    if (data !== null) {
      setData1(data.data);
      //  console.log(data.data)
    }
  }, [data]);

  useEffect(() => {
    setLoading(loadding);
  }, [loadding]);

  useEffect(() => {
    if (error !== null) {
      console.log(error);
      ToastAndroid.show('Lỗi: ' + error, ToastAndroid.SHORT);
    }
  }, [error]);

  const navigation = useNavigation();
  const [pickerValue, setPickerValue] = useState('Nam');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState(null);
  return (
    <View style={styles.container}>
      <Header
        iconLeft={icons.back}
        title="Địa chỉ lấy hàng"
        leftPress={() => {
          navigation.goBack();
        }}
      />
      <View style={styles.body}>
        <Text style={styles.text}>Họ tên</Text>
        <TextInput
          onChangeText={setName}
          placeholder={'Nhập họ tên'}
          style={styles.textin}
          autoFocus={true}
        />

        <Text style={styles.text}>Số điện thoại</Text>
        <TextInput
          onChangeText={setPhone}
          placeholder={'Số điện thoại'}
          style={styles.textin}
        />

        <Text style={styles.text}>Địa chỉ cụ thể</Text>
        <Modalpicker setIdlocal={setIdlocal} item={data1} />
      </View>

      <View style={styles.footer}>
        <Button
          style={styles.button}
          onPress={() => {
            getStoreByIdAction({idlocal: idlocal, name: name, phone: phone}),
              navigation.goBack();
          }}
          title="Lưu địa chỉ"
        />
      </View>
      {/*Có cái này mới hiện loading!!!*/}
      {loading && <Loading />}
    </View>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(OrderLocation);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  body: {
    paddingVertical: getSize.m(12),
    backgroundColor: theme.colors.white,
    paddingHorizontal: getSize.m(12),
  },
  footer: {
    width: width,
    position: 'absolute',
    justifyContent: 'center',
    bottom: 0,
    backgroundColor: theme.colors.white,
  },
  image: {
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'Arial',
    marginTop: getSize.m(8),
  },
  textin: {
    borderBottomWidth: 0.3,
    borderColor: theme.colors.gray,
    fontSize: 16,
  },
  picker: {
    borderBottomWidth: 0.5,
  },
  button: {
    height: getSize.v(52),
    backgroundColor: theme.colors.primary,
    marginHorizontal: getSize.m(16),
  },
});
