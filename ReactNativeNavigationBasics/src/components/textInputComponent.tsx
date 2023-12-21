/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {TextInput} from 'react-native';
import {ITextInput} from '../ComponentInterfaces/textInputInterface';
import {getLanguageStore} from '../store/right-to-left-language-store';

export const TextInputField: React.FC<ITextInput> = ({
  placeholder,
  value,
  onValueChange,
}) => {
  const lang = getLanguageStore();
  const isR2L = lang.isRighttoLeft.get();
  return (
    <TextInput
      style={{
        textAlign: isR2L ? 'right' : 'left',
        borderStyle: 'solid',
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        marginVertical: 5,
        width: '100%',
      }}
      autoCapitalize="none"
      placeholder={placeholder}
      value={value}
      onChangeText={text => {
        onValueChange(text);
      }}
    />
  );
};
