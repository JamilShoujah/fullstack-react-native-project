import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ProfilePage} from '../Pages/profilePage';
import {PeerViewPage} from '../Pages/PeerViewPage';
import Icon from 'react-native-vector-icons/FontAwesome';

function getTabBarIcon(routeName: string, color: string, size: number) {
  let iconName;

  switch (routeName) {
    case 'Profile':
      iconName = 'user';
      break;
    case 'Peer View':
      iconName = 'users';
      break;
    default:
      iconName = '';
  }

  return <Icon name={iconName} size={size} color={color} />;
}

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
