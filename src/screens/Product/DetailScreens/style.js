import {StyleSheet, Dimensions,StatusBar} from 'react-native';
import {theme} from '@theme';

const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:StatusBar.currentHeight,
  },
  body:{
    width:width,
  
    backgroundColor: theme.colors.white,
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    marginTop:-25
  },
  bodyname:{
    marginTop:20,
    marginBottom:13,
    width:width/1.1,
    backgroundColor: theme.colors.white,
  },
  button:{
    width:width/4.5,
    height:height/25,
    backgroundColor: theme.colors.white,
    borderRadius:20,
    borderColor:theme.colors.primary,
    borderWidth:1,
    alignSelf: 'flex-end',
  },
  bodyuser:{
   
    marginTop:13,
    marginBottom:13,
    width:width/1.1,
    backgroundColor: theme.colors.white,
  },
  detailbody:{
    marginTop:13,
    width:width/1.1,
  },
  commentbody:{
    marginTop:5,
    width:width/1.1,
  },
  card:{
    width:width/1.1,
    marginTop:10
  },
  viewAvt: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    borderWidth: 2,
    borderColor: theme.colors.white,
    padding: 1,
    marginRight: 5,
  },
  avt: {
    width: '100%',
    height: '100%',
    borderRadius: 60 / 2,
  },
});
