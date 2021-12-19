import {StyleSheet, Dimensions} from 'react-native';
import {theme} from '@theme';
import { getSize } from '@utils/responsive';

const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.grey, 
  },

  txt: {
    color: theme.colors.black,
    alignSelf: 'center',
    fontSize: getSize.m(18),
  },
});
