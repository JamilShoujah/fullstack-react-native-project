/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import getCourseDetailStore from '../../../store/course-store/course-store';
import {CourseDescriptionPostPanel} from '../../../shared/components/custom/course/postPage/CourseDescription';
import {CourseNamePostPanel} from '../../../shared/components/custom/course/postPage/CourseName';
import {withLiteObserverAndTheme} from '../../../shared/enhancedRenderer/index';
import {addNewCourse} from '../../../shared/data/api/postApi/course/add-new-course';

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
        <View
          style={{
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            onPress={() => {
              addNewCourse();
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

          <TouchableOpacity
            onPress={() => {
              courseDetails.setCourseName('');
              courseDetails.setCourseDescription('');
            }}
            style={{
              backgroundColor: colors.warningColor,
              borderRadius: 2 * childX,
              width: 15 * childX,
              height: 10 * childY,
              marginHorizontal: childX * 2,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: colors.lightText,
                fontSize: getFontSize(6),
              }}>
              clear
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
});
