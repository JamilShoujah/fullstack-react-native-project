/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {ISubmitButton} from '../../data/interfaces/submit-button-interface';
import {withThemeAndProps} from '../../enhancedRenderer/index';
import {TEt3Theme} from '../../enhancedRenderer/theme/index';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SearchButtonComponent: React.FC<ISubmitButton & {theme: TEt3Theme}> = ({
  onPress,
  theme,
}) => {
  const {colors, childX, childY, getFontSize} = theme;
  return (
    <TouchableOpacity
      style={{
        borderRadius: childX * 2,
        width: childX * 15,
        height: childY * 10,
        backgroundColor: colors.primaryColor,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onPress={onPress}>
      <Icon name={'search'} size={getFontSize(8)} color={colors.lightText} />
    </TouchableOpacity>
  );
};

export const SearchButton = withThemeAndProps(SearchButtonComponent);
