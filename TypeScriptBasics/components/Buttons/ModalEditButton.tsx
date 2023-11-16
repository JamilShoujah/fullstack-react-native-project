/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-native/no-inline-styles */
import {TouchableOpacity, Text} from 'react-native';
import {ModalButtonFunctionality} from '../../data/types/ModalButtonProps';

export const EditButtonComponent: React.FC<ModalButtonFunctionality> = ({
  func,
}) => (
  <TouchableOpacity
    style={{
      backgroundColor: 'green',
      borderRadius: 10,
      padding: 10,
      margin: 5,
      alignContent: 'center',
    }}
    onPress={func}>
    <Text style={{color: 'white', fontSize: 15, textAlign: 'center'}}>
      Edit
    </Text>
  </TouchableOpacity>
);
