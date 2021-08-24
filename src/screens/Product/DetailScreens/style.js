import {StyleSheet, Dimensions,StatusBar} from 'react-native';
import {theme} from '@theme';

const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');
export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  
  },
  headerimg:{
    margin:0,
    width:width,
    height:height*39.5/100,
    backgroundColor: theme.colors.green,
  },
  image:{
    width:width,
    height: height/2.5,
    alignSelf:'flex-end',
    flexDirection: 'row'
  },
  header:{
    width:width,
    height:'20%', 
    position:'absolute',
    top:0,
    backgroundColor:'#00000070',
    flexDirection:'row',
    alignItems: 'center',
 
  },
  headerleft:{
    flex: 1,
    height:'100%',
    justifyContent: 'center',
    alignItems:'flex-start',
    marginLeft:10,
  },
  headerright:{
    flex:1,
    height:'100%',
    justifyContent: 'center',
    alignItems:'flex-end',
    margin:10,
  },
  headercenter:{
    flex:1,
    height:'100%',
  },

  body:{
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    width:width,
  
    backgroundColor: theme.colors.white,
    marginTop:-20
  },
  namebody:{
    width:width,
    height:height/9,
    borderBottomWidth:0.5,
    borderColor: theme.colors.dark,
   
    
  },
  userbody:{
    width:width,
    height:height/9.5,
    borderBottomWidth:0.5,
    borderColor: theme.colors.dark,
    
  },
  button:{
    borderRadius:20,
    width:width/4,
    height:width/12,
    alignSelf:'flex-end',
    backgroundColor: theme.colors.white,
    borderColor: theme.colors.primary,
    borderWidth:1,

  },
  imageuser:{
    width:width/7,
    height:width/7,
    alignSelf:'flex-end',
  },
  detailbody:{
    width:width/1.1+11,
    height:height/4.4,
    marginTop:15,
    marginLeft:10
  }
  

});
