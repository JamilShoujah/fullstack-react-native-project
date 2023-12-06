/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import {observer} from 'mobx-react';
import React, {useEffect} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {TableTopBar} from '../Data/Functions/ComposableFunctions/HomePageTableBar';
import {MyCartItemMapFunctions} from '../Data/Functions/ComposableFunctions/MyCartItemsMapFunction';
import {SuperMarketItemsStore} from '../Data/Store/SuperMarketArrayStore';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {autorun} from 'mobx';
export const HomePage = observer(() => {
  useEffect(() => {
    const disposer = autorun(() => {
      SuperMarketItemsStore.setTotalCost();
    });

    return () => {
      disposer();
    };
  }, [JSON.stringify(SuperMarketItemsStore.cartArrayItems)]);
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
          $ {SuperMarketItemsStore.getMoney.toFixed(2)}
        </Text>
      </View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: 10,
        }}>
        <TableTopBar />
        {MyCartItemMapFunctions(SuperMarketItemsStore.cartArrayItems)}
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
            Total: ${SuperMarketItemsStore.getTotal.toFixed(2)}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            SuperMarketItemsStore.confirmPurchase(
              SuperMarketItemsStore.totalCost,
            );
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
