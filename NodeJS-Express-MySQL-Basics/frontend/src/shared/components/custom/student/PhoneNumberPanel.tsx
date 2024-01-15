import React from 'react';
import {Text, View} from 'react-native';
import getStudentDetailStore from '../../../../data/store/post-page-student-store';
import {withLiteObserverAndTheme} from '../../../enhancedRenderer/index';
import {FullTextInputField} from '../../inputs/FullsizeInputText';

export const PhoneNumberPanel = withLiteObserverAndTheme(props => {
  const {theme} = props;
  const {childX, getFontSize} = theme;
  const studentDetails = getStudentDetailStore();
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
