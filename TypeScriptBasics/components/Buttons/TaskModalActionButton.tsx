/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-native/no-inline-styles */
import {TouchableOpacity, Text} from 'react-native';
import {ModalCustomButtonFunctionality} from '../../data/types/ModalCustomButton';

export const CustomModalButton: React.FC<ModalCustomButtonFunctionality> = ({
  func,
  name,
  color,
}) => (
  <TouchableOpacity
    style={{
      backgroundColor: color,
      borderRadius: 10,
      padding: 10,
      margin: 5,
      alignContent: 'center',
    }}
    onPress={func}>
    <Text style={{color: 'white', fontSize: 15, textAlign: 'center'}}>
      {name}
    </Text>
  </TouchableOpacity>
);
