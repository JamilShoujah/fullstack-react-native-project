import React from 'react';
import {Text, View} from 'react-native';
import getCourseDetailStore from '../../../../data/store/post-pafe-course-store';
import {withLiteObserverAndTheme} from '../../../enhancedRenderer/index';
import {FullTextInputField} from '../../inputs/FullsizeInputText';

export const CourseNamePanel = withLiteObserverAndTheme(props => {
  const {theme} = props;
  const {childX, getFontSize} = theme;
  const courseDetails = getCourseDetailStore();
  return (
    <View style={{width: 80 * childX}}>
      <Text style={{fontSize: getFontSize(4), paddingHorizontal: childX * 2}}>
        Course Name:
      </Text>
      <FullTextInputField
        placeholder={'Course Name'}
        value={courseDetails.courseName.get()}
        onValueChange={text => {
          courseDetails.setCourseName(text);
        }}
      />
    </View>
  );
});
