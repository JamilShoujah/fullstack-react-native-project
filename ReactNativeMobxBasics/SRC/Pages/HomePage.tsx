/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-native/no-inline-styles */
import {observer} from 'mobx-react';
import {Text, TouchableOpacity, View} from 'react-native';
import {TableTopBar} from '../Data/Functions/ComposableFunctions/HomePageTableBar';
import {MyCartItemMapFunctions} from '../Data/Functions/ComposableFunctions/MyCartItemsMapFunction';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {MARKET_ITEMS_STORE} from '../Data/Constants/VariableConstants';
import {useEffect} from 'react';

export const HomePage = observer(() => {
  useEffect(() => {
    MARKET_ITEMS_STORE.totalCost;
  }, [JSON.stringify(MARKET_ITEMS_STORE.cartArrayItems)]);
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
          $ {MARKET_ITEMS_STORE.money.get().toFixed(2)}
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
        {MyCartItemMapFunctions(MARKET_ITEMS_STORE.cartArrayItems)}
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
            Total: ${MARKET_ITEMS_STORE.total.get().toFixed(2)}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            MARKET_ITEMS_STORE.confirmPurchase(MARKET_ITEMS_STORE.total.get());
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
