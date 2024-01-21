import React from 'react';
import {Text, View} from 'react-native';
import getStudentDetailStore from '../../../../../store/student-store/student-store';
import {fetchStudentById} from '../../../../data/api/getApi/student/get-student-by-id';
import {withLiteObserverAndTheme} from '../../../../enhancedRenderer/index';
import {SearchButton} from '../../../buttons/SearchButton';
import {MiniTextInputField} from '../../../inputs/MiniTextInput';

export const StudentIdGetPanel = withLiteObserverAndTheme(props => {
  const {theme} = props;
  const {childX, getFontSize} = theme;
  const studentDetails = getStudentDetailStore();
  return (
    <View style={{width: 80 * childX}}>
      <Text style={{fontSize: getFontSize(4), paddingHorizontal: childX * 2}}>
        Student ID:
      </Text>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <MiniTextInputField
          placeholder={'Student ID'}
          value={studentDetails.studentId.get()}
          onValueChange={text => {
            studentDetails.setStudentId(text);
          }}
        />
        <SearchButton
          onPress={() => {
            fetchStudentById();
          }}
        />
      </View>
    </View>
  );
});
