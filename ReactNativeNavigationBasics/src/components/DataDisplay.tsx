/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';
import {IDataDisplay} from '../ComponentInterfaces/dataDisplayInterface';

export const DataDisplay: React.FC<IDataDisplay> = ({title, value}) => {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
      <Text style={{fontSize: 20, fontWeight: '900'}}>{title}: </Text>
      <Text style={{fontSize: 20}}>{value}</Text>
    </View>
  );
};
