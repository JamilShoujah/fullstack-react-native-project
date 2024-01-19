/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Modal, Text, TouchableOpacity, View} from 'react-native';
import getInputFieldStore from '../../../../store/course-store/course-store';
import {withLiteObserverAndTheme} from '../../../enhancedRenderer/index';
import getGetPageModalStore from '../../../../store/modal-stores/get-page-modal';
import {CloseButton} from '../../buttons/CloseButton';
import {CourseNameGetPanel} from '../../custom/course/getPage/CourseNamePanel';
import {CourseIdPanel} from '../../custom/course/getPage/CourseIdPanel';
import {GetAllButton} from '../../buttons/GetAllButton';
import {fetchAllCourses} from '../../../data/api/getApi/course/get-all-courses';
import getCourseDetailStore from '../../../../store/course-store/course-store';

export const CourseModal = withLiteObserverAndTheme(props => {
  const {theme} = props;
  const {colors, childX, childY, getFontSize} = theme;
  const courseModal = getGetPageModalStore();
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
              Course
            </Text>
            <CloseButton
              onPress={() => {
                courseModal.changeCourseModalVisibility(false);
                courseDetails.setCourseId('');
                courseDetails.setCourseName('');
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
            <CourseNameGetPanel />
            <CourseIdPanel />
            <GetAllButton
              onPress={() => {
                fetchAllCourses();
              }}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
});
