import {View, Text, TouchableOpacity} from 'react-native';
import {withLiteObserverAndTheme} from '../../../shared/enhancedRenderer/index';
import {getGetPageModalStore} from '../../../store/modal-stores/index';

export const GetPageComponent = withLiteObserverAndTheme(props => {
  const {theme} = props;
  const {colors, unitX, unitY, getFontSize} = theme;
  const getPageModalStore = getGetPageModalStore();
  return (
    <View
      style={{
        paddingHorizontal: unitX * 3,
        paddingTop: unitY * 5,
        marginHorizontal: unitX * 5,
        alignItems: 'center',
      }}>
      <Text
        style={{
          color: colors.lightText,
          fontSize: getFontSize(20),
          fontWeight: '900',
          textAlign: 'center',
          top: unitY,
        }}>
        GET
      </Text>
      <TouchableOpacity
        onPress={() => {
          getPageModalStore.changeStudentModalVisibility(true);
        }}
        style={{
          marginVertical: unitY * 4,
          backgroundColor: colors.primaryColor,
          paddingVertical: unitY * 5,
          borderRadius: 2 * unitX,
          width: unitX * 70,
        }}>
        <Text
          style={{
            color: colors.darkText,
            fontWeight: 'bold',
            fontSize: getFontSize(4),
            textAlign: 'center',
          }}>
          Show student Modal
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          getPageModalStore.changeCourseModalVisibility(true);
        }}
        style={{
          marginVertical: unitY * 4,
          backgroundColor: colors.primaryColor,
          paddingVertical: unitY * 5,
          borderRadius: 2 * unitX,
          width: unitX * 70,
        }}>
        <Text
          style={{
            color: colors.darkText,
            fontWeight: 'bold',
            fontSize: getFontSize(4),
            textAlign: 'center',
          }}>
          Show Course Modal
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          getPageModalStore.changeJoinedModalVisibility(true);
        }}
        style={{
          marginVertical: unitY * 4,
          backgroundColor: colors.primaryColor,
          paddingVertical: unitY * 5,
          borderRadius: 2 * unitX,
          width: unitX * 70,
        }}>
        <Text
          style={{
            color: colors.darkText,
            fontWeight: 'bold',
            fontSize: getFontSize(4),
            textAlign: 'center',
          }}>
          Show Joined Modal
        </Text>
      </TouchableOpacity>
    </View>
  );
});
