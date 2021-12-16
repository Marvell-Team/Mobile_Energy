import {StyleSheet, Dimensions} from 'react-native';
import {theme} from '@theme';
import {getSize} from '@utils/responsive';

const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');
export default StyleSheet.create({
  container: {
    width: width / 2.2,
    borderRadius: 6,
    borderWidth: 1.5,
    borderColor: theme.colors.smoke,
    backgroundColor: theme.colors.white,
    elevation: 0.5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 0.5,
    marginHorizontal: getSize.m(6),
    marginTop: getSize.m(12),
  },

  viewContent: {
    marginBottom: 8,
    borderRadius: 6,
  },

  viewContentImage: {
    width: '100%',
    height: getSize.v(210),
    borderRadius: 8,
    alignSelf: 'center',
    borderTopRightRadius: 6,
    borderTopLeftRadius: 6,
  },

  txtTitle: {
    color: theme.colors.blackText,
    fontSize: 18,
    textAlign: 'left',
  },

  txtPrice: {
    color: theme.colors.blackText,
    fontWeight: 'bold',
    fontSize: 18,
    width: '100%',
    textAlign: 'left',
  },

  txtBought: {
    color: theme.colors.gray,
    fontSize: 12,
    textAlign: 'right',
    width: '40%',
    paddingRight: 4,
    marginBottom: 3,
    alignSelf: 'flex-end',
  },
});
