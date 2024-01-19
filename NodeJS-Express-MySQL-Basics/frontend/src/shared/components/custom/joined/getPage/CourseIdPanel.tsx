import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import getJoinedDetailStore from '../../../../../store/joined-store/joined-store';
import {fetchGradesByCourse} from '../../../../data/api/getApi/joined/get-course-grades';
import {fetchStudentByCourse} from '../../../../data/api/getApi/joined/get-course-students';
import {withLiteObserverAndTheme} from '../../../../enhancedRenderer/index';
import {CustomButton} from '../../../buttons/CustomButton';
import {MediumTextInputField} from '../../../inputs/MediumSizeTextInput';

export const CourseIdGetPanel = withLiteObserverAndTheme(props => {
  const {theme} = props;
  const {childX, getFontSize} = theme;
  const courseDetails = getJoinedDetailStore();
  return (
    <View style={{width: 80 * childX}}>
      <Text style={{fontSize: getFontSize(4), paddingHorizontal: childX * 2}}>
        Get by Course ID
      </Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <MediumTextInputField
          placeholder={'Course Id'}
          value={courseDetails.courseId.get()}
          onValueChange={text => {
            courseDetails.setCourseId(text);
          }}
        />
        <CustomButton
          placeHolder={'people'}
          onPress={() => {
            fetchStudentByCourse();
          }}
        />
        <CustomButton
          placeHolder={'text-increase'}
          onPress={() => {
            fetchGradesByCourse();
          }}
        />
      </View>
    </View>
  );
});
