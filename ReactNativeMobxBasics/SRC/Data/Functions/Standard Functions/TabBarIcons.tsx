import Icon from 'react-native-vector-icons/Entypo';
import React from 'react';

export function getTabBarIcon(routeName: string, color: string, size: number) {
  let iconName;

  switch (routeName) {
    case 'Home':
      iconName = 'home';
      break;
    case 'Dairy':
      iconName = 'cup';
      break;
    case 'Fruits':
      iconName = 'app-store';
      break;
    case 'Vegetables':
      iconName = 'leaf';
      break;
    case 'Proteins':
      iconName = 'twitter';
      break;
    default:
      iconName = '';
  }

  return <Icon name={iconName} size={size} color={color} />;
}
