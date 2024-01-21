/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Modal, Text, TouchableOpacity, View} from 'react-native';
import {withLiteObserverAndTheme} from '../../../enhancedRenderer/index';
import {getPutPageModalStore} from '../../../../store/modal-stores/index';
import {CloseButton} from '../../buttons/CloseButton';
import getStudentDetailStore from '../../../../store/student-store/student-store';
import {CustomButton} from '../../buttons/CustomButton';
import {CourseNamePostPanel} from '../../custom/course/postPage/CourseName';
import {CourseDescriptionPostPanel} from '../../custom/course/postPage/CourseDescription';
import getCourseDetailStore from '../../../../store/course-store/course-store';
import {updateCourse} from '../../../data/api/putApi/update-course-details';

export const CourseUpdateModal = withLiteObserverAndTheme(props => {
  const {theme} = props;
  const {colors, childX, childY, getFontSize} = theme;
  const courseModal = getPutPageModalStore();
  const courseDetails = getCourseDetailStore();
  return (
    <Modal transparent={true} visible={courseModal.courseModalVisible.get()}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: colors.modalBackground,
        }}>
        <View
          style={{
            backgroundColor: colors.secondaryColor,
            borderRadius: childX * 3,
            paddingHorizontal: childX * 3,
            paddingVertical: childY,
            marginVertical: childY * 3,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{
                marginTop: childY * 3,
                fontSize: getFontSize(8),
                color: colors.lightText,
                fontWeight: 'bold',
              }}>
              Student
            </Text>
            <CloseButton
              onPress={() => {
                courseModal.changeCourseModalVisibility(false);
                courseDetails.setCourseName('');
                courseDetails.setCourseDescription('');
              }}
            />
          </View>
          <View
            style={{
              backgroundColor: colors.secondaryLight,
              borderRadius: childX * 3,
              marginVertical: childY * 3,
              paddingHorizontal: childX * 1,
              paddingVertical: childY * 1,
              alignItems: 'center',
            }}>
            <CourseNamePostPanel />
            <CourseDescriptionPostPanel />
            <CustomButton
              placeHolder={'upload'}
              onPress={() => {
                updateCourse();
              }}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
});
