import {StyleSheet, Dimensions} from 'react-native';
import {theme} from '@theme';

const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  thumb: {
    width: 120,
    height: 120,
    marginTop: height * 0.05,
    marginBottom: height * 0.02,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  txtTitle: {
    marginBottom: 16,
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.colors.primary,
    textAlign: 'center',
  },
  // image: {
  //   width: 20,
  //   height: 20,
  // },
  input: {
    marginVertical: height * 0.01,
  },
  forgot: {
    alignSelf: 'flex-end',
  },
  forgotTxt: {
    fontSize: 15,
    textAlign: 'right',
    marginHorizontal: 3,
    marginVertical: 5,
  },
  button: {
    backgroundColor: theme.colors.primary,
  },
  textBtn: {
    fontSize: 15,
  },
  txtOR: {
    fontSize: 17,
    textAlign: 'center',
    marginVertical: 8,
  },
  viewDif: {
    alignSelf: 'center',
    marginVertical: 5,
  },
  thumb1: {
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignSelf: 'center',
    marginHorizontal: 32,
  },
  signUp: {
    marginTop: height * 0.15,
    marginBottom: height * 0.02,
  },
  txtSignUp: {
    color: theme.colors.primary,
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
