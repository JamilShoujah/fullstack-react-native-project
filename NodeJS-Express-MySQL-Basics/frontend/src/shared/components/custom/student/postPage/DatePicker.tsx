import React from 'react';
import {Text, View} from 'react-native';
import getStudentDetailStore from '../../../../../store/student-store/student-store';
import {withLiteObserverAndTheme} from '../../../../enhancedRenderer/index';
import {MicroTextInputField} from '../../../inputs/MicroTextInput';

export const DatePickerComponent = withLiteObserverAndTheme(props => {
  const {theme} = props;
  const {childX, getFontSize} = theme;
  const studentDetails = getStudentDetailStore();
  return (
    <View style={{width: 80 * childX}}>
      <Text style={{fontSize: getFontSize(4), paddingHorizontal: childX * 2}}>
        Date of Birth:
      </Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <MicroTextInputField
          placeholder={'day'}
          value={studentDetails.birthDay.get()}
          onValueChange={text => {
            studentDetails.setBirthDay(text);
          }}
        />
        <Text style={{fontSize: getFontSize(12)}}>/</Text>
        <MicroTextInputField
          placeholder={'month'}
          value={studentDetails.birthMonth.get()}
          onValueChange={text => {
            studentDetails.setBirthMonth(text);
          }}
        />
        <Text style={{fontSize: getFontSize(12)}}>/</Text>
        <MicroTextInputField
          placeholder={'year'}
          value={studentDetails.birthYear.get()}
          onValueChange={text => {
            studentDetails.setBirthYear(text);
          }}
        />
      </View>
    </View>
  );
});
