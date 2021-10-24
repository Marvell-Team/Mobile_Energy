import {StyleSheet, Dimensions} from 'react-native';
import {theme} from '@theme';
import {getSize} from '@utils/responsive';

const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },

  header: {
    backgroundColor: theme.colors.secondary,
  },

  titleHeader: {
    color: theme.colors.white,
    fontWeight: 'bold',
    fontSize: getSize.m(16),
    textAlign: 'left',
  },

  blockTop: {
    width: width,
    paddingBottom: getSize.s(6),
    paddingHorizontal: getSize.s(12),
    backgroundColor: theme.colors.secondary,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  searchBox: {
    backgroundColor: theme.colors.aqua,
    borderColor: theme.colors.aqua,
  },

  search: {
    color: theme.colors.white,
    fontSize: getSize.v(15),
  },

  bannerBlock: {
    width: '100%',
    height: 170,
    borderRadius: 10,
    marginVertical: getSize.s(16),
  },

  banner: {
    borderRadius: 10,
  },

  blockCategory: {
    paddingHorizontal: getSize.s(10),
    paddingVertical: getSize.s(6),
  },

  blockProductContainer: {
    marginVertical: getSize.s(6),
    width: width,
    backgroundColor: theme.colors.thirdy,
    flexDirection: 'column',
    alignItems: 'center',
    paddingHorizontal: getSize.s(12),
    paddingVertical: getSize.s(12),
  },

  blockTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
  },

  textTitle: {
    color: theme.colors.primary,
    fontWeight: 'bold',
    fontSize: getSize.m(17),
  },
  viewMore: {
    flexDirection: 'row',
  },
  txtMore: {
    color: theme.colors.primary,
  },
});
