import {StyleSheet, Dimensions} from 'react-native';
import {theme} from '@theme';
import {getSize} from '@utils/responsive';

const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    width: 328,
    height: 207,
    backgroundColor: theme.colors.white,
    marginHorizontal: 40,
    marginTop: 170,
    borderRadius: 15,
    alignItems: 'center',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  check: {
    marginVertical: 10,
  },
  text: {
    color: theme.colors.black,
    fontWeight: 'bold',
    fontSize: 16,
  },
  button: {
    width: 296,
    height: 48,
    marginVertical: 10,
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
