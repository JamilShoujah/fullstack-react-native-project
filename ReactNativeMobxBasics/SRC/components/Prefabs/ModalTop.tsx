/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-native/no-inline-styles */
import {View, Image, Text} from 'react-native';
import {MODAL_STORE} from '../../Data/Constants/VariableConstants';

export const ModalTop = () => {
  return (
    <View>
      <Image
        source={{uri: MODAL_STORE.marketItem.get().Icon}}
        style={{
          width: 100,
          height: 100,
          borderRadius: 10,
          borderWidth: 2,
          margin: 10,
        }}
      />
      <Text
        style={{
          textAlign: 'center',
          fontSize: 30,
        }}>
        {MODAL_STORE.marketItem.get().Name}
      </Text>
    </View>
  );
};
