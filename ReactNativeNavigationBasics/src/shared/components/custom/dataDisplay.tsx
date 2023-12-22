/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';
import {IDataDisplay} from '../../../data/types/ComponentInterfaces/dataDisplayInterface';
import {getLanguageStore} from '../../../data/stores/right-to-left-language-store';

export const DataDisplay: React.FC<IDataDisplay> = ({title, value}) => {
  const lang = getLanguageStore();
  const isR2L = lang.isRighttoLeft.get();
  return (
    <View
      style={{
        flexDirection: isR2L ? 'row-reverse' : 'row',
        justifyContent: 'space-around',
      }}>
      <Text style={{fontSize: 20, fontWeight: '900'}}>{title}: </Text>
      <Text style={{fontSize: 20}}>{value}</Text>
    </View>
  );
};
