/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';
import {IDataDisplay} from '../ComponentInterfaces/dataDisplayInterface';
import {getLanguageStore} from '../store/right-to-left-language-store';

export const ModalDataDisplay: React.FC<IDataDisplay> = ({title, value}) => {
  const lang = getLanguageStore();
  const isR2L = lang.isRighttoLeft.get();
  return (
    <View
      style={{
        flexDirection: isR2L ? 'row-reverse' : 'row',
        justifyContent: 'space-around',
      }}>
      <Text style={{fontWeight: '900'}}>{title}: </Text>
      <Text>{value}</Text>
    </View>
  );
};
