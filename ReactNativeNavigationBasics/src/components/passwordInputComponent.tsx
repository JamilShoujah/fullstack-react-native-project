/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {TextInput} from 'react-native';
import {ITextInput} from '../ComponentInterfaces/textInputInterface';

export const PasswordInputField: React.FC<ITextInput> = ({
  placeholder,
  value,
  onValueChange,
}) => {
  return (
    <TextInput
      style={{
        borderStyle: 'solid',
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        marginVertical: 5,
        width: '100%',
      }}
      placeholder={placeholder}
      value={value}
      onChangeText={text => {
        onValueChange(text);
      }}
      secureTextEntry
    />
  );
};
