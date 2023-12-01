/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import {observer} from 'mobx-react';
import React, {useEffect} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {TableTopBar} from '../Data/Functions/ComposableFunctions/HomePageTableBar';
import {MyCartItemMapFunctions} from '../Data/Functions/ComposableFunctions/MyCartItemsMapFunction';
import {supermarketItemsStore} from '../Data/Store/SuperMarketArrayStore';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {autorun} from 'mobx';
export const HomePage = observer(() => {
  useEffect(() => {
    const disposer = autorun(() => {
      supermarketItemsStore.setTotalCost();
      console.log('hello');
    });

    return () => {
      disposer(); // Clean up the autorun when the component unmounts
    };
  }, [JSON.stringify(supermarketItemsStore.CartArrayItems)]);
  return (
    <>
      <View style={{flexDirection: 'row-reverse'}}>
        <Text
          style={{
            color: 'green',
            fontWeight: '900',
            fontSize: 20,
            padding: 10,
          }}>
          $ {supermarketItemsStore.Money.toFixed(2)}
        </Text>
      </View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: 10,
        }}>
        <TableTopBar />
        <MyCartItemMapFunctions
          ItemsArray={supermarketItemsStore.CartArrayItems}
        />
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
            Total: ${supermarketItemsStore.total.toFixed(2)}
            {/* Cannot update a component (`_c`) while rendering a different component (`_c`). To locate the bad setState() call inside `_c`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render */}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            supermarketItemsStore.ConfirmPurchase(
              supermarketItemsStore.TotalCost,
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
    </>
  );
});
