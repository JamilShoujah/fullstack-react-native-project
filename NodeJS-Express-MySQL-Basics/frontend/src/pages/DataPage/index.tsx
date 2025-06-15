import {FlatList, TouchableOpacity, Text, View} from 'react-native';
import {TFullStudent} from '../../shared/data/types/student/complete-student-object';
import {withLiteObserverAndTheme} from '../../shared/enhancedRenderer/index';
import {loadState, saveState} from '../../shared/utils/storage/storage';
import getStudentDataStore from '../../store/student-store/student-data-store';
import {AllStudentsComponent} from './dataPageComponents/allStudentsComponet';

export const DataPage = withLiteObserverAndTheme(props => {
  const {theme} = props;
  const {colors} = theme;
  const studentData = getStudentDataStore();
  const savedState = loadState('myStore');
  if (studentData.allStudents.get().length === 0) {
    studentData.setAllStudents(savedState);
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.backgroundColor,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <AllStudentsComponent />
    </View>
  );
});
