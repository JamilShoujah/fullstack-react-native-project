import React from 'react';
import {Text, View} from 'react-native';
import {DeleteButton} from '../../../shared/components/buttons/DeleteButton';
import {CourseIdPostPanel} from '../../../shared/components/custom/joined/postPage/PostCourseIdPanel';
import {StundetIdPostPanel} from '../../../shared/components/custom/joined/postPage/PostStudentIdPanel';
import {withThemeAndProps} from '../../../shared/enhancedRenderer/index';

export const DropCoursePanel = withThemeAndProps(props => {
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
          Drop from Course
        </Text>
        <View
          style={{
            backgroundColor: colors.secondaryLight,
            borderRadius: childX * 3,
            marginVertical: childY * 1,
            paddingHorizontal: childX * 1,
            paddingVertical: childY * 3,
            alignItems: 'center',
          }}>
          <StundetIdPostPanel />
          <CourseIdPostPanel />
          <DeleteButton onPress={() => {}} />
        </View>
      </View>
    </View>
  );
});
