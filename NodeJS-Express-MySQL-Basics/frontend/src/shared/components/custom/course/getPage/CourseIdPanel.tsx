import React from 'react';
import {Text, View} from 'react-native';
import getCourseDetailStore from '../../../../../store/course-store/course-store';
import {fetchCourseById} from '../../../../data/api/getApi/course/get-course-by-id';
import {withLiteObserverAndTheme} from '../../../../enhancedRenderer/index';
import {SearchButton} from '../../../buttons/SearchButton';
import {MiniTextInputField} from '../../../inputs/MiniTextInput';

export const CourseIdPanel = withLiteObserverAndTheme(props => {
  const {theme} = props;
  const {childX, getFontSize} = theme;
  const courseDetails = getCourseDetailStore();
  return (
    <View style={{width: 80 * childX}}>
      <Text style={{fontSize: getFontSize(4), paddingHorizontal: childX * 2}}>
        Course id:
      </Text>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <MiniTextInputField
          placeholder={'Course id'}
          value={courseDetails.courseID.get()}
          onValueChange={text => {
            courseDetails.setCourseId(text);
          }}
        />
        <SearchButton
          onPress={() => {
            fetchCourseById();
          }}
        />
      </View>
    </View>
  );
});
