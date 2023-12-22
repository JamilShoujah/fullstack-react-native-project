/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {useTranslation} from 'react-i18next';
import {View, Text} from 'react-native';
import {IPageInterface} from '../../data/types/ComponentInterfaces/PagesInterface';
import {SignUpDetailsScreen} from './signUpDetailsPageComponents/signUpUserDetailsScreen';

export const SignUpUserDetailsPage: React.FC<IPageInterface> = ({
  navigation,
}) => {
  const {t} = useTranslation();
  const tellUsMore_ = t('tellUsMore');
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Text style={{fontWeight: 'bold', fontSize: 25, padding: 20, top: '5%'}}>
        {tellUsMore_}
      </Text>
      <SignUpDetailsScreen navigation={navigation} />
    </View>
  );
};
