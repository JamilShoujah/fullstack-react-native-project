/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {View} from 'react-native';
import {SubmitButton} from '../../../shared/components/sumbitButtonComponent';
import {TextInputField} from '../../../shared/components/textInputComponent';
import {IStudentSearch} from '../../../shared/data/types/interfaces/studentSearchInterface';

export const Search: React.FC<IStudentSearch> = ({
  placeholder,
  value,
  onValueChange,
  onPress,
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderRadius: 10,
      }}>
      <TextInputField
        placeholder={placeholder}
        value={value}
        onValueChange={onValueChange}
      />
      <SubmitButton onPress={onPress} />
    </View>
  );
};
