/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {withThemeAndProps} from '../../enhancedRenderer/index';
import {TEt3Theme} from '../../enhancedRenderer/theme/index';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {ICustomButton} from '../../data/interfaces/custom-button-interface';

const customButtonComponent: React.FC<ICustomButton & {theme: TEt3Theme}> = ({
  placeHolder,
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
        marginHorizontal: 2 * childX,
      }}
      onPress={onPress}>
      <Icon name={placeHolder} size={getFontSize(8)} color={colors.lightText} />
    </TouchableOpacity>
  );
};

export const CustomButton = withThemeAndProps(customButtonComponent);
