import React from 'react';
import {Text, View} from 'react-native';
import getStudentDetailStore from '../../../data/store/post-page-student-store';
import {withLiteObserverAndTheme} from '../../enhancedRenderer/index';
import {FullTextInputField} from '../inputs/FullsizeInputText';

export const LastNamePanel = withLiteObserverAndTheme(props => {
  const {theme} = props;
  const {childX, getFontSize} = theme;
  const studentDetails = getStudentDetailStore();
  return (
    <View style={{width: 80 * childX}}>
      <Text style={{fontSize: getFontSize(4), paddingHorizontal: childX * 2}}>
        Last Name:
      </Text>
      <FullTextInputField
        placeholder={'Last Name'}
        value={studentDetails.lastName.get()}
        onValueChange={text => {
          studentDetails.setLastName(text);
        }}
      />
    </View>
  );
});
