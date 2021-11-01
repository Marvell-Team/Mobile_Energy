import {StyleSheet, Dimensions} from 'react-native';
import {theme} from '@theme';
import { getSize } from '@utils/responsive';

const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');
export default StyleSheet.create({
  container: {
    flex: 1,
   
  },
  texttitle: {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'white',
  },
  panelHeader: {
    alignItems: 'center',
  },
  header: {
    shadowColor: '#333333',
    shadowOffset: {width: -1, height: -3},
    shadowRadius: 2,
    shadowOpacity: 0.4,
    // elevation: 5,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: theme.colors.primary
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  panel: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    // shadowColor: '#000000',
    // shadowOffset: {width: 0, height: 0},
    // shadowRadius: 5,
    // shadowOpacity: 0.4,
  },
  viewEdit: {
    backgroundColor: theme.colors.white,
  },

  viewText: {
    backgroundColor: theme.colors.white,
    height: 80,
  },

  textInput: {
    fontSize:getSize.m(18),
    height: getSize.m(50),
    backgroundColor: theme.colors.white,
    justifyContent: 'center',
    borderBottomWidth: 0.5,
    borderColor: '#A6A6A6',
    paddingVertical:getSize.m(10)
  },

  viewAvatar: {
    backgroundColor: theme.colors.primary,
    height: 160,
  },

  inViewAvatar: {
    width: 90,
    height: 90,
    borderRadius: 100 / 2,
    backgroundColor: theme.colors.white,
    justifyContent: 'center',
    alignSelf: 'center',
  },

  inAvatar: {
    width: '96%',
    height: '96%',
    borderRadius: 100 / 2,
    position: 'relative',
  },

  inEditViewAvatar: {
    width: 32,
    height: 32,
    borderRadius: 100 / 2,
  
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    left: 20,
  },

  inEditAvatar: {
    width: '90%',
    height: '90%',
    borderRadius: 100 / 2,
    alignSelf: 'center',
  },

  txtUsn: {
    color: theme.colors.white,
    fontWeight: 'bold',
    marginVertical: 2,
    fontSize: 16,
  },
  txtTitle: {
    color: theme.colors.black,
    marginLeft: 4,
    fontSize: getSize.m(20)
  },
  txtSave: {
    color: theme.colors.black,
    marginLeft: 4,
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.colors.white,
  },
  btnSave: {
    width: '92%',
    height: 58,
    flex: 1,
    backgroundColor: theme.colors.primary,
    borderRadius: 6,
    justifyContent: 'center',
    position: 'absolute',
    alignSelf: 'center',
    bottom: 16,
  },
});
