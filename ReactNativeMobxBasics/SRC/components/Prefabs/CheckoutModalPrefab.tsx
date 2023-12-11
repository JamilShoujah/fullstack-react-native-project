/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {View, Text, TouchableOpacity} from 'react-native';
import {getModalStore} from '../../Data/Store/ModalStore';
import {getSuperMarketItemsStore} from '../../Data/Store/SuperMarketArrayStore';

export const CheckoutModalBody = () => {
  const marketItemsStore = getSuperMarketItemsStore();
  const modalStore = getModalStore();
  return (
    <View style={{width: '100%', alignItems: 'center'}}>
      <View
        style={{
          width: '100%',
          borderBottomColor: 'black',
          borderBottomWidth: 1,
        }}
      />
      <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
        <View style={{width: '100%'}}>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontSize: 18}}>Wallet:</Text>
            <Text style={{fontSize: 18}}>
              ${marketItemsStore.money.get().toFixed(2)}
            </Text>
          </View>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontSize: 18}}>Cost:</Text>
            <Text style={{fontSize: 18}}>
              ${marketItemsStore.total.get().toFixed(2)}
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          width: '100%',
          borderBottomColor: 'black',
          borderBottomWidth: 1,
        }}
      />
      <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
        <View style={{width: '100%'}}>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontSize: 18}}>Wallet:</Text>
            <Text style={{fontSize: 18}}>
              $
              {(
                marketItemsStore.money.get() - marketItemsStore.total.get()
              ).toFixed(2)}
            </Text>
          </View>
        </View>
      </View>

      <TouchableOpacity
        onPress={() => {
          marketItemsStore.confirmPurchase(marketItemsStore.total.get());
          marketItemsStore.totalCost();
          modalStore.closeModal();
        }}
        style={{
          margin: 10,
          borderStyle: 'solid',
          borderWidth: 2,
          padding: 5,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 10,
          width: '40%',
        }}>
        <Text style={{color: 'black'}}>Confirm</Text>
      </TouchableOpacity>
    </View>
  );
};
