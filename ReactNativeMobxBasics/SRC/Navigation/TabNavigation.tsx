import React from 'react';
import {HomePage} from '../Pages/HomePage';
import {DairyPage} from '../Pages/DairyPage';
import {FruitPage} from '../Pages/FruitPage';
import {VegetablePage} from '../Pages/VegetablePage';
import {ProteinPage} from '../Pages/ProteinPage';
import {
  DAIRY,
  FRUITS,
  HOME,
  PROTEINS,
  VEGETABLES,
} from '../Data/Constants/Constants';
import {getTabBarIcon} from '../Data/Functions/Standard Functions/TabBarIcons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
export const TAB = createBottomTabNavigator();
export const TabNavigation = () => {
  return (
    <TAB.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          return getTabBarIcon(route.name, color, size);
        },
        tabBarActiveTintColor: 'orangered',
        tabBarInactiveTintColor: 'gray',
      })}>
      <TAB.Screen name={HOME} component={HomePage} />
      <TAB.Screen name={DAIRY} component={DairyPage} />
      <TAB.Screen name={PROTEINS} component={ProteinPage} />
      <TAB.Screen name={FRUITS} component={FruitPage} />
      <TAB.Screen name={VEGETABLES} component={VegetablePage} />
    </TAB.Navigator>
  );
};
