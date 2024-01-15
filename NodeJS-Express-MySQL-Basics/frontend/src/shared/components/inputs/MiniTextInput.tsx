/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {TextInput} from 'react-native';
import {ITextInput} from '../../data/types/interfaces/textInputInterface';
import {withThemeAndProps} from '../../enhancedRenderer/index';
import {TEt3Theme} from '../../enhancedRenderer/theme/index';

const TextInputFieldComponent: React.FC<ITextInput & {theme: TEt3Theme}> = ({
  placeholder,
  value,
  onValueChange,
  theme,
}) => {
  const {colors, childX, childY, getFontSize} = theme;
  return (
    <TextInput
      style={{
        backgroundColor: colors.lightText,
        borderStyle: 'solid',
        borderWidth: 1,
        padding: childY * 2,
        borderRadius: 5,
        width: 60 * childX,
        margin: 5,
        fontSize: getFontSize(5),
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

export const MiniTextInputField = withThemeAndProps(TextInputFieldComponent);
