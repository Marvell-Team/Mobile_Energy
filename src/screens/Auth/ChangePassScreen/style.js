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
    borderColor:"#FFF",
    alignSelf: 'flex-start',
    borderBottomColor: theme.colors.gray,
    borderRadius: 0,
    borderWidth: 0.5,
    paddingLeft: 0,
  },

  txtTitle: {
    color: theme.colors.black,
    marginLeft:4,
    
  },

  txtSave: {
    color: theme.colors.black,
    marginLeft:4,
    alignSelf:'center',
    fontSize:getSize.s(18),
    fontWeight:'bold',
    color:theme.colors.white,
  },

  backgroundBtnSave: {
    width: '100%',
    backgroundColor: theme.colors.white,
    height: getSize.m(84),
    position: 'absolute',
    bottom:0,
    justifyContent:'center',

  },

  btnSave: {
    width: '92%',
    height: getSize.m(52),
    backgroundColor:theme.colors.primary,
    borderRadius:6,
    alignSelf:'center',
    justifyContent:'center',
    paddingLeft: 16,
  },

});
