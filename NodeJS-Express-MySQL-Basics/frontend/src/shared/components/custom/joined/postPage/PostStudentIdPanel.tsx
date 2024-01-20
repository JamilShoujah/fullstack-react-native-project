import React from 'react';
import {Text, View} from 'react-native';
import getJoinedDetailStore from '../../../../../store/joined-store/joined-store';
import {withLiteObserverAndTheme} from '../../../../enhancedRenderer/index';
import {FullTextInputField} from '../../../inputs/FullsizeInputText';

export const StundetIdPostPanel = withLiteObserverAndTheme(props => {
  const {theme} = props;
  const {childX, getFontSize} = theme;
  const studentDetails = getJoinedDetailStore();
  return (
    <View style={{width: 80 * childX}}>
      <Text style={{fontSize: getFontSize(4), paddingHorizontal: childX * 2}}>
        Student ID
      </Text>
      <FullTextInputField
        placeholder={'Student Id'}
        value={studentDetails.dropStudentId.get()}
        onValueChange={text => {
          studentDetails.setDropStudentId(text);
        }}
      />
    </View>
  );
});
