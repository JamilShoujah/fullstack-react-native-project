/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-native/no-inline-styles */
import {observer} from 'mobx-react';
import {View, Text} from 'react-native';
import {ModalStore} from '../../Data/Store/ModalStore';

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
        Price: ${ModalStore.getMarketItem.Price}
      </Text>
      <Text
        style={{
          textAlign: 'center',
          color: 'black',
          padding: 5,
        }}>
        Discount %: {ModalStore.getMarketItem.DiscountPercentage}
      </Text>
      <Text
        style={{
          textAlign: 'center',
          color: 'black',
          padding: 5,
        }}>
        Available: {ModalStore.getMarketItem.AvailableQuantity}
      </Text>

      <Text
        style={{
          textAlign: 'center',
          color: 'black',
          padding: 5,
        }}>
        Type: {ModalStore.getMarketItem.Category}
      </Text>
    </View>
  );
});
