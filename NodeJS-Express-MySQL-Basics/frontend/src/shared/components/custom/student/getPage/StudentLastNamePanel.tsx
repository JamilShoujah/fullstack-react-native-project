import React from 'react';
import {Text, View} from 'react-native';
import getStudentDetailStore from '../../../../../store/student-store/student-store';
import {fetchStudentsByLastName} from '../../../../data/api/getApi/student/get-students-by-last-name';
import {withLiteObserverAndTheme} from '../../../../enhancedRenderer/index';
import {SearchButton} from '../../../buttons/SearchButton';
import {MiniTextInputField} from '../../../inputs/MiniTextInput';

export const StudentLastNameGetPanel = withLiteObserverAndTheme(props => {
  const {theme} = props;
  const {childX, getFontSize} = theme;
  const studentDetails = getStudentDetailStore();
  return (
    <View style={{width: 80 * childX}}>
      <Text style={{fontSize: getFontSize(4), paddingHorizontal: childX * 2}}>
        Last Name:
      </Text>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <MiniTextInputField
          placeholder={'Last Name'}
          value={studentDetails.lastName.get()}
          onValueChange={text => {
            studentDetails.setLastName(text);
          }}
        />
        <SearchButton
          onPress={() => {
            fetchStudentsByLastName();
          }}
        />
      </View>
    </View>
  );
});
