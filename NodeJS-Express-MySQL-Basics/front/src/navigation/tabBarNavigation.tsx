import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SearchPage} from '../pages/SearchPage/index';
import {AddStudent} from '../pages/AddStudent/index';
import {AddCourse} from '../pages/AddCourse/index';
import {AddGrades} from '../pages/AddGrades/index';

export const TabBarNav = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarActiveTintColor: '#7FC7D9',
        tabBarInactiveTintColor: '#DCF2F1',
        tabBarStyle: {backgroundColor: '#0F1035', borderTopWidth: 0},
        tabBarLabelStyle: {marginBottom: 10, fontWeight: '900'},
        tabBarIconStyle: {marginTop: 5},
      })}>
      <Tab.Screen
        name={'Search'}
        component={SearchPage}
        options={{
          header: () => null,
        }}
      />
      <Tab.Screen
        name={'Add Student'}
        component={AddStudent}
        options={{
          header: () => null,
        }}
      />
      <Tab.Screen
        name={'Add Course'}
        component={AddCourse}
        options={{
          header: () => null,
        }}
      />
      <Tab.Screen
        name={'Add Grades??'}
        component={AddGrades}
        options={{
          header: () => null,
        }}
      />
    </Tab.Navigator>
  );
};
