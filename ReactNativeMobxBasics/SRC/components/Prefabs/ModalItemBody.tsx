/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-native/no-inline-styles */
import {observer} from 'mobx-react';
import {View, Text} from 'react-native';
import {getModalStore} from '../../Data/Store/ModalStore';

export const ModalBody = observer(() => {
  const modalStore = getModalStore();
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
        Price: ${modalStore.marketItem.get().Price}
      </Text>
      <Text
        style={{
          textAlign: 'center',
          color: 'black',
          padding: 5,
        }}>
        Discount %: {modalStore.marketItem.get().DiscountPercentage}
      </Text>
      <Text
        style={{
          textAlign: 'center',
          color: 'black',
          padding: 5,
        }}>
        Available: {modalStore.marketItem.get().AvailableQuantity}
      </Text>

      <Text
        style={{
          textAlign: 'center',
          color: 'black',
          padding: 5,
        }}>
        Type: {modalStore.marketItem.get().Category}
      </Text>
    </View>
  );
});
