import {StyleSheet, Dimensions} from 'react-native';
import {theme} from '@theme';
import {useNavigation} from '@react-navigation/native';
import {routes} from '@navigation/routes';


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
    marginRight: 5,
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
    fontSize: 16,
  },
  txtEmail: {
    color: theme.colors.white,
    marginVertical: 2,
  },
  txtPhone: {
    color: theme.colors.white,
    marginVertical: 2,
  },
  btnEdit: {
    width: 28,
    height: 28,
    alignSelf: 'flex-end',
  },
  viewMiddle: {
    backgroundColor: theme.colors.white,
    paddingVertical: 20,
    borderRadius: 10,
    marginHorizontal: 12,
    marginTop: -height * 0.06,
  },
  numBer: {
    color: theme.colors.black,
    fontWeight: 'bold',
    fontSize: 17,
  },
  category: {
    color: theme.colors.lightGray,
    fontSize: 16,
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
    marginHorizontal: 16,
  },
  viewPostTitle: {
    marginVertical: 12,
    marginHorizontal: 12,
  },
  titlePost: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.colors.gray,
  },
  btnSort: {
    width: 24,
    height: 24,
    alignSelf: 'flex-end',
    marginHorizontal: 8,
  },
  modal:{
    backgroundColor:'white',
    borderRadius:10,

},
option:{
    alignItems:'flex-start',
    backgroundColor:'#F0F4F8',
    marginTop:10, 
    borderRadius:5, 
    marginRight:150,
    width:width,
    borderRadius:10,
    padding:5,

},
text:{
    margin:5,
    maxHeight:150,
    fontSize:20,
    fontWeight:'bold', 
    marginLeft:5,
    paddingHorizontal:10,
    marginVertical:10,  
}
});
