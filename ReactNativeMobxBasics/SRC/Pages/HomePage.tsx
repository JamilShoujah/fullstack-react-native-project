/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-native/no-inline-styles */
import {observer} from 'mobx-react';
import {Text, TouchableOpacity, View} from 'react-native';
import {TableTopBar} from '../Data/Functions/ComposableFunctions/HomePageTableBar';
import {MyCartItemMapFunctions} from '../Data/Functions/ComposableFunctions/MyCartItemsMapFunction';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {getSuperMarketItemsStore} from '../Data/Store/SuperMarketArrayStore';
import {CheckoutModal} from '../components/Modals/CheckoutModal';
import {getModalStore} from '../Data/Store/ModalStore';

export const HomePage = observer(() => {
  const marketItemsStore = getSuperMarketItemsStore();
  const checkoStore = getModalStore();

  return (
    <View style={{flex: 1}}>
      <View style={{flexDirection: 'row-reverse'}}>
        <Text
          style={{
            color: 'green',
            fontWeight: '900',
            fontSize: 20,
            padding: 10,
          }}>
          $ {marketItemsStore.money.get().toFixed(2)}
        </Text>
      </View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: 10,
        }}>
        <TableTopBar />
        {MyCartItemMapFunctions(marketItemsStore.cartArrayItems)}
        <View
          style={{
            right: 0,
            backgroundColor: 'orangered',
            width: '100%',
            paddingHorizontal: 10,
            margin: 10,
            flexDirection: 'row-reverse',
          }}
        />
        <TouchableOpacity
          onPress={() => {
            // marketItemsStore.confirmPurchase(marketItemsStore.total.get());
            checkoStore.openCheckoutModal();
          }}
          style={{
            borderStyle: 'solid',
            borderWidth: 2,
            padding: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
          }}>
          <Text style={{color: 'black', fontSize: 20}}>Checkout</Text>
          <Icon
            name="shopping-cart"
            size={20}
            color="black"
            style={{marginHorizontal: 5}}
          />
        </TouchableOpacity>
      </View>
      <CheckoutModal />
    </View>
  );
});
