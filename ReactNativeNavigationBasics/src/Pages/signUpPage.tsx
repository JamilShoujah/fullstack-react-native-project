/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {useTranslation} from 'react-i18next';
import {View, Text} from 'react-native';
import {IPageInterface} from '../ComponentInterfaces/PagesInterface';
import {SignUpScreen} from '../screens/signUpScreen';

export const SignUpPage: React.FC<IPageInterface> = ({navigation}) => {
  const {t} = useTranslation();
  const welcome_ = t('welcome');
  const signupHere_ = t('signupHere');
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        top: 'auto',
      }}>
      <Text style={{fontWeight: 'bold', fontSize: 30}}>{welcome_}!</Text>
      <Text>{signupHere_}</Text>
      <SignUpScreen navigation={navigation} />
    </View>
  );
};
