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
      <Tab.Screen
        name={routes.HOMESCREENS}
        component={bottom.HOMESCREENS}
        options={{
          tabBarLabel: 'Trang chủ',
          // tabBarVisible: false,
        }}
      />
      <Tab.Screen
        name={routes.POSTSCREENS}
        component={bottom.POSTSCREENS}
        options={{
          tabBarLabel: 'Bài đăng',
        }}
      />
      <Tab.Screen
        name={routes.CHATSCREENS}
        component={bottom.CHATSCREENS}
        options={{
          tabBarLabel: '',
        }}
      />
      <Tab.Screen
        name={routes.NOTIFICATIONSCREENS}
        component={bottom.NOTIFICATIONSCREENS}
        options={{
          tabBarLabel: 'Thông báo',
          tabBarBadge: 10,
        }}
      />
      <Tab.Screen
        name={routes.PROFILESCREENS}
        component={bottom.PROFILESCREENS}
        options={{
          tabBarLabel: 'Cá nhân',
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
