import {StyleSheet, Dimensions} from 'react-native';
import {theme} from '@theme';
import {getSize, height, width} from '@utils/responsive';


export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    position: 'relative',
  },

  viewLogo: {
    width: getSize.m(100),
    height: getSize.m(130),
    marginTop: height * 0.12,
    marginBottom: height * 0.04,
    justifyContent: 'center',
    alignSelf: 'center',
  },

  viewInLogo: {
    width: '100%',
    height: '100%',
  },

  viewFormLogin: {
    backgroundColor: theme.colors.white,
    color: theme.colors.black,
  },

  txtTitle: {
    fontSize: getSize.s(18),
    color: theme.colors.secondary,
    textAlign: 'left',
  },

  txtInput: {
    marginVertical: height * 0.01,
    color: theme.colors.black,
    backgroundColor: theme.colors.smoke,
    borderWidth: 1,
    borderColor: theme.colors.grey,
    borderRadius: 8,
  },

  viewForgotPassword: {
    alignSelf: 'flex-end',
  },

  txtForgotPassword: {
    fontSize: getSize.s(16),
    textAlign: 'right',
    color: theme.colors.secondary,
  },

  viewButtonRegister: {
    backgroundColor: theme.colors.primary,
    height: getSize.m(56),
  },

  txtButtonRegister: {
    fontSize: getSize.v(18),
    fontWeight: 'bold',
  },

  txtLoginWith: {
    fontSize: getSize.s(17),
    textAlign: 'center',
    marginVertical: 16,
    color: theme.colors.greyTitle,
  },

  viewLoginWith: {
    alignSelf: 'center',
    marginVertical: height * 0.04,
  },

  thumb1: {
    width: getSize.m(45),
    height: getSize.m(45),
    justifyContent: 'center',
    alignSelf: 'center',
    marginHorizontal: 16,
  },

  viewSignIn: {
    position: 'absolute',
    bottom: 0,
    alignSelf:'center',
    height: getSize.m(30),
  },

  txtSignIn: {
    color: theme.colors.primary,
    fontSize: getSize.s(14),
    fontWeight: 'bold',
  },

  txtErorr: {
    fontSize: 16,
    textAlign: 'center',
    color: theme.colors.red,
  },

});
