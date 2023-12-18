/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {observer} from 'mobx-react-lite';
import {View, Text} from 'react-native';
import {getSuperMarketItemsStore} from '../../Store/SuperMarketArrayStore';
import {ITableItemBodyInterface} from '../../Types/interfaces/TableItemBodyInterface';
import {totalPriceCalc} from '../Standard Functions/PriceCalc';

export const TableItemBody: React.FC<ITableItemBodyInterface> = observer(
  ({MItem}) => {
    const marketItemsStore = getSuperMarketItemsStore();
    const inCartItems = marketItemsStore.cartArrayItems.find(
      item => item.id === MItem.id,
    );

    const {
      Name: itemName,
      Price: itemPrice,
      DiscountPercentage: itemDiscountPercentage,
    } = MItem;

    const inCartQuantity = inCartItems?.InCartQuantity;

    const totalCost = totalPriceCalc(
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
          <Text>${totalCost}</Text>
        </View>
      </View>
    );
  },
);
