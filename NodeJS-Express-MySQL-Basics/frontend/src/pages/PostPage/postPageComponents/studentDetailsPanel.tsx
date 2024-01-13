import React from 'react';
import {Text, View} from 'react-native';

import {withLiteObserverAndTheme} from '../../../shared/enhancedRenderer/index';
export const StudentDetailsPanel = withLiteObserverAndTheme(props => {
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
      <Text
        style={{
          marginVertical: childY * 3,
          fontSize: getFontSize(8),
          color: colors.lightText,
          fontWeight: 'bold',
        }}>
        Student Details
      </Text>

      <View
        style={{
          backgroundColor: colors.secondaryLight,
          borderRadius: childX * 3,
          marginVertical: childY * 1,
          paddingHorizontal: childX * 1,
          paddingVertical: childY * 1,
        }}>
        <Text
          style={{
            paddingHorizontal: 3 * childX,
            paddingVertical: 3 * childY,
            fontSize: getFontSize(4),
            color: colors.darkText,
          }}>
          please enter new student details:
        </Text>
      </View>
    </View>
  );
});
