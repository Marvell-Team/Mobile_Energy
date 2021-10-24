import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {StatusBar} from 'react-native';
import BottomTabNavigation from './BottomTabNavigation';
import {navigate} from './RootNavigation';
import {routes} from './routes';
import {auth} from '../screens/Auth';
import {orders} from '@screens/Order';
import {product} from '@screens/Product';
import OPTIONSCREENS from '../screens/OptionScreen/OptionsPicket';
const Stack = createStackNavigator();
const RootStack = () => {
  return (
    <NavigationContainer ref={navigate}>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor={'transparent'}
      />
      <Stack.Navigator
        presentation="modal"
        initialRouteName={routes.ORDER_SUCCESS_SCREEN}
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
        <Stack.Screen
          name={routes.DETAILSCREENS}
          component={product.DETAILSCREENS}
        />
        <Stack.Screen
          name={routes.INFORMATIONSCREEN}
          component={auth.INFORMATIONSCREEN}
        />
        <Stack.Screen
          name={routes.MYBILLSCREENS}
          component={product.MYBILLSCREENS}
        />
        <Stack.Screen name={routes.OPTIONSCREENS} component={OPTIONSCREENS} />
        <Stack.Screen
          name={routes.ORDER_SUCCESS_SCREEN}
          component={orders.ORDER_SUCCESS_SCREEN}
        />
        <Stack.Screen
          name={routes.VOTE_SCREEN}
          component={orders.VOTE_SCREEN}
        />
        <Stack.Screen
          name={routes.VOTE_FINISH_SCREEN}
          component={orders.VOTE_FINISH_SCREEN}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
