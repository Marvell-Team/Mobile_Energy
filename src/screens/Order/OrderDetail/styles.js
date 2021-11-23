import {StyleSheet, Dimensions} from 'react-native';
import {theme} from '@theme';
import {getSize} from '@utils/responsive';

const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    position: 'relative',
  },
  v1: {
    backgroundColor: theme.colors.white,
    borderBottomWidth: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: theme.colors.gray,

  },
  v2: {  
    borderBottomWidth: 0.5,
    borderColor: theme.colors.gray,
  },
  viewNameProduct: {
    width: '75%',
    position: 'relative',
  },

  image: {
    width: 100,
    height: 100,   
  },
  txtNameProduct: {  
    fontSize: 20,
    color: theme.colors.blackText,
    textAlign: 'left',
    paddingLeft: 8,
    width: '65%',
  },

  txtPrice: {  
    position: 'absolute',
    right: 0,
    fontSize: 16,
    color: theme.colors.blackText,
    textAlign: 'right',
    width: '35%',
  },
  txtTotal: {
    color: theme.colors.blackText,
    fontSize: 18,
    textAlign: 'left',
    width: '50%'
  },
  txtTotall: {
    color: theme.colors.blackText,
    fontSize: 18,
    textAlign: 'right',
    width: '50%',
    fontWeight: 'bold',
  },
  v3: {  
    width: '100%',
    borderBottomWidth: 0.5,  
    borderColor: theme.colors.gray,  
  },
  v4: {  
    width: '100%',
    borderBottomWidth: 0.5,  
    borderColor: theme.colors.gray,
  },
  v5: {  
    height: 52,
    width: '94%',
    backgroundColor: theme.colors.primary,
    justifyContent:'center',
    position: 'absolute',
    alignSelf:'center',
    alignItems: 'center',
    bottom: 8,
    borderRadius: 6,
  },

  text: {
    color: theme.colors.black,
    fontSize: 16,
    textAlign: 'center',
    margin: 4,
  },
  txtStatus: {
    color: theme.colors.blackText,
    fontSize: 16,
    textAlign: 'center',
  },
  txtStatuss: {
    color: theme.colors.blackText,
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '400'
  },
  text2: {
    fontSize: 18,
    margin: 5,
  },

});
