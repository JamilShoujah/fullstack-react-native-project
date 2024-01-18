import React from 'react';
import {Text, View} from 'react-native';
import getCourseDetailStore from '../../../../../store/course-store/course-store';
import {withLiteObserverAndTheme} from '../../../../enhancedRenderer/index';
import {SearchButton} from '../../../buttons/SearchButtonComponent';
import {MiniTextInputField} from '../../../inputs/MiniTextInput';

export const CourseDescriptionGetPanel = withLiteObserverAndTheme(props => {
  const {theme} = props;
  const {childX, getFontSize} = theme;
  const courseDetails = getCourseDetailStore();
  return (
    <View style={{width: 80 * childX}}>
      <Text style={{fontSize: getFontSize(4), paddingHorizontal: childX * 2}}>
        Course Description:
      </Text>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <MiniTextInputField
          placeholder={'Course Description'}
          value={courseDetails.courseDescription.get()}
          onValueChange={text => {
            courseDetails.setCourseDescription(text);
          }}
        />
        <SearchButton onPress={() => {}} />
      </View>
    </View>
  );
});
