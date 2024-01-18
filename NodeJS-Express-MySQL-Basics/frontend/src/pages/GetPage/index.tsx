/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import {withLiteObserverAndTheme} from '../../shared/enhancedRenderer/index';
import {CourseModal} from '../../shared/components/modals/course/CourseModal';
import {StudentModal} from '../../shared/components/modals/student/StudentModal';
import {GetPageComponent} from './getPageComponents/getPage';
import {JoinedModal} from '../../shared/components/modals/joined/JoinedModal';

export const GetPage = withLiteObserverAndTheme(props => {
  const {theme} = props;
  const {colors} = theme;

  return (
    <View
      style={{
        backgroundColor: colors.backgroundColor,
        justifyContent: 'center',
        flex: 1,
      }}>
      <GetPageComponent />
      <StudentModal />
      <CourseModal />
      <JoinedModal />
    </View>
  );
});
