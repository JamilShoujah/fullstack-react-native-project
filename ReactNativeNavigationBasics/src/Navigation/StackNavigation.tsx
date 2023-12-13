import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { SignUpPage } from '../Pages/signUpPage';
import { SignUpUserDetailsPage } from '../Pages/signUpUseDetails';
const Stack = createStackNavigator();

export const StackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen
        name="Home"
        component={SignUpPage}
        options={{
          header: () => null
        }}
      />
      <Stack.Screen
        name="Details"
        component={SignUpUserDetailsPage}
        options={{
          header: () => null
        }}
      />
    </Stack.Navigator>
  );
};
