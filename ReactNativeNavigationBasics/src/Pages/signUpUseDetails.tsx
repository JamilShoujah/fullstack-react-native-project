import React from 'react';
import {View, Text} from 'react-native';
import { IPageInterface } from '../Data/ComponentInterfaces/PagesInterface';
import { SignUpDetailsScreen } from '../Data/prefabs/signUpUserDetailsScreen';

export const SignUpUserDetailsPage: React.FC<IPageInterface> = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Text style={{fontWeight: 'bold', fontSize: 25, padding: 20, top: '5%'}}>Tell Us More About Yourself!</Text>
      <SignUpDetailsScreen navigation={navigation} />
    </View>
  );
};
