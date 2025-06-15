import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {TFullStudent} from '../../../shared/data/types/student/complete-student-object';
import {withLiteObserverAndTheme} from '../../../shared/enhancedRenderer/index';
import {saveState} from '../../../shared/utils/storage/storage';
import getStudentDataStore from '../../../store/student-store/student-data-store';

export const AllStudentsComponent = withLiteObserverAndTheme(props => {
  const {theme} = props;
  const {colors, getFontSize, unitX, unitY} = theme;
  const studentData = getStudentDataStore();

  const renderItem = ({item}: {item: TFullStudent}) => {
    return (
      <View style={{paddingHorizontal: 5 * unitX, flexDirection: 'row'}}>
        <Text style={{width: unitX * 10, textAlign: 'center'}}>
          {item.student_id}
        </Text>
        <Text style={{width: unitX * 30}}>
          {item.student_first_name + ' ' + item.student_last_name}
        </Text>
        <Text style={{width: unitX * 70}}>{item.email}</Text>
      </View>
    );
  };

  return (
    <View style={{alignItems: 'center'}}>
      <Text
        style={{
          color: colors.primaryColor,
          fontSize: getFontSize(8),
          fontWeight: '900',
        }}>
        All Students
      </Text>

      <View
        style={{
          backgroundColor: colors.secondaryLight,
          width: 100 * unitX,
          borderRadius: unitX * 3,
        }}>
        <View
          style={{
            paddingTop: 5 * unitY,
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 5 * unitX,
          }}>
          <Text style={{width: unitX * 10}}>Id</Text>
          <Text style={{width: unitX * 30}}>Name</Text>
          <Text style={{width: unitX * 70}}>Email</Text>
        </View>
        <FlatList
          data={studentData.allStudents.get()}
          keyExtractor={item => item.student_id.toString()}
          renderItem={renderItem}
          style={{paddingVertical: unitX * 2}}
        />
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: colors.primaryColor,
          marginVertical: unitY * 5,
          paddingHorizontal: unitX * 5,
          paddingVertical: unitY * 2,
          borderRadius: unitX * 3,
          width: 50 * unitX,
          alignItems: 'center',
        }}
        onPress={() => {
          saveState('myStore', studentData.allStudents.get());
        }}>
        <Text>Save</Text>
      </TouchableOpacity>
    </View>
  );
});
