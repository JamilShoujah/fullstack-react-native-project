import React from 'react';
import {Text, View} from 'react-native';
import getStudentDataStore from '../../../../../store/student-store/student-data-store';
import {withLiteObserverAndTheme} from '../../../../enhancedRenderer/index';
import {FullTextInputField} from '../../../inputs/FullsizeInputText';

export const PhoneNumberPutPanel = withLiteObserverAndTheme(props => {
  const {theme} = props;
  const {childX, getFontSize} = theme;
  const studentDetails = getStudentDataStore();
  return (
    <View style={{width: 80 * childX}}>
      <Text style={{fontSize: getFontSize(4), paddingHorizontal: childX * 2}}>
        Phone Number: (if available)
      </Text>
      <FullTextInputField
        placeholder={'Phone Number'}
        value={studentDetails.phoneNumber.get()}
        onValueChange={text => {
          studentDetails.setPhoneNumber(text);
        }}
      />
    </View>
  );
});
