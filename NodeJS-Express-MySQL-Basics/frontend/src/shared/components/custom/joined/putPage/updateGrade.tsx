import {View, Text} from 'react-native';
import getJoinedDetailStore from '../../../../../store/joined-store/joined-store';
import {updateStudentCourseGrade} from '../../../../data/api/putApi/update-student-course-grade';
import {withLiteObserverAndTheme} from '../../../../enhancedRenderer/index';
import {CustomButton} from '../../../buttons/CustomButton';
import {FullTextInputField} from '../../../inputs/FullsizeInputText';

export const GradeUpdate = withLiteObserverAndTheme(props => {
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
          Student Id:
        </Text>
        <FullTextInputField
          placeholder={'Student Id'}
          value={joinedDetails.gradeStudentId.get()}
          onValueChange={text => {
            joinedDetails.setGradeStudentId(text);
          }}
        />
        <Text style={{fontSize: getFontSize(4), paddingHorizontal: childX * 2}}>
          course Id:
        </Text>
        <FullTextInputField
          placeholder={'Course Id'}
          value={joinedDetails.gradeCourseId.get()}
          onValueChange={text => {
            joinedDetails.setGradeCourseId(text);
          }}
        />
        <Text style={{fontSize: getFontSize(4), paddingHorizontal: childX * 2}}>
          Grade:
        </Text>
        <FullTextInputField
          placeholder={'grade'}
          value={joinedDetails.grade.get()}
          onValueChange={text => {
            joinedDetails.setGrade(text);
          }}
        />
      </View>
      <CustomButton
        placeHolder={'upload'}
        onPress={() => {
          updateStudentCourseGrade();
        }}
      />
    </View>
  );
});
