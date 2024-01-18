import React from 'react';
import {Text, View} from 'react-native';
import getJoinedDetailStore from '../../../../../store/joined-store/joined-store';
import {withLiteObserverAndTheme} from '../../../../enhancedRenderer/index';
import {FullTextInputField} from '../../../inputs/FullsizeInputText';

export const CourseIdPostPanel = withLiteObserverAndTheme(props => {
  const {theme} = props;
  const {childX, getFontSize} = theme;
  const courseDetails = getJoinedDetailStore();
  return (
    <View style={{width: 80 * childX}}>
      <Text style={{fontSize: getFontSize(4), paddingHorizontal: childX * 2}}>
        Course ID
      </Text>

      <FullTextInputField
        placeholder={'Course Id'}
        value={courseDetails.courseId.get()}
        onValueChange={text => {
          courseDetails.setCourseId(text);
        }}
      />
    </View>
  );
});
