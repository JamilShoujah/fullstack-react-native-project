import React from 'react';
import {Text, View} from 'react-native';
import {StudentUpdateById} from '../../../shared/components/custom/student/putPage/UpdateStudentIdPanel';
import {withThemeAndProps} from '../../../shared/enhancedRenderer/index';

export const UpdateStudentPanel = withThemeAndProps(props => {
  const {theme} = props;
  const {colors, childX, childY, getFontSize} = theme;

  return (
    <View>
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
          Update Student
        </Text>
        <StudentUpdateById />
      </View>
    </View>
  );
});
