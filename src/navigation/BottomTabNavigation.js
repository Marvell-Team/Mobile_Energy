import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {routes} from './routes';
import {bottom} from '../screens/Bottom';
import CustomTabBar from './CustomTabBar';
const Tab = createBottomTabNavigator();
const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        keyboardHidesTabBar: true,
        headerShown: false,
      }}
      tabBar={props => <CustomTabBar {...props} />}>
      <Tab.Screen name={routes.HOMESCREENS} component={bottom.HOMESCREENS} />
      <Tab.Screen name={routes.POSTSCREENS} component={bottom.POSTSCREENS} />
      <Tab.Screen name={routes.CHATSCREENS} component={bottom.CHATSCREENS} />
      <Tab.Screen
        name={routes.NOTIFICATIONSCREENS}
        component={bottom.NOTIFICATIONSCREENS}
      />
      <Tab.Screen
        name={routes.PROFILESCREENS}
        component={bottom.PROFILESCREENS}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
