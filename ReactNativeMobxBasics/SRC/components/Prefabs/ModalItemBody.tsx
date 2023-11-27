/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-native/no-inline-styles */
import {observer} from 'mobx-react';
import {View, Text} from 'react-native';
import {ModalVisible} from '../../Data/Store/ModalVisibileStore';

export const ModalBody = observer(() => {
  return (
    <View
      style={{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
      }}>
      <Text
        style={{
          textAlign: 'center',
          color: 'black',
          padding: 5,
        }}>
        Price: ${ModalVisible.MarketItem?.Price}
      </Text>
      <Text
        style={{
          textAlign: 'center',
          color: 'black',
          padding: 5,
        }}>
        Discount %: {ModalVisible.MarketItem?.DiscountPercentage}
      </Text>
      <Text
        style={{
          textAlign: 'center',
          color: 'black',
          padding: 5,
        }}>
        Available: {ModalVisible.MarketItem?.AvailableQuantity}
      </Text>

      <Text
        style={{
          textAlign: 'center',
          color: 'black',
          padding: 5,
        }}>
        Type: {ModalVisible.MarketItem?.Category}
      </Text>
    </View>
  );
});
