import React from 'react';
import {TextInput} from 'react-native';
import { ITextInput } from '../ComponentInterfaces/textInputInterface';


export const NumericInputField: React.FC<ITextInput> = ({placeholder, value, onValueChange}) => {
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
        autoCapitalize="none"
        placeholder={placeholder}
        value={value}
        onChangeText={text => {
            onValueChange(text);
        }}
        keyboardType="numeric"
      />
    );
}