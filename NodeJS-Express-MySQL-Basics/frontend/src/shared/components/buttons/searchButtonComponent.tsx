/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {ISubmitButton} from '../../data/types/interfaces/submitButtonInterface';
import {withThemeAndProps} from '../../enhancedRenderer/index';
import {TEt3Theme, withTheme} from '../../enhancedRenderer/theme/index';

// interface ISubmitButtonInternal extends ISubmitButton {
//   theme: TEt3Theme;
// }

const SearchButtonComponent: React.FC<ISubmitButton & {theme: TEt3Theme}> = ({
  onPress,
  theme,
}) => {
  const {colors, childX, childY, getFontSize} = theme;
  return (
    <TouchableOpacity
      style={{
        borderRadius: childX * 2,
        backgroundColor: colors.primaryColor,
        paddingVertical: childY * 2,
        paddingHorizontal: childX * 2,
      }}
      onPress={onPress}>
      <Text
        style={{
          textAlign: 'center',
          color: colors.darkText,
          fontSize: getFontSize(4),
        }}>
        Submit
      </Text>
    </TouchableOpacity>
  );
};

export const SearchButton = withThemeAndProps(SearchButtonComponent);
