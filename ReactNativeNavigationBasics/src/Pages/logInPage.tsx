/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {useTranslation} from 'react-i18next';
import {View, Text} from 'react-native';
import {IPageInterface} from '../ComponentInterfaces/PagesInterface';
import {LogInScreen} from '../screens/logInScreen';

export const LogInPage: React.FC<IPageInterface> = ({navigation}) => {
  const {t} = useTranslation();
  const login = t('login');
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        top: 'auto',
      }}>
      <Text style={{fontWeight: 'bold', fontSize: 30}}>{login}</Text>
      <LogInScreen navigation={navigation} />
    </View>
  );
};
