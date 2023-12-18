/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';
import {IDataDisplay} from '../ComponentInterfaces/dataDisplayInterface';

export const ModalDataDisplay: React.FC<IDataDisplay> = ({title, value}) => {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
      <Text style={{fontWeight: '900'}}>{title}: </Text>
      <Text>{value}</Text>
    </View>
  );
};
