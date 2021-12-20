import {StyleSheet, Dimensions, StatusBar} from 'react-native';
import {theme} from '@theme';
import {getSize} from '@utils/responsive';

const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: StatusBar.currentHeight,
  },
  check: {
    width: getSize.s(24),
    height: getSize.s(24),
    marginVertical: 5,
    marginHorizontal: 2,
  },
  textstar: {
    fontWeight: 'bold',
    color: theme.colors.orange,
    fontSize: getSize.m(40),
  },
  icon: {
    flexDirection: 'row',
  },
  body: {
    width: width,
    backgroundColor: theme.colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: getSize.m(-5),
    elevation: 2,
    shadowColor: theme.colors.black,
    shadowOpacity: 1,
    shadowRadius: 20,
  },
  txtComment: {
    fontSize: getSize.m(16),
    fontWeight: 'bold',
  },
  bodyname: {
    marginVertical: getSize.m(8),
    width: width / 1.1,
    backgroundColor: theme.colors.white,
  },
  btnComment: {
    paddingVertical: getSize.m(10),
    width: '100%',
    borderRadius: getSize.m(20),
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: theme.colors.secondary,
    borderWidth: 1,
  },
  button: {
    width: getSize.s(width / 4.5),
    height: getSize.v(height / 25),
    backgroundColor: theme.colors.white,
    borderRadius: 20,
    borderColor: theme.colors.primary,
    borderWidth: 1,
    alignSelf: 'flex-end',
  },
  bodyuser: {
    marginTop: getSize.m(13),
    marginBottom: getSize.m(13),
    width: width / 1.1,
    backgroundColor: theme.colors.white,
  },
  detailbody: {
    marginTop: 13,
    width: width / 1.1,
  },
  commentbody: {
    width: width / 1.1,
    backgroundColor: theme.colors.white,
  },
  card: {
    width: width / 1.1,
    marginTop: 10,
  },
  viewAvt: {
    width: getSize.v(60),
    height: getSize.s(60),
    borderRadius: 60 / 2,
    borderWidth: 2,
    borderColor: theme.colors.white,
    padding: 1,
    marginRight: getSize.m(6),
  },
  avt: {
    width: '100%',
    height: '100%',
    borderRadius: 60 / 2,
  },
  dotActive: {
    margin: getSize.m(3),
    color: 'black',
  },
  dot: {
    margin: getSize.m(3),
    color: '#888',
  },
});
