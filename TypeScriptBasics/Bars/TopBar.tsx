/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View} from 'react-native';
import {TopBarProps} from '../data/types/TopBarProps';

export const TopAppBar: React.FC<TopBarProps> = ({title}) => {
  return (
    <View
      style={{
        backgroundColor: 'blue',
        alignContent: 'center',
      }}>
      <Text
        style={{
          color: 'white',
          textAlign: 'center',
          fontSize: 30,
          fontWeight: '900',
          padding: 20,
        }}>
        {title}
      </Text>
    </View>
  );
};
