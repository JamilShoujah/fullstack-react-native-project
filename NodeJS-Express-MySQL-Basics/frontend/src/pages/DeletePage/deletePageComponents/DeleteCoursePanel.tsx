import React from 'react';
import {Text, View} from 'react-native';
import {CourseDeletePanel} from '../deletePageCustomComponents/CourseDeletePanel';
import {withThemeAndProps} from '../../../shared/enhancedRenderer/index';

export const DeleteCoursePanel = withThemeAndProps(props => {
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
          Delete Course
        </Text>
        <CourseDeletePanel />
      </View>
    </View>
  );
});
