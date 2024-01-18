/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {CourseIdPostPanel} from '../../../shared/components/custom/joined/postPage/PostCourseIdPanel';
import {StundetIdPostPanel} from '../../../shared/components/custom/joined/postPage/PostStudentIdPanel';
import {withLiteObserverAndTheme} from '../../../shared/enhancedRenderer/index';

export const JoinedDetailsPanel = withLiteObserverAndTheme(props => {
  //   const joinedDetails = getJoinedDetailStore();
  const {theme} = props;
  const {colors, childX, childY, getFontSize} = theme;
  return (
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
        Register Details
      </Text>
      <View
        style={{
          backgroundColor: colors.secondaryLight,
          borderRadius: childX * 3,
          marginVertical: childY * 1,
          paddingHorizontal: childX * 1,
          paddingVertical: childY * 3,
          alignItems: 'center',
        }}>
        <StundetIdPostPanel />
        <CourseIdPostPanel />
        <TouchableOpacity
          onPress={() => {}}
          style={{
            backgroundColor: colors.secondaryColor,
            borderRadius: 2 * childX,
            width: 10 * childX,
            height: 10 * childY,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: colors.lightText,
              fontSize: getFontSize(8),
            }}>
            +
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
});
