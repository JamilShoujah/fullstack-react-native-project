import React from 'react';
import {Text, View} from 'react-native';
import getCourseDataStore from '../../../../../store/course-store/course-data-store';
import {withLiteObserverAndTheme} from '../../../../enhancedRenderer/index';
import {FullTextInputField} from '../../../inputs/FullsizeInputText';

export const CourseDescriptionPutPanel = withLiteObserverAndTheme(props => {
  const {theme} = props;
  const {childX, getFontSize} = theme;
  const courseDetails = getCourseDataStore();
  return (
    <View style={{width: 80 * childX}}>
      <Text style={{fontSize: getFontSize(4), paddingHorizontal: childX * 2}}>
        Course Description:
      </Text>
      <FullTextInputField
        placeholder={'Course description'}
        value={courseDetails.courseDescription.get()}
        onValueChange={text => {
          courseDetails.setCourseDescription(text);
        }}
      />
    </View>
  );
});
