import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import getJoinedDetailStore from '../../../../../store/joined-store/joined-store';
import {withLiteObserverAndTheme} from '../../../../enhancedRenderer/index';
import {CustomButton} from '../../../buttons/CustomButton';
import {MediumTextInputField} from '../../../inputs/MediumSizeTextInput';

export const StudentIdGetPanel = withLiteObserverAndTheme(props => {
  const {theme} = props;
  const {childX, getFontSize} = theme;
  const studentDetails = getJoinedDetailStore();
  return (
    <View style={{width: 80 * childX}}>
      <Text style={{fontSize: getFontSize(4), paddingHorizontal: childX * 2}}>
        Get by Student ID
      </Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <MediumTextInputField
          placeholder={'Student Id'}
          value={studentDetails.studentId.get()}
          onValueChange={text => {
            studentDetails.setStudentId(text);
          }}
        />
        <CustomButton placeHolder={'class'} onPress={() => {}} />
        <CustomButton placeHolder={'text-increase'} onPress={() => {}} />
      </View>
    </View>
  );
});
