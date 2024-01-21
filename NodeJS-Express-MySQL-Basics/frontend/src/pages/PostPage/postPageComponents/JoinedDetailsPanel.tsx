/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {CourseIdPostPanel} from '../../../shared/components/custom/joined/postPage/PostCourseIdPanel';
import {StundetIdPostPanel} from '../../../shared/components/custom/joined/postPage/PostStudentIdPanel';
import {registerStudentToCourse} from '../../../shared/data/api/postApi/joined/register-student-to-course';
import {withLiteObserverAndTheme} from '../../../shared/enhancedRenderer/index';
import getJoinedDetailStore from '../../../store/joined-store/joined-store';

export const JoinedDetailsPanel = withLiteObserverAndTheme(props => {
  const {theme} = props;
  const {colors, childX, childY, getFontSize} = theme;
  const joinedDetails = getJoinedDetailStore();
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

        <View
          style={{
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            onPress={() => {
              registerStudentToCourse();
            }}
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

          <TouchableOpacity
            onPress={() => {
              joinedDetails.setCourseId('');
              joinedDetails.setStudentId('');
            }}
            style={{
              backgroundColor: colors.warningColor,
              borderRadius: 2 * childX,
              width: 15 * childX,
              height: 10 * childY,
              marginHorizontal: childX * 2,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: colors.lightText,
                fontSize: getFontSize(6),
              }}>
              clear
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
});
