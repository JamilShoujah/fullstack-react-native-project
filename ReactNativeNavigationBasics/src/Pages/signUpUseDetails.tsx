/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';
import {IPageInterface} from '../ComponentInterfaces/PagesInterface';
import {SignUpDetailsScreen} from '../screens/signUpUserDetailsScreen';

export const SignUpUserDetailsPage: React.FC<IPageInterface> = ({
  navigation,
}) => {
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Text style={{fontWeight: 'bold', fontSize: 25, padding: 20, top: '5%'}}>
        Tell Us More About Yourself!
      </Text>
      <SignUpDetailsScreen navigation={navigation} />
    </View>
  );
};
