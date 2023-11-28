/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {observer} from 'mobx-react-lite';
import {View, Text} from 'react-native';
import {supermarketItemsStore} from '../../Store/SuperMarketArrayStore';
import {TableItemBodyInterface} from '../../Types/interfaces/TableItemBodyInterface';
import {totalPriceCalc} from '../Standard Functions/PriceCalc';

export const TableItemBody: React.FC<TableItemBodyInterface> = observer(
  ({MItem}) => {
    const InCartItem = supermarketItemsStore.CartArrayItems.find(
      item => item.id === MItem.id,
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
          <Text>{MItem.Name}</Text>
        </View>
        <View style={{width: '20%', alignItems: 'flex-end'}}>
          <Text style={{fontWeight: '900'}}>{InCartItem?.InCartQuantity}</Text>
        </View>
        <View
          style={{
            width: '20%',
            alignItems: 'flex-end',
          }}>
          <Text>{MItem.Price}</Text>
        </View>
        <View style={{width: '20%', alignItems: 'flex-end'}}>
          <Text>{MItem.DiscountPercentage}</Text>
        </View>
        <View style={{width: '20%', alignItems: 'flex-end'}}>
          <Text>
            {totalPriceCalc(
              MItem.Price,
              MItem.InCartQuantity,
              MItem.DiscountPercentage,
            )}
          </Text>
        </View>
      </View>
    );
  },
);
