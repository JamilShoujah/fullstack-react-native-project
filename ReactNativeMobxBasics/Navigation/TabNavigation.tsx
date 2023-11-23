import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomePage} from '../Pages/HomePage';
import {DairyPage} from '../Pages/DairyPage';
import {FruitPage} from '../Pages/FruitPage';
import {VegetablePage} from '../Pages/VegetablePage';
import {ProteinPage} from '../Pages/ProteinPage';

const Tab = createBottomTabNavigator();
export const TabNavigation = () => {
  const Home: string = 'Home';
  const Dairy: string = 'Dairy';
  const Fruits: string = 'Fruits';
  const Vegetables: string = 'Vegetables';
  const Proteins: string = 'Proteins';

  return (
    <Tab.Navigator>
      <Tab.Screen name={Home} component={HomePage} />
      <Tab.Screen name={Dairy} component={DairyPage} />
      <Tab.Screen name={Proteins} component={ProteinPage} />
      <Tab.Screen name={Fruits} component={FruitPage} />
      <Tab.Screen name={Vegetables} component={VegetablePage} />
    </Tab.Navigator>
  );
};
