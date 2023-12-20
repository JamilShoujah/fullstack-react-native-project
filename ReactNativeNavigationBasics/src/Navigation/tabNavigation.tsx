import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ProfilePage} from '../Pages/profilePage';
import {PeerViewPage} from '../Pages/PeerViewPage';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useTranslation} from 'react-i18next';

export const TabNavigation = () => {
  const Tab = createBottomTabNavigator();
  const {t} = useTranslation();
  const profile = t('profile');
  const peerView = t('peerView');
  function getTabBarIcon(routeName: string, color: string, size: number) {
    let iconName;
    switch (routeName) {
      case profile:
        iconName = 'user';
        break;
      case peerView:
        iconName = 'users';
        break;
      default:
        iconName = '';
    }
    return <Icon name={iconName} size={size} color={color} />;
  }
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
        name={profile}
        component={ProfilePage}
        options={{
          header: () => null,
        }}
      />
      <Tab.Screen
        name={peerView}
        component={PeerViewPage}
        options={{
          header: () => null,
        }}
      />
    </Tab.Navigator>
  );
};
