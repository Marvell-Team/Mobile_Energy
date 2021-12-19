import {StyleSheet, Dimensions} from 'react-native';
import {theme} from '@theme';
import {getSize} from '@utils/responsive';

const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.grey,
    position: 'relative',
  },

  viewHeader: {
    backgroundColor: theme.colors.white,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    borderColor: theme.colors.gray,
    marginBottom: getSize.m(4),
  },

  viewOrderId: {
    alignItems: 'flex-start',
    width: '100%',
    borderBottomWidth: 0.3,
    borderColor: theme.colors.smoke,
    paddingVertical: getSize.m(8),
  },

  viewStatus: {
    alignItems: 'flex-start',
    width: '100%',
    paddingVertical: getSize.m(16),
  },

  imageOrderBill: {
    width: getSize.s(30),
    height: getSize.s(38),   
  },

  txtStatus: {
    color: theme.colors.blackText,
    fontSize: getSize.m(16),
    textAlign: 'left',
    fontWeight: '500',
    alignItems: 'center',
  },

  txtOrderDate: {
    color: theme.colors.gray,
    fontSize: getSize.m(14),
    textAlign: 'left',
  },

  viewOderInfo: {  
    backgroundColor: theme.colors.white,
    marginBottom: getSize.m(2),
  },

  viewInOderInfo: {  
    alignItems: 'flex-start',
    width: '100%',
    paddingVertical: getSize.m(8),
  },

  viewProduct: {  
    borderTopWidth: 0.3,
    borderColor: theme.colors.gray,
  },

  imageProduct: {
    width: getSize.s(80),
    height: getSize.s(80),
  },

  txtNameProduct: {  
    fontSize: getSize.m(18),
    color: theme.colors.blackText,
    textAlign: 'left',
    fontWeight: '500',
  },

  txtInfoProduct: {
    color: theme.colors.grayLightText,
    fontSize: getSize.m(16),
    textAlign: 'left',
    paddingVertical: getSize.m(4),
  },

  txtPrice: {
    color: theme.colors.blackText,
    fontSize: 16,
    textAlign: 'left',
  },

  txtTotal: {
    color: theme.colors.blackText,
    fontSize: getSize.m(17),
    textAlign: 'left',
    width: '50%',
  },

  txtTotall: {
    color: theme.colors.blackText,
    fontSize: getSize.m(17),
    textAlign: 'right',
    width: '50%',
  },

  viewTotal: {  
    width: '100%',
    backgroundColor: theme.colors.white,
    marginBottom: getSize.m(2),
  },

  viewInfo: {  
    width: '100%',
    backgroundColor: theme.colors.white,
  },

  txtAddress: {
    color: theme.colors.blackText,
    fontSize: getSize.m(17),
    textAlign: 'left',
    fontWeight: '500',
  },

  v5: {  
    height: getSize.v(52),
    width: '92%',
    backgroundColor: theme.colors.primary,
    justifyContent:'center',
    position: 'absolute',
    alignSelf:'center',
    alignItems: 'center',
    bottom: getSize.m(16),
    borderRadius: getSize.m(6),
  },

  text: {
    color: theme.colors.black,
    fontSize: getSize.m(16),
    textAlign: 'center',
    margin: getSize.m(4),
  },

  button: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent:'center',
    borderRadius: getSize.m(6),
  }
});
