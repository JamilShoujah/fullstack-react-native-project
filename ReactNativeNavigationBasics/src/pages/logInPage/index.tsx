/* eslint-disable react-native/no-inline-styles */
import { observer } from 'mobx-react-lite';
import React from 'react';
import {View, Text} from 'react-native';
import {IPageInterface} from '../../data/types/ComponentInterfaces/PagesInterface';
import i18n from '../../shared/i18n/i18n';
import {LogInScreen} from './logInPageComponents/logInScreen';

export const LogInPage: React.FC<IPageInterface> = observer(({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        top: 'auto',
      }}>
      <Text style={{fontWeight: 'bold', fontSize: 30}}>
        {i18n.get('LOGIN')}
      </Text>
      <LogInScreen navigation={navigation} />
    </View>
  );
});
