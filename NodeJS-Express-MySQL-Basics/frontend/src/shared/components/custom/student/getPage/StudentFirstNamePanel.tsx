import React from 'react';
import {Text, View} from 'react-native';
import getStudentDetailStore from '../../../../../store/student-store/student-store';
import {withLiteObserverAndTheme} from '../../../../enhancedRenderer/index';
import {SearchButton} from '../../../buttons/SearchButtonComponent';
import {MiniTextInputField} from '../../../inputs/MiniTextInput';

export const StudentFirstNameGetPanel = withLiteObserverAndTheme(props => {
  const {theme} = props;
  const {childX, getFontSize} = theme;
  const studentDetails = getStudentDetailStore();
  return (
    <View style={{width: 80 * childX}}>
      <Text style={{fontSize: getFontSize(4), paddingHorizontal: childX * 2}}>
        First Name:
      </Text>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <MiniTextInputField
          placeholder={'First Name'}
          value={studentDetails.firstName.get()}
          onValueChange={text => {
            studentDetails.setFirstName(text);
          }}
        />
        <SearchButton onPress={() => {}} />
      </View>
    </View>
  );
});
