import {StyleSheet, Dimensions} from 'react-native';
import {theme} from '@theme';

const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');
export default StyleSheet.create({
  container: {
    width: 184,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: theme.colors.smoke,
    backgroundColor: theme.colors.white,
  },

  viewContent: {
    height: 180,
    width: 180,
    marginBottom: 8,
    borderRadius: 6,
  },

  viewContentImage: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
    alignSelf: 'center'
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
