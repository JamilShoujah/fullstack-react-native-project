import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';

export function getTabBarIcon(routeName: string, color: string, size: number) {
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
