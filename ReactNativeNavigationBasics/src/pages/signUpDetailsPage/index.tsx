/* eslint-disable react-native/no-inline-styles */
import {observer} from 'mobx-react';
import React from 'react';
import {View, Text} from 'react-native';
import i18n from '../../shared/i18n/i18n';
import {SignUpDetailsScreen} from './signUpDetailsPageComponents/signUpUserDetailsScreen';

export const SignUpUserDetailsPage = observer(() => {
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Text style={{fontWeight: 'bold', fontSize: 25, padding: 20, top: '5%'}}>
        {i18n.get('TELL_US_MORE')}
      </Text>
      <SignUpDetailsScreen />
    </View>
  );
});
