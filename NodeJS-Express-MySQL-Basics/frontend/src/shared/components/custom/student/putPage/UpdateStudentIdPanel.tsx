import {View, Text} from 'react-native';
import getJoinedDetailStore from '../../../../../store/joined-store/joined-store';
import {getPutPageModalStore} from '../../../../../store/modal-stores/index';
import getStudentDetailStore from '../../../../../store/student-store/student-store';
import {fetchStudentById} from '../../../../data/api/getApi/student/get-student-by-id';
import {withLiteObserverAndTheme} from '../../../../enhancedRenderer/index';
import {CustomButton} from '../../../buttons/CustomButton';
import {MiniTextInputField} from '../../../inputs/MiniTextInput';

export const StudentUpdateById = withLiteObserverAndTheme(props => {
  const {theme} = props;
  const {colors, childX, childY, getFontSize} = theme;
  const studentModal = getPutPageModalStore();
  const studentDetails = getStudentDetailStore();
  return (
    <View
      style={{
        backgroundColor: colors.secondaryLight,
        borderRadius: childX * 3,
        marginVertical: childY * 1,
        paddingHorizontal: childX * 1,
        paddingVertical: childY * 3,
        alignItems: 'center',
      }}>
      <View style={{width: 80 * childX}}>
        <Text style={{fontSize: getFontSize(4), paddingHorizontal: childX * 2}}>
          Student Id:
        </Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <MiniTextInputField
            placeholder={'student Id'}
            value={studentDetails.studentId.get()}
            onValueChange={text => {
              studentDetails.setStudentId(text);
            }}
          />
          <CustomButton
            placeHolder={'upload'}
            onPress={() => {
              studentModal.changeStudentModalVisibility(true);
              fetchStudentById();
            }}
          />
        </View>
      </View>
    </View>
  );
});
