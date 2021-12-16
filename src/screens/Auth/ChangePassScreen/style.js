import {StyleSheet, Dimensions} from 'react-native';
import {theme} from '@theme';
import {getSize, height, width} from '@utils/responsive';


export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    position: 'relative',
  },

  viewEdit: {
    backgroundColor: theme.colors.white,
  },

  viewText: {
    backgroundColor: theme.colors.white,
    height: getSize.m(80),
  },

  textInput: {
    height: getSize.m(48),
    backgroundColor: theme.colors.white,
    borderColor: '#FFF',
    alignSelf: 'flex-start',
    borderBottomColor: theme.colors.gray,
    borderRadius: 0,
    borderWidth: 0.5,
    paddingLeft: 0,
  },

  txtTitle: {
    color: theme.colors.black,
    marginLeft: getSize.m(4),
  },

  viewButtonGetOTP: {
    height: getSize.v(52),
    width: '92%',
    backgroundColor: theme.colors.primary,
    justifyContent: 'center',
    position: 'absolute',
    alignSelf: 'center',
    alignItems: 'center',
    bottom: getSize.m(16),
    borderRadius: 6,
  },

  txtButtonGetOTP: {
    fontSize: getSize.m(18),
    fontWeight: 'bold',
    backgroundColor: theme.colors.blue,
  },

  txtError: {
    fontSize: getSize.m(16),
    textAlign: 'center',
    color: theme.colors.red,
  },

  viewBtn: {
    flex: 1,
    justifyContent: 'flex-end',
  },

  button: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent:'center',
    borderRadius: 6,
  },

});
