/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import getCourseDetailStore from '../../../store/course-store/course-store';
import {CourseDescriptionPostPanel} from '../../../shared/components/custom/course/postPage/CourseDescription';
import {CourseNamePostPanel} from '../../../shared/components/custom/course/postPage/CourseName';
import {withLiteObserverAndTheme} from '../../../shared/enhancedRenderer/index';

export const CourseDetailsPanel = withLiteObserverAndTheme(props => {
  const {theme} = props;
  const {colors, childX, childY, getFontSize} = theme;
  const courseDetails = getCourseDetailStore();
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
        Course Details
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
        <CourseNamePostPanel />
        <CourseDescriptionPostPanel />
        <TouchableOpacity
          onPress={() => {
            console.log(courseDetails.courseObject.get());
          }}
          style={{
            backgroundColor: colors.secondaryColor,
            borderRadius: 2 * childX,
            width: 10 * childX,
            height: 10 * childY,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: colors.lightText,
              fontSize: getFontSize(8),
            }}>
            +
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
});
