/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';
import {IPageInterface} from '../ComponentInterfaces/PagesInterface';
import {SignUpScreen} from '../prefabs/signUpScreen';

export const SignUpPage: React.FC<IPageInterface> = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        top: 'auto',
      }}>
      <Text style={{fontWeight: 'bold', fontSize: 30}}>Welcome!</Text>
      <Text>you can Sign Up here!</Text>
      <SignUpScreen navigation={navigation} />
    </View>
  );
};
