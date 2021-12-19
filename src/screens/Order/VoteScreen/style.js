import {StyleSheet, Dimensions} from 'react-native';
import {theme} from '@theme';
import {getSize} from '@utils/responsive';

const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');

export default StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    alignItems: 'center',
    backgroundColor: theme.colors.white,
  },
  products: {
    flexDirection: 'row',
    borderBottomWidth: 0.3,
    borderColor: theme.colors.gray,
    paddingVertical: getSize.m(8),
    paddingHorizontal: getSize.m(8),
    backgroundColor: theme.colors.white,
  },
  fontSize:{
    fontSize:getSize.m(18),
},
  textArea:{
    width:'100%',
    height:getSize.v(200),
    borderRadius:6,
    borderWidth:1,
    borderColor:'#888888',
    padding:getSize.m(12),
    textAlignVertical: 'top',
    backgroundColor: theme.colors.grey
  },
  camera: {
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: theme.colors.primary,
    borderWidth: 1.5,
    borderRadius: 4,
    margin:16
  },
  icon: {
    flexDirection: 'row',
    marginTop: 10,
  },
  image: {
    width: getSize.m(width),
    height: getSize.m(height),
  },
  check: {
    width: getSize.m(40),
    height: getSize.m(40),
    marginVertical: getSize.m(5),
    marginHorizontal: getSize.m(5),
  },
  text: {
    color: '#50ABF1',
    fontWeight: '500',
    fontSize: getSize.m(16),
  },
  text_1: {
    color: '#909090',
    fontSize: 16,
  },

  button: {
    width: '92%',
    height: getSize.v(52),
    position: 'absolute',
    bottom: getSize.m(16),
    backgroundColor: '#1DA1F2',
    borderRadius: getSize.m(6),
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
