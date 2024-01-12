/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import {View} from 'react-native';
import {TextInputField} from '../inputs/textInputComponent';
import {IStudentSearch} from '../../data/types/interfaces/studentSearchInterface';
import {ThemedSearchButton} from '../buttons/searchButtonComponent';

export const SearchPanel: React.FC<IStudentSearch> = ({
  placeholder,
  value,
  onValueChange,
  onPress,
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
      }}>
      <TextInputField
        placeholder={placeholder}
        value={value}
        onValueChange={onValueChange}
      />
      <ThemedSearchButton onPress={onPress} />
    </View>
  );
};
