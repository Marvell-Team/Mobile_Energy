import { theme } from '@theme';
import { getSize } from '@utils/responsive';
import {Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');
const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',    
  },
  textclose:{
    fontSize: 18,
    color:'white'
  },
  close:{
    backgroundColor:theme.colors.primary,
    height: getSize.v(52),
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scroll:{
    height:570,
  },
  text:{
    fontSize: 16,
    color:'#333333',
  },
  modalItem: {
    width: width / 1.1,
    backgroundColor: theme.colors.white,
    padding: 12,
    borderRadius:6
  },
  modaltextIp: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  modalContainer: {
    width: width,
    height: height,
    backgroundColor: '#00000066',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  modalView: {  
    borderBottomWidth: 0.3,
    borderColor: theme.colors.gray,
    paddingVertical: getSize.m(16),
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#335271',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    backgroundColor: 'red',
  },
});
export default styles;
