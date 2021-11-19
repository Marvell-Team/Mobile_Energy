import {StyleSheet, Dimensions} from 'react-native';
import {theme} from '@theme';
import {getSize} from '@utils/responsive';

const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  v1: {
    width: width,
    height: height/4,
    backgroundColor: theme.colors.white,
    borderBottomWidth: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  v2: {  
    width: width,
    height: height/6,
    backgroundColor: theme.colors.white,
    borderBottomWidth: 0.5,
    
  },
  v21: {  
    backgroundColor: theme.colors.white,
    flexDirection: 'row',
    paddingVertical: 5,
    
  },
  v22: {  
    flexDirection: 'row',
  },
  v3: {  
    width: width,
    height: height/8,
    flexDirection: 'row',
    backgroundColor: theme.colors.white,
    borderBottomWidth: 0.5,
    alignItems: 'center',
    
  },
  v4: {  
    width: width,
    height: height/4,
    backgroundColor: theme.colors.white,
    borderBottomWidth: 0.5,
    
  },
  v5: {  
    width: width,
    height: height/6,
    backgroundColor: theme.colors.white,
    borderBottomWidth: 0.5,
    
  },
  image: {
    width: 100,
    height: 100,
    justifyContent: 'center',
  },
  text: {
    color: theme.colors.black,
    fontWeight: 'bold',
    fontSize: 20,
  },
  text2: {
    fontSize: 18,
    margin: 5,
  },
  button: {
    height: 60,
    paddingVertical: 12,
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 50,
    right: 50,
    bottom: 40,
  },
});
