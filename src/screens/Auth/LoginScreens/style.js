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
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.colors.lightGray,
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
    color: theme.colors.gray,
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
    marginHorizontal: 24,
  },
  signUp: {
    marginVertical: height * 0.03,
  },
  txtSignUp: {
    color: theme.colors.primary,
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
