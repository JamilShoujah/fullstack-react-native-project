import React from 'react';
import {Text, View} from 'react-native';

import {withLiteObserverAndTheme} from '../../../shared/enhancedRenderer/index';
import {CourseDetailsPanel} from './CourseDetailsPanel';
import {StudentDetailsPanel} from './StudentDetailsPanel';
export const DetailsPanel = withLiteObserverAndTheme(props => {
  const {theme} = props;
  const {colors, childX, childY, getFontSize} = theme;
  return (
    <View>
      <StudentDetailsPanel />
      <CourseDetailsPanel />
    </View>
  );
});
