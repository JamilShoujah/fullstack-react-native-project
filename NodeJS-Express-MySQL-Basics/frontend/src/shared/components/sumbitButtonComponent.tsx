/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {ISubmitButton} from '../data/types/interfaces/submitButtonInterface';

export const SubmitButton: React.FC<ISubmitButton> = ({onPress}) => {
  return (
    <TouchableOpacity
      style={{
        borderRadius: 10,
        backgroundColor: '#365486',
        padding: 10,
        margin: 10,
      }}
      onPress={onPress}>
      <Text style={{textAlign: 'center', color: '#DCF2F1', fontWeight: '500'}}>
        Submit
      </Text>
    </TouchableOpacity>
  );
};
