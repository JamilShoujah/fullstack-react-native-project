/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomePage} from '../Pages/HomePage';
import {DairyPage} from '../Pages/DairyPage';
import {FruitPage} from '../Pages/FruitPage';
import {VegetablePage} from '../Pages/VegetablePage';
import {ProteinPage} from '../Pages/ProteinPage';
import Icon from 'react-native-vector-icons/Entypo';
import {View} from 'react-native';

const Tab = createBottomTabNavigator();
export const TabNavigation = () => {
  const Home: string = 'Home';
  const Dairy: string = 'Dairy';
  const Fruits: string = 'Fruits';
  const Vegetables: string = 'Vegetables';
  const Proteins: string = 'Proteins';

  return (
    <View style={{flex: 1, bottom: 0}}>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({color, size}) => {
            let iconName;

            switch (route.name) {
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
          },
          tabBarActiveTintColor: 'orangered',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen name={Home} component={HomePage} />
        <Tab.Screen name={Dairy} component={DairyPage} />
        <Tab.Screen name={Proteins} component={ProteinPage} />
        <Tab.Screen name={Fruits} component={FruitPage} />
        <Tab.Screen name={Vegetables} component={VegetablePage} />
      </Tab.Navigator>
    </View>
  );
};
