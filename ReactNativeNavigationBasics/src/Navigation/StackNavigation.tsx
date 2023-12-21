import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SignUpPage} from '../Pages/signUpPage';
import {SignUpUserDetailsPage} from '../Pages/signUpUseDetails';
import {LogInPage} from '../Pages/logInPage';
import {HomePage} from '../Pages/homePage';
import {getLanguageStore} from '../store/right-to-left-language-store';
const Stack = createStackNavigator();

export const StackNavigation = () => {
  const lang = getLanguageStore();
  return (
    <Stack.Navigator initialRouteName="LogIn">
      <Stack.Screen
        name="SignUp"
        component={SignUpPage}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="Details"
        component={SignUpUserDetailsPage}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="LogIn"
        component={LogInPage}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="Home"
        component={HomePage}
        options={{
          header: () => null,
        }}
      />
    </Stack.Navigator>
  );
};
