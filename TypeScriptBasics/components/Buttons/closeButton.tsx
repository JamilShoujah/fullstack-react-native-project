/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-native/no-inline-styles */
import {TouchableOpacity, Text} from 'react-native';
import {ModalButtonFunctionality} from '../../data/types/ModalButtonProps';

export const CloseModalButton: React.FC<ModalButtonFunctionality> = ({
  func,
}) => (
  <TouchableOpacity
    style={{
      top: 20,
      right: 10,
      borderRadius: 10,
      alignContent: 'center',
      position: 'absolute',
      margin: 10,
    }}
    onPress={func}>
    <Text
      style={{
        color: 'red',
        fontSize: 30,
        textAlign: 'center',
        fontWeight: '900',
      }}>
      X
    </Text>
  </TouchableOpacity>
);
