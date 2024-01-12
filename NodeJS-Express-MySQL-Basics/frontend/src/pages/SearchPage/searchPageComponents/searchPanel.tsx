/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import {View} from 'react-native';
import {TextInputField} from '../../../shared/components/textInputComponent';
import {IStudentSearch} from '../../../shared/data/types/interfaces/studentSearchInterface';
import {ThemedSearchButton} from '../../../shared/components/searchButtonComponent';

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
