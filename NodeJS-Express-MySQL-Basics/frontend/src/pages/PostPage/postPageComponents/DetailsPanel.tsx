import React from 'react';
import {Text, View} from 'react-native';

import {CourseDetailsPanel} from './CourseDetailsPanel';
import {JoinedDetailsPanel} from './JoinedDetailsPanel';
import {StudentDetailsPanel} from './StudentDetailsPanel';
export const DetailsPanel = () => {
  return (
    <View>
      <StudentDetailsPanel />
      <CourseDetailsPanel />
      <JoinedDetailsPanel />
    </View>
  );
};
