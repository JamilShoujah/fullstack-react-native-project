/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-native/no-inline-styles */
import {observer} from 'mobx-react';
import {View, Text} from 'react-native';
import {MODAL_STORE} from '../../Data/Constants/VariableConstants';

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
        Price: ${MODAL_STORE.getMarketItem.Price}
      </Text>
      <Text
        style={{
          textAlign: 'center',
          color: 'black',
          padding: 5,
        }}>
        Discount %: {MODAL_STORE.getMarketItem.DiscountPercentage}
      </Text>
      <Text
        style={{
          textAlign: 'center',
          color: 'black',
          padding: 5,
        }}>
        Available: {MODAL_STORE.getMarketItem.AvailableQuantity}
      </Text>

      <Text
        style={{
          textAlign: 'center',
          color: 'black',
          padding: 5,
        }}>
        Type: {MODAL_STORE.getMarketItem.Category}
      </Text>
    </View>
  );
});
