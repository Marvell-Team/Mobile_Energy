import {StyleSheet, Dimensions} from 'react-native';
import {theme} from '@theme';
import { getSize } from '@utils/responsive';

const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    position: 'relative',
  },

  viewForm: {
    backgroundColor: theme.colors.white,
    color: theme.colors.black,
  },

  txtTitle: {
    fontSize: getSize.m(20),
    color: theme.colors.blackText,
    textAlign: 'left',
    fontWeight: 'normal',
  },

  txt: {
    fontSize: getSize.m(16),
    color: theme.colors.blackText,
    textAlign: 'left',
  },

  txtNumberPhone: {
    fontSize: getSize.m(16),
    color: theme.colors.blackText,
    textAlign: 'left',
  },

  viewRegion: {
    width: '14%',
    height: getSize.m(48),
    backgroundColor: theme.colors.white,
    paddingLeft: 0,
    textAlign: 'left',
    justifyContent: 'center',
    borderBottomColor: theme.colors.gray,
    borderRadius: 0,
    borderBottomWidth: 0.5,
  },

  txtRegion: {
    borderColor: '#FFF',
    borderBottomColor: theme.colors.gray,
    borderRadius: 0,
    paddingLeft: 0,
    textAlign: 'left',
    borderColor: '#FFF',

  },

  txtInput: {
    width: '100%',
    height: getSize.m(48),
    backgroundColor: theme.colors.white,
    borderColor: '#FFF',
    borderBottomColor: theme.colors.gray,
    borderRadius: 0,
    borderWidth: 0.5,
    paddingLeft: 0,
    },

  viewBtn:{
    flex:1,
    justifyContent: 'flex-end',
  },
  
  viewButtonGetOTP: {
    height: getSize.v(52),
    width: '100%',
    backgroundColor: theme.colors.primary,
    justifyContent:'center',
    alignSelf:'center',
    alignItems: 'center',
    borderRadius: 6,
  },

  txtButtonGetOTP: {
    fontSize: getSize.m(18),
    fontWeight: 'bold',
    backgroundColor: theme.colors.blue,
  },

  txtLoginWith: {
    fontSize: getSize.m(17),
    textAlign: 'center',
    marginVertical: getSize.m(16),
    color: theme.colors.greyTitle,
  },

  txtError: {
    fontSize: getSize.m(16),
    textAlign: 'center',
    color: theme.colors.red,
  },

  button: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent:'center',
    borderRadius: 6,
  },

  viewInput: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  viewInInput: {
    paddingVertical: getSize.m(16),
    width: getSize.s(46),
    margin: getSize.m(8),
    borderBottomWidth: 2,
    borderColor: theme.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },

  txtInInput: {
    textAlign: 'center',
    fontSize: getSize.m(20),
  },

  viewFormResend: {
    position: 'relative',
    marginBottom: getSize.m(16)
  },

  viewDelete: {
    alignSelf: 'flex-end',
    position: 'absolute',
    left: 0
  },

  viewResendOTP: {
    alignSelf: 'flex-end',
    position: 'absolute',
    right: 0,
  },

  txtDelete: {
    fontSize: getSize.m(16),
    textAlign: 'left',
  },

  txtResendOTP: {
    fontSize: getSize.m(16),
    textAlign: 'right',
    alignSelf: 'flex-end',
  },

});
