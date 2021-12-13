import {getSize, width} from '@utils/responsive';
import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import LottieView from 'lottie-react-native';
const Loading = props => {
  return (
    <View
      style={{
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: props.backgroundColor !== 'none' && 'white',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 5000,
      }}>
      <LottieView
        source={require('./8370-loading.json')}
        autoPlay
        loop
        style={{width: width / 1.5, height: width / 1.5}}
      />
      {/* <ActivityIndicator size="large" color="'rgba(0, 0, 255, 1)'" /> */}
      {/* <ActivityIndicator size="large" color="'rgba(250, 173, 20, 0.9)'" /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});

export default Loading;
