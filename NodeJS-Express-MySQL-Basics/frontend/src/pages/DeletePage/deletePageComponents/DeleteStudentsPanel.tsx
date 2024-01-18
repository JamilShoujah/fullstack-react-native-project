import React from 'react';
import {Text, View} from 'react-native';
import {DeleteButton} from '../../../shared/components/buttons/DeleteButton';
import {CourseDeletePanel} from '../../../shared/components/custom/course/deletePage/CourseDeletePanel';
import {StudentDeleteByEmailPanel} from '../../../shared/components/custom/course/deletePage/StudentDeleteByEmailPanel';
import {StudentDeletePanel} from '../../../shared/components/custom/course/deletePage/StudentDeletePanel';
import {MiniTextInputField} from '../../../shared/components/inputs/MiniTextInput';
import {withThemeAndProps} from '../../../shared/enhancedRenderer/index';
import getJoinedDetailStore from '../../../store/joined-store/joined-store';

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
