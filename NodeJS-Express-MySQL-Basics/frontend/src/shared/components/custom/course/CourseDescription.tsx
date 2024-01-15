import React from 'react';
import {Text, View} from 'react-native';
import getCourseDetailStore from '../../../../data/store/post-pafe-course-store';
import {withLiteObserverAndTheme} from '../../../enhancedRenderer/index';
import {FullTextInputField} from '../../inputs/FullsizeInputText';

export const CourseDescriptionPanel = withLiteObserverAndTheme(props => {
  const {theme} = props;
  const {childX, getFontSize} = theme;
  const courseDetails = getCourseDetailStore();
  return (
    <View style={{width: 80 * childX}}>
      <Text style={{fontSize: getFontSize(4), paddingHorizontal: childX * 2}}>
        Course Description:
      </Text>
      <FullTextInputField
        placeholder={'Course description'}
        value={courseDetails.coursedescription.get()}
        onValueChange={text => {
          courseDetails.setCourseDescription(text);
        }}
      />
    </View>
  );
});
