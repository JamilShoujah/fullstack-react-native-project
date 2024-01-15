import React from 'react';
import {Text, View} from 'react-native';

import {withLiteObserverAndTheme} from '../../../shared/enhancedRenderer/index';
import {StudentDetailsPanel} from './StudentDetailInputPanel';
export const DetailsPanel = withLiteObserverAndTheme(props => {
  const {theme} = props;
  const {colors, childX, childY, getFontSize} = theme;
  return (
    <View
      style={{
        backgroundColor: colors.secondaryColor,
        borderRadius: childX * 3,
        paddingHorizontal: childX * 3,
        paddingVertical: childY,
        marginVertical: childY * 3,
      }}>
      <StudentDetailsPanel />
    </View>
  );
});
