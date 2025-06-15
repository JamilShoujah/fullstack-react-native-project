import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {GetPage} from '../pages/GetPage/index';
import {PostPage} from '../pages/PostPage/index';
import {PutPage} from '../pages/PutPage/index';
import {DeletePage} from '../pages/DeletePage/index';
import {withLiteObserverAndTheme} from '../shared/enhancedRenderer/index';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {DataPage} from '../pages/DataPage/index';

export const TabBarNav = withLiteObserverAndTheme(props => {
  const Tab = createBottomTabNavigator();
  const {theme} = props;
  const {colors, unitY, getFontSize} = theme;

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
          let iconName;
          const size = unitY * 10;

          switch (route.name) {
            case 'GET':
              iconName = 'get-app';
              return <MaterialIcon name={iconName} size={size} color={color} />;
            case 'POST':
              iconName = 'upload';
              return <MaterialIcon name={iconName} size={size} color={color} />;
            case 'PUT':
              iconName = 'update';
              return <MaterialIcon name={iconName} size={size} color={color} />;
            case 'DELETE':
              iconName = 'delete';
              return <MaterialIcon name={iconName} size={size} color={color} />;
            default:
              iconName = 'question-mark';
              return <MaterialIcon name={iconName} size={size} color={color} />;
          }
        },
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
      <Tab.Screen
        name={'DATA'}
        component={DataPage}
        options={{
          header: () => null,
        }}
      />
    </Tab.Navigator>
  );
});
