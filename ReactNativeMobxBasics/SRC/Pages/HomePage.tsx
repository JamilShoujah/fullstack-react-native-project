/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-native/no-inline-styles */
import {observer} from 'mobx-react';
import {Text, TouchableOpacity, View} from 'react-native';
import {TableTopBar} from '../Data/Functions/ComposableFunctions/HomePageTableBar';
import {MyCartItemMapFunctions} from '../Data/Functions/ComposableFunctions/MyCartItemsMapFunction';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useEffect} from 'react';
import {getSuperMarketItemsStore} from '../Data/Store/SuperMarketArrayStore';

export const HomePage = observer(() => {
  const marketItemsStore = getSuperMarketItemsStore();

  useEffect(() => {
    marketItemsStore.totalCost;
  }, [JSON.stringify(marketItemsStore.cartArrayItems)]);
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
        {/* {MyCartItemMapFunctions(MARKET_ITEMS_STORE.cartArrayItems)} */}
        {MyCartItemMapFunctions(marketItemsStore.cartArrayItems)}
        <View
          style={{
            right: 0,
            backgroundColor: 'orangered',
            width: '100%',
            paddingHorizontal: 10,
            margin: 10,
            flexDirection: 'row-reverse',
          }}>
          <Text
            style={{
              color: 'white',
              fontWeight: '900',
              fontSize: 30,
            }}>
            {/* DeezNuts */}
            Total: ${marketItemsStore.total.get().toFixed(2)}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            marketItemsStore.confirmPurchase(marketItemsStore.total.get());
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
    </View>
  );
});
