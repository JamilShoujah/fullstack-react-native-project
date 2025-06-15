import {View} from 'react-native';
import {UpdateCoursePanel} from './UpdateCourse';
import {UpdateGradesPanel} from './UpdateGrades';

import {UpdateStudentPanel} from './UpdateStudentPanel';

export const PutPageComponent = () => {
  return (
    <View>
      <UpdateStudentPanel />
      <UpdateCoursePanel />
      <UpdateGradesPanel />
    </View>
  );
};
