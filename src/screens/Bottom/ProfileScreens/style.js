import {StyleSheet, Dimensions} from 'react-native';
import {theme} from '@theme';

const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  viewInfo: {
    backgroundColor: theme.colors.primary,
    height: height / 4.5,
  },
  viewAvt: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    borderWidth: 2,
    borderColor: theme.colors.white,
    padding: 1,
    marginHorizontal: 5,
    marginVertical: 8,
  },
  avt: {
    width: '100%',
    height: '100%',
    borderRadius: 100 / 2,
  },
  txtUsn: {
    color: theme.colors.white,
    fontWeight: 'bold',
    marginVertical: 2,
    fontSize: 17,
  },
  txtEmail: {
    color: theme.colors.white,
    marginVertical: 2,
  },
  txtPhone: {
    color: theme.colors.white,
    marginVertical: 2,
  },
  changeBtn: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: theme.colors.secondary,
    borderRadius: 45,
    borderWidth: 2,
    borderColor: theme.colors.white,
    marginHorizontal: 8,
  },
  viewMiddle: {
    backgroundColor: theme.colors.white,
    paddingVertical: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: theme.colors.primary,
    marginTop: height * 0.02,
  },
  numBer: {
    color: theme.colors.black,
    fontWeight: 'bold',
    fontSize: 20,
  },
  category: {
    color: theme.colors.lightGray,
    fontSize: 18,
  },
  followBtn: {
    backgroundColor: theme.colors.primary,
    marginHorizontal: 5,
  },
  linkInfo: {
    color: theme.colors.gray,
    marginVertical: 1,
    marginHorizontal: 16,
    fontSize: 16,
  },
  txtDesc: {
    marginVertical: 2,
    marginHorizontal: 16,
    fontSize: 16,
  },
  line: {
    height: '80%',
    borderWidth: 1,
    borderColor: theme.colors.lightGray,
    marginHorizontal: 5,
  },
});
