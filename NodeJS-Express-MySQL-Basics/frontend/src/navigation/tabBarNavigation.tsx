import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SearchPage} from '../pages/SearchPage/index';
import {AddStudent} from '../pages/AddStudent/index';
import {AddCourse} from '../pages/AddCourse/index';
import {AddGrades} from '../pages/AddGrades/index';
import {withLiteObserverAndTheme} from '../shared/enhancedRenderer/index';

export const TabBarNav = withLiteObserverAndTheme(props => {
  const Tab = createBottomTabNavigator();
  const {theme} = props;
  const {colors, unitX, unitY, getFontSize} = theme;

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarActiveTintColor: colors.primaryColor,
        tabBarInactiveTintColor: colors.secondaryColor,
        tabBarStyle: {
          backgroundColor: colors.backgroundColor,
          borderTopWidth: 0,
          height: unitY * 15,
        },
        tabBarLabelStyle: {marginBottom: 2 * unitY, fontWeight: '900'},
        tabBarIconStyle: {marginTop: 2 * unitY},
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
        name={'Add Grades'}
        component={AddGrades}
        options={{
          header: () => null,
        }}
      />
    </Tab.Navigator>
  );
});
