/* eslint-disable react-native/no-inline-styles */
import {observer} from 'mobx-react';
import React from 'react';
import {View, Text} from 'react-native';
import {IPageInterface} from '../../data/types/ComponentInterfaces/PagesInterface';
import i18n from '../../shared/i18n/i18n';
import {SignUpScreen} from './signUpPageComponents/signUpScreen';

export const SignUpPage: React.FC<IPageInterface> = observer(({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        top: 'auto',
      }}>
      <Text style={{fontWeight: 'bold', fontSize: 30}}>
        {i18n.get('WELCOME')}
      </Text>
      <Text>{i18n.get('SIGN_UP_HERE')}</Text>
      <SignUpScreen navigation={navigation} />
    </View>
  );
});
