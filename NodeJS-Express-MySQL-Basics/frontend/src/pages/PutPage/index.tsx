/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {CourseUpdateModal} from '../../shared/components/modals/course/UpdateCourseModal';
import {StudentUpdateModal} from '../../shared/components/modals/student/UpdateStudentModal';
import {withLiteObserverAndTheme} from '../../shared/enhancedRenderer/index';
import {PutPageComponent} from './putPageComponents/putPage';

export const PutPage = withLiteObserverAndTheme(props => {
  const {theme} = props;
  const {colors, unitX, unitY, getFontSize} = theme;

  return (
    <ScrollView style={{backgroundColor: colors.backgroundColor}}>
      <View
        style={{
          paddingHorizontal: unitX * 3,
          paddingTop: unitY * 5,
          marginHorizontal: unitX * 5,
        }}>
        <Text
          style={{
            color: colors.primaryColor,
            fontSize: getFontSize(10),
            fontWeight: '900',
            textAlign: 'center',
          }}>
          DELETE
        </Text>
        <PutPageComponent />
        <StudentUpdateModal />
        <CourseUpdateModal />
      </View>
    </ScrollView>
  );
});
