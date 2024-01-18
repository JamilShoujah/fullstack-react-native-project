import React from 'react';
import {Text, View} from 'react-native';

import {StudentDeleteByEmailPanel} from '../../DeletePage/deletePageCustomComponents/StudentDeleteByEmailPanel';
import {StudentDeletePanel} from '../../DeletePage/deletePageCustomComponents/StudentDeletePanel';
import {withThemeAndProps} from '../../../shared/enhancedRenderer/index';

export const DeleteStudentPanel = withThemeAndProps(props => {
  const {theme} = props;
  const {colors, childX, childY, getFontSize} = theme;

  return (
    <View>
      <View
        style={{
          backgroundColor: colors.secondaryColor,
          borderRadius: childX * 3,
          paddingHorizontal: childX * 3,
          paddingVertical: childY,
          marginVertical: childY * 3,
        }}>
        <Text
          style={{
            marginVertical: childY * 3,
            fontSize: getFontSize(8),
            color: colors.lightText,
            fontWeight: 'bold',
          }}>
          Delete Student
        </Text>
        <StudentDeletePanel />
        <StudentDeleteByEmailPanel />
      </View>
    </View>
  );
});
