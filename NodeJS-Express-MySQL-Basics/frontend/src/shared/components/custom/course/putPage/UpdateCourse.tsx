import {View, Text} from 'react-native';
import getCourseDetailStore from '../../../../../store/course-store/course-store';
import getJoinedDetailStore from '../../../../../store/joined-store/joined-store';
import {getPutPageModalStore} from '../../../../../store/modal-stores/index';
import {fetchCourseById} from '../../../../data/api/getApi/course/get-course-by-id';
import {withLiteObserverAndTheme} from '../../../../enhancedRenderer/index';
import {CustomButton} from '../../../buttons/CustomButton';
import {MiniTextInputField} from '../../../inputs/MiniTextInput';

export const CourseUpdateById = withLiteObserverAndTheme(props => {
  const {theme} = props;
  const {colors, childX, childY, getFontSize} = theme;
  const courseModal = getPutPageModalStore();
  const courseDetails = getCourseDetailStore();
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
          course Id:
        </Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <MiniTextInputField
            placeholder={'Course Id'}
            value={courseDetails.courseID.get()}
            onValueChange={text => {
              courseDetails.setCourseId(text);
            }}
          />
          <CustomButton
            placeHolder={'upload'}
            onPress={() => {
              courseModal.changeCourseModalVisibility(true);
              fetchCourseById();
            }}
          />
        </View>
      </View>
    </View>
  );
});
