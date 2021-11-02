import {StyleSheet, Dimensions} from 'react-native';
import {theme} from '@theme';

const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white, 
  },

  viewEdit: {
    backgroundColor: theme.colors.white,
  },

  viewText: {
    backgroundColor: theme.colors.white,
    height: 80,
  },

  view: {
    backgroundColor: theme.colors.white,
    position: 'relative',
    borderRadius: 50,
  },

  viewIcon: {
    backgroundColor: theme.colors.primary,
    height: 32,
    width: 32,
    margin: 8,
    borderRadius: 50,
    justifyContent: 'center',
  },

  inViewIcon: {
    width: '90%',
    height: '90%',
    borderRadius: 100 / 2,
    backgroundColor: theme.colors.white,
    alignSelf: 'center'
  },

  viewContent: {
    backgroundColor: theme.colors.grey,
    height: 72,
    marginLeft: 8,
    marginRight: 8,
    marginBottom: 8,
    borderRadius: 8,
  },

  viewContentImage: {
    width: 72,
    height: 72,
    borderRadius: 8,
    alignSelf: 'flex-start'
  },

  txtTitle: {
    color: theme.colors.gray,
    fontSize: 14,
    width: '96%',
  },

  txtTime: {
    color: theme.colors.placeholder,
    fontSize: 12,
  },

  txtContent: {
    color: theme.colors.gray,
    fontSize: 14,
    alignSelf: 'center',
    marginLeft: 4,
    width: '72%',
  },

});
