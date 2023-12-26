import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ProfilePage} from '../pages/profilePage';
import {PeerViewPage} from '../pages/peerViewPage';
import Icon from 'react-native-vector-icons/FontAwesome';
import i18n from '../shared/i18n/i18n';
import {observer} from 'mobx-react';
import {BottomTabBar} from '../shared/components/custom/TabBar';

export const TabNavigation = observer(() => {
  const Tab = createBottomTabNavigator();
  const profile = i18n.get('PROFILE');
  const peerView = i18n.get('PEER_VIEW');
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
      tabBar={() => <BottomTabBar />}
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          return getTabBarIcon(route.name, color, size);
        },
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen
        name={'profile'}
        // name={profile}
        component={ProfilePage}
        options={{
          header: () => null,
        }}
      />
      <Tab.Screen
        name={'peerView'}
        // name={peerView}
        component={PeerViewPage}
        options={{
          header: () => null,
        }}
      />
    </Tab.Navigator>
  );
});
