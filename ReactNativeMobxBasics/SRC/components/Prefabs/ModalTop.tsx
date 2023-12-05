/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-native/no-inline-styles */
import {View, Image, Text} from 'react-native';
import {ModalVisible} from '../../Data/Store/ModalStore';

export const ModalTop = () => {
  return (
    <View>
      <Image
        source={{uri: ModalVisible.getMarketItem.Icon}}
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
        {ModalVisible.getMarketItem.Name}
      </Text>
    </View>
  );
};
