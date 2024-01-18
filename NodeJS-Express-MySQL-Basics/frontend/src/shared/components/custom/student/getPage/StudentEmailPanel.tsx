import React from 'react';
import {Text, View} from 'react-native';
import getStudentDetailStore from '../../../../../store/student-store/student-store';
import {withLiteObserverAndTheme} from '../../../../enhancedRenderer/index';
import {SearchButton} from '../../../buttons/SearchButtonComponent';
import {MiniTextInputField} from '../../../inputs/MiniTextInput';

export const StudentEmailGetPanel = withLiteObserverAndTheme(props => {
  const {theme} = props;
  const {childX, getFontSize} = theme;
  const studentDetails = getStudentDetailStore();
  return (
    <View style={{width: 80 * childX}}>
      <Text style={{fontSize: getFontSize(4), paddingHorizontal: childX * 2}}>
        Email Address:
      </Text>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <MiniTextInputField
          placeholder={'First Name'}
          value={studentDetails.emailAddress.get()}
          onValueChange={text => {
            studentDetails.setEmailAddress(text);
          }}
        />
        <SearchButton onPress={() => {}} />
      </View>
    </View>
  );
});
