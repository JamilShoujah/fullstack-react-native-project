import React from 'react';
import {View} from 'react-native';
import {DeleteCoursePanel} from './DeleteCoursePanel';
import {DeleteStudentPanel} from './DeleteStudentsPanel';
import {DropCoursePanel} from './DropCoursePanel';

export const DetailsPanel = () => {
  return (
    <View>
      <DeleteStudentPanel />
      <DeleteCoursePanel />
      <DropCoursePanel />
    </View>
  );
};
