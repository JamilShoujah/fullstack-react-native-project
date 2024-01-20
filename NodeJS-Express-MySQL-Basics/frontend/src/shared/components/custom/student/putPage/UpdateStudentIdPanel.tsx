import {View, Text} from 'react-native';
import getJoinedDetailStore from '../../../../../store/joined-store/joined-store';
import {getPutPageModalStore} from '../../../../../store/modal-stores/index';
import {withLiteObserverAndTheme} from '../../../../enhancedRenderer/index';
import {CustomButton} from '../../../buttons/CustomButton';
import {MiniTextInputField} from '../../../inputs/MiniTextInput';

export const StudentUpdateById = withLiteObserverAndTheme(props => {
  const {theme} = props;
  const {colors, childX, childY, getFontSize} = theme;
  const joinedDetails = getJoinedDetailStore();
  const studentModal = getPutPageModalStore();
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
            value={joinedDetails.studentId.get()}
            onValueChange={text => {
              joinedDetails.setStudentId(text);
            }}
          />
          <CustomButton
            placeHolder={'upload'}
            onPress={() => {
              studentModal.changeStudentModalVisibility(true);
            }}
          />
        </View>
      </View>
    </View>
  );
});
