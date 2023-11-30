/* eslint-disable react-native/no-inline-styles */
import {observer} from 'mobx-react';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {TableTopBar} from '../Data/Functions/ComposableFunctions/HomePageTableBar';
import {MyCartItemMapFunctions} from '../Data/Functions/ComposableFunctions/MyCartItemsMapFunction';
import {supermarketItemsStore} from '../Data/Store/SuperMarketArrayStore';
export const HomePage = observer(() => {
  return (
    <View style={{alignItems: 'center', justifyContent: 'center', padding: 10}}>
      <TableTopBar />
      <MyCartItemMapFunctions
        ItemsArray={supermarketItemsStore.CartArrayItems}
      />
      <View
        style={{
          right: 0,
          backgroundColor: 'orangered',
          width: '100%',
          padding: 10,
          margin: 10,
        }}>
        <Text style={{color: 'white', fontWeight: '900', fontSize: 30}}>
          Total: ${supermarketItemsStore.TotalCost.toFixed(2)}
          {/* Cannot update a component (`_c`) while rendering a different component (`_c`). To locate the bad setState() call inside `_c`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render */}
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          console.log(supermarketItemsStore.CartArrayItems);
        }}>
        <Text>Press me</Text>
      </TouchableOpacity>
    </View>
  );
});
