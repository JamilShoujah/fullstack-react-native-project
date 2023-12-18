import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ProfilePage} from '../Pages/profilePage';
import {PeerViewPage} from '../Pages/PeerViewPage';
import {getTabBarIcon} from '../functions/tabBarIcons';

export const TabNavigation = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          return getTabBarIcon(route.name, color, size);
        },
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen
        name="Profile"
        component={ProfilePage}
        options={{
          header: () => null,
        }}
      />
      <Tab.Screen
        name="Peer View"
        component={PeerViewPage}
        options={{
          header: () => null,
        }}
      />
    </Tab.Navigator>
  );
};
