import React from 'react';
import {Text, View} from 'react-native';

import {CourseDetailsPanel} from './CourseDetailsPanel';
import {StudentDetailsPanel} from './StudentDetailsPanel';
export const DetailsPanel = () => {
  return (
    <View>
      {/* // these have to become modals */}
      <StudentDetailsPanel />
      <CourseDetailsPanel />
    </View>
  );
};
