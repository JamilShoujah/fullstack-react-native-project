/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text} from 'react-native';
import {IDataDisplay} from '../../../../data/types/ComponentInterfaces/dataDisplayInterface';
import {DynamicAlignView} from '../../custom/dynamicAlignView';

export const ModalDataDisplay: React.FC<IDataDisplay> = ({title, value}) => {
  return (
    <DynamicAlignView
      containerStyle={{
        justifyContent: 'space-around',
      }}>
      <Text style={{fontWeight: '900'}}>{title}: </Text>
      <Text>{value}</Text>
    </DynamicAlignView>
  );
};
