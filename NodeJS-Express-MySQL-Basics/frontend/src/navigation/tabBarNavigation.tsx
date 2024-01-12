import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {GetPage} from '../pages/GetPage/index';
import {PostPage} from '../pages/PostPage/index';
import {PutPage} from '../pages/PutPage/index';
import {DeletePage} from '../pages/DeletePage/index';
import {withLiteObserverAndTheme} from '../shared/enhancedRenderer/index';

export const TabBarNav = withLiteObserverAndTheme(props => {
  const Tab = createBottomTabNavigator();
  const {theme} = props;
  const {colors, unitY, getFontSize} = theme;

  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarActiveTintColor: colors.primaryColor,
        tabBarInactiveTintColor: colors.secondaryColor,
        tabBarStyle: {
          backgroundColor: colors.backgroundColor,
          borderTopWidth: 0,
          height: unitY * 15,
        },
        tabBarLabelStyle: {
          marginBottom: 2 * unitY,
          fontWeight: '900',
          fontSize: getFontSize(4),
        },
        tabBarIconStyle: {marginTop: 2 * unitY},
      })}>
      <Tab.Screen
        name={'GET'}
        component={GetPage}
        options={{
          header: () => null,
        }}
      />
      <Tab.Screen
        name={'POST'}
        component={PostPage}
        options={{
          header: () => null,
        }}
      />
      <Tab.Screen
        name={'PUT'}
        component={PutPage}
        options={{
          header: () => null,
        }}
      />
      <Tab.Screen
        name={'DELETE'}
        component={DeletePage}
        options={{
          header: () => null,
        }}
      />
    </Tab.Navigator>
  );
});
