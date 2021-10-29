import React, {useState, useEffect} from 'react';
import {
  ToastAndroid,
  ScrollView,
  Pressable,
  Picker,
  DatePicker,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {icons} from '@assets';
import {
  Block,
  Header,
  Thumbnail,
  Button,
  Text,
  ProductFlatList,
  ProductGridList,
} from '@components';
import styles from './style';
import {theme} from '@theme';
import {Image} from 'react-native-svg';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment, {months} from 'moment';
import {getSize} from '@utils/responsive';
import {useNavigation} from '@react-navigation/native';
import {routes} from '@navigation/routes';

const EditProfile = () => {
  const navigation = useNavigation();
  const [avatar, setAvatar] = useState();
  const [name, setName] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [email, setEmail] = useState();
  const [address, setAddress] = useState();
  const [pickerValue, setPickerValue] = useState('Nam');
  const [date1, setDate1] = useState('');
  const [date, setDate] = useState(new Date(Date.now()));
  const [show, setShow] = useState(false);

  useEffect(() => {
    convertdatetostring(null);
  }, []);

  const convertdatetostring = currentDate => {
    console.log(currentDate);
    if (currentDate === null) {
      const f1 = new Date(Date.now());
      const day = f1.getDate();
      const month = f1.getMonth();
      const Year = f1.getFullYear();
      setDate1(day + '-' + (month + 1) + '-' + Year);
    } else {
      const f1 = new Date(currentDate);
      const day = f1.getDate();
      const month = f1.getMonth();
      const Year = f1.getFullYear();
      setDate1(day + '-' + (month + 1) + '-' + Year);
    }
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');

    setDate(currentDate);
    convertdatetostring(currentDate);
  };
  return (
    <Block flex styles={styles.container}>
          <ScrollView>
      <Header
        iconLeft={icons.back}
        leftPress={() =>
          navigation.navigate(routes.BOTTOMTABBAR, {
            screen: routes.PROFILESCREENS,
          })
        }
      />
  
        <Block
          justifyCenter
          alignCenter
          paddingHorizontal={16}
          style={styles.viewAvatar}>
          <Thumbnail
            style={styles.inViewAvatar}
            source={{
              uri: 'https://scontent.fsgn5-8.fna.fbcdn.net/v/t1.6435-9/250621014_3292983924261886_8225122220548759810_n.jpg?_nc_cat=1&ccb=1-5&_nc_sid=b9115d&_nc_ohc=IHQDWDbgIwgAX83Di5T&_nc_ht=scontent.fsgn5-8.fna&oh=ea3a2bad427a4b67530c6f479b82d5f0&oe=619F7E66',
            }}
            imageStyle={styles.inAvatar}></Thumbnail>

          <Thumbnail
            style={styles.inEditViewAvatar}
            source={icons.edit}
            ></Thumbnail>
        </Block>

        <Block style={styles.viewEdit} padding={16}>
          <Block style={styles.viewText}>
            <Text style={styles.txtTitle}>Họ tên</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={setName}
              placeholder="Nhập họ tên"
            />
          </Block>

          <Block style={styles.viewText}>
            <Text style={styles.txtTitle}>
              Giới tính
            </Text>

            <Block style={styles.textInput}>
              <Picker
               
                selectedValue={pickerValue}
                onValueChange={itemValue => setPickerValue(itemValue)}>
                <Picker.Item label="Nam" value="Nam" />
                <Picker.Item label="Nữ" value="Nữ" />
                <Picker.Item label="Khác" value="Khác" />
              </Picker>
            </Block>
          </Block>

          <Block style={styles.viewText}>
            <Text style={styles.txtTitle}>Ngày sinh</Text>
            <TouchableOpacity
              style={styles.textInput}
              onPress={() => {
                setShow(true);
              }}>
              <Text style={styles.textInput}>{date1}</Text>
            </TouchableOpacity>
            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={'date'}
                is24Hour={true}
                display="default"
                onChange={onChange}
              />
            )}
          </Block>

          <Block style={styles.viewText}>
            <Text style={styles.txtTitle}>
              Số điện thoại
            </Text>
            <TextInput
            keyboardType='numeric'
              fontSize={18}
              style={styles.textInput}
              onChangeText={setPhoneNumber}
              placeholder="Nhập số điện thoại"
            />
          </Block>

          <Block style={styles.viewText}>
            <Text size={15} style={styles.txtTitle}>
              Email
            </Text>
            <TextInput

              fontSize={18}
              style={styles.textInput}
              onChangeText={setEmail}
              placeholder="Nhập Email"
            />
          </Block>

          <Block style={[styles.viewText,{marginBottom: getSize.m(100)}]}>
            <Text size={15} style={styles.txtTitle}>
              Address
            </Text>
            <TextInput
              style={styles.textInput}
              onChangeText={setEmail}
              placeholder="Nhập Dia chi"
            />
          </Block>
          
        </Block>
      </ScrollView>
      <TouchableOpacity style={styles.btnSave} onPress={() => {}}>
        <Text fontSize={18} marginLeft={4} style={styles.txtSave}>
          Lưu thay đổi
        </Text>
      </TouchableOpacity>
    </Block>
  );
};

export default EditProfile;
