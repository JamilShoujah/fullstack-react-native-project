/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {observer} from 'mobx-react-lite';
import {View, Text} from 'react-native';
import {MARKET_ITEMS_STORE} from '../../Constants/VariableConstants';
import {ITableItemBodyInterface} from '../../Types/interfaces/TableItemBodyInterface';
import {totalPriceCalc} from '../Standard Functions/PriceCalc';

export const TableItemBody: React.FC<ITableItemBodyInterface> = observer(
  ({MItem}) => {
    const IN_CART_ITEMS = MARKET_ITEMS_STORE.cartArrayItems.find(
      item => item.id === MItem.id,
    );

    const {
      Name: ITEM_NAME,
      Price: ITEM_PRICE,
      DiscountPercentage: ITEM_DISCOUNT_PERCENTAGE,
    } = MItem;

    const IN_CART_QUANTITY = IN_CART_ITEMS?.InCartQuantity;

    const TOTAL_COST = totalPriceCalc(
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
          <Text>{ITEM_NAME}</Text>
        </View>
        <View style={{width: '20%', alignItems: 'flex-end'}}>
          <Text>{IN_CART_QUANTITY} itm</Text>
        </View>
        <View
          style={{
            width: '20%',
            alignItems: 'flex-end',
          }}>
          <Text>${ITEM_PRICE}</Text>
        </View>
        <View style={{width: '20%', alignItems: 'flex-end'}}>
          <Text>{ITEM_DISCOUNT_PERCENTAGE}%</Text>
        </View>
        <View style={{width: '20%', alignItems: 'flex-end'}}>
          <Text>${TOTAL_COST}</Text>
        </View>
      </View>
    );
  },
);
