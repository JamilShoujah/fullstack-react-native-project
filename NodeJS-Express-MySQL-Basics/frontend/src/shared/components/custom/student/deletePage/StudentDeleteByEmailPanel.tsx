import {View, Text} from 'react-native';
import getJoinedDetailStore from '../../../../../store/joined-store/joined-store';
import {deleteStudentByEmail} from '../../../../data/api/deleteApi/student/delete-student-by-email';
import {withLiteObserverAndTheme} from '../../../../enhancedRenderer/index';
import {DeleteButton} from '../../../buttons/DeleteButton';
import {MiniTextInputField} from '../../../inputs/MiniTextInput';

export const StudentDeleteByEmailPanel = withLiteObserverAndTheme(props => {
  const {theme} = props;
  const {colors, childX, childY, getFontSize} = theme;
  const joinedDetails = getJoinedDetailStore();
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
          Student Email:
        </Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <MiniTextInputField
            placeholder={'student email'}
            value={joinedDetails.studentEmail.get()}
            onValueChange={text => {
              joinedDetails.setStudentEmail(text);
            }}
          />
          <DeleteButton
            onPress={() => {
              deleteStudentByEmail();
            }}
          />
        </View>
      </View>
    </View>
  );
});
