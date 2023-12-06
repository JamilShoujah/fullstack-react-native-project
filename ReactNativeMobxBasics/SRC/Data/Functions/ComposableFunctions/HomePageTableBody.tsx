/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {observer} from 'mobx-react-lite';
import {View, Text} from 'react-native';
import {MARKET_ITEMS_STORE} from '../../Constants/VariableConstants';
import {ITableItemBodyInterface} from '../../Types/interfaces/TableItemBodyInterface';
import {totalPriceCalc} from '../Standard Functions/PriceCalc';

export const TableItemBody: React.FC<ITableItemBodyInterface> = observer(
  ({MItem}) => {
    const InCartItem = MARKET_ITEMS_STORE.cartArrayItems.find(
      item => item.id === MItem.id,
    );

    const {
      Name: itemName,
      Price: itemPrice,
      DiscountPercentage: itemDiscountPercentage,
    } = MItem;

    const inCartQuantity = InCartItem?.InCartQuantity;

    const totalPrice = totalPriceCalc(
      MItem.Price,
      MItem.InCartQuantity,
      MItem.DiscountPercentage,
      MItem.id,
    );

    return (
      <View
        style={{
          width: '100%',
          backgroundColor: 'gainsboro',
          paddingVertical: 10,
          paddingHorizontal: 10,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View style={{width: '20%'}}>
          <Text>{itemName}</Text>
        </View>
        <View style={{width: '20%', alignItems: 'flex-end'}}>
          <Text>{inCartQuantity} itm</Text>
        </View>
        <View
          style={{
            width: '20%',
            alignItems: 'flex-end',
          }}>
          <Text>${itemPrice}</Text>
        </View>
        <View style={{width: '20%', alignItems: 'flex-end'}}>
          <Text>{itemDiscountPercentage}%</Text>
        </View>
        <View style={{width: '20%', alignItems: 'flex-end'}}>
          <Text>${totalPrice}</Text>
        </View>
      </View>
    );
  },
);
