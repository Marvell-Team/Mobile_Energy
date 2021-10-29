import {StyleSheet, Dimensions} from 'react-native';
import {theme} from '@theme';
import { getSize } from '@utils/responsive';

const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');
export default StyleSheet.create({
  container: {
    flex: 1,
   
  },

  viewEdit: {
    backgroundColor: theme.colors.white,
  },

  viewText: {
    backgroundColor: theme.colors.white,
    height: 80,
  },

  textInput: {
    fontSize:getSize.m(18),
    height: getSize.m(50),
    backgroundColor: theme.colors.white,
    justifyContent: 'center',
    borderBottomWidth: 0.5,
    borderColor: '#A6A6A6',
    paddingVertical:getSize.m(10)
  },

  viewAvatar: {
    backgroundColor: theme.colors.primary,
    height: 160,
  },

  inViewAvatar: {
    width: 90,
    height: 90,
    borderRadius: 100 / 2,
    backgroundColor: theme.colors.white,
    justifyContent: 'center',
    alignSelf: 'center',
  },

  inAvatar: {
    width: '96%',
    height: '96%',
    borderRadius: 100 / 2,
    position: 'relative',
  },

  inEditViewAvatar: {
    width: 32,
    height: 32,
    borderRadius: 100 / 2,
  
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    left: 20,
  },

  inEditAvatar: {
    width: '90%',
    height: '90%',
    borderRadius: 100 / 2,
    alignSelf: 'center',
  },

  txtUsn: {
    color: theme.colors.white,
    fontWeight: 'bold',
    marginVertical: 2,
    fontSize: 16,
  },
  txtTitle: {
    color: theme.colors.black,
    marginLeft: 4,
    fontSize: getSize.m(20)
  },
  txtSave: {
    color: theme.colors.black,
    marginLeft: 4,
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.colors.white,
  },
  btnSave: {
    width: '92%',
    height: 58,
    flex: 1,
    backgroundColor: theme.colors.primary,
    borderRadius: 6,
    justifyContent: 'center',
    position: 'absolute',
    alignSelf: 'center',
    bottom: 16,
  },
});
