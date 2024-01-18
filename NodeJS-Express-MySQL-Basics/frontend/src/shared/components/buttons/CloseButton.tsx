import React from 'react';
import {TouchableOpacity} from 'react-native';
import MaterialThemeIcon from 'react-native-vector-icons/MaterialIcons';
import {ISubmitButton} from '../../data/interfaces/submit-button-interface';
import {withThemeAndProps} from '../../enhancedRenderer/index';
import {TEt3Theme} from '../../enhancedRenderer/theme/index';

const CloseButtonComponent: React.FC<ISubmitButton & {theme: TEt3Theme}> = ({
  onPress,
  theme,
}) => {
  const {colors, childY, getFontSize} = theme;
  return (
    <TouchableOpacity onPress={onPress} style={{marginTop: childY * 3}}>
      <MaterialThemeIcon
        name={'close'}
        size={getFontSize(10)}
        color={colors.lightText}
      />
    </TouchableOpacity>
  );
};

export const CloseButton = withThemeAndProps(CloseButtonComponent);
