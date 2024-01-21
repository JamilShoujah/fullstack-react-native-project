import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {ISubmitButton} from '../../data/interfaces/submit-button-interface';
import {withThemeAndProps} from '../../enhancedRenderer/index';
import {TEt3Theme} from '../../enhancedRenderer/theme/index';

const GetAllButtonComponent: React.FC<ISubmitButton & {theme: TEt3Theme}> = ({
  onPress,
  theme,
}) => {
  const {colors, childX, childY, getFontSize} = theme;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: colors.secondaryColor,
        paddingHorizontal: childX * 3,
        paddingVertical: childY * 2,
        marginVertical: childY * 1,
        borderRadius: childX * 2,
      }}>
      <Text
        style={{
          color: colors.lightText,
          fontSize: getFontSize(6),
          fontWeight: 'bold',
        }}>
        GET EVERYTHING
      </Text>
    </TouchableOpacity>
  );
};

export const GetAllButton = withThemeAndProps(GetAllButtonComponent);
