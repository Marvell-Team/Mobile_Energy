import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {StatusBar} from 'react-native';
import BottomTabNavigation from './BottomTabNavigation';
import {navigate} from './RootNavigation';
import {routes} from './routes';
import {auth} from '../screens/Auth';
const Stack = createStackNavigator();
const RootStack = () => {
  return (
    <NavigationContainer ref={navigate}>
      <StatusBar
        translucent
        barStyle="dark-content"
        backgroundColor={'transparent'}
      />
      <Stack.Navigator
        presentation="modal"
        initialRouteName={routes.LOGINSCREENS}
        screenOptions={{headerShown: false}}>
        <Stack.Screen
          name={routes.LOGINSCREENS}
          component={auth.LOGINSCREENS}
        />
        <Stack.Screen
          name={routes.SIGNUPSCREENS}
          component={auth.SIGNUPSCREENS}
        />
        <Stack.Screen
          name={routes.BOTTOMTABBAR}
          component={BottomTabNavigation}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
