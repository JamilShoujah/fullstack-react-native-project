import React from 'react';
import {Text, View} from 'react-native';
import getStudentDataStore from '../../../../../store/student-store/student-data-store';
import {withLiteObserverAndTheme} from '../../../../enhancedRenderer/index';
import {FullTextInputField} from '../../../inputs/FullsizeInputText';

export const FirstNamePutPanel = withLiteObserverAndTheme(props => {
  const {theme} = props;
  const {childX, getFontSize} = theme;
  const studentDetails = getStudentDataStore();
  return (
    <View style={{width: 80 * childX}}>
      <Text style={{fontSize: getFontSize(4), paddingHorizontal: childX * 2}}>
        First Name:
      </Text>
      <FullTextInputField
        placeholder={'First Name'}
        value={studentDetails.firstName.get()}
        onValueChange={text => {
          studentDetails.setFirstName(text);
        }}
      />
    </View>
  );
});
