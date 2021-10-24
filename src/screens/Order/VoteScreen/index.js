import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  StatusBar,
  Dimensions,
  ToastAndroid,
  ImageBackground,
  Button,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {icons} from '@assets';
import {theme} from '@theme';
import {routes} from '@navigation/routes';
import styles from './style';

const VoteScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        source={icons.bg}
        style={styles.image}
      />
      <View style={styles.body}>
        <Text style={styles.text_1}>Bạn nghĩ sao về</Text>
        <Text style={styles.text}>Ứng dụng này</Text>
        <Text style={styles.text_1}>
          Hãy đánh giá về ứng dụng của chúng tôi
        </Text>

        <View style={styles.icon}>
          <Image source={icons.phanno} style={styles.check} />
          <Image source={icons.buon} style={styles.check} />
          <Image source={icons.binhthuong} style={styles.check} />
          <Image source={icons.vui} style={styles.check} />
          <Image source={icons.lmao} style={styles.check} />
        </View>

        <View style={styles.textin}>
          <TextInput placeholder="Hãy chia sẻ suy nghĩ của bạn..." />
        </View>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate(routes.VOTE_FINISH_SCREEN)}
        style={styles.button}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>TIẾP TỤC</Text>
      </TouchableOpacity>
    </View>
  );
};
export default VoteScreen;
