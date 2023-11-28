/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {View, Text} from 'react-native';
import {TableItemBodyInterface} from '../../Types/interfaces/TableItemBodyInterface';
import {totalPriceCalc} from '../Standard Functions/PriceCalc';

export const TableItemBody: React.FC<TableItemBodyInterface> = ({MItem}) => {
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
        <Text>{MItem.InCartQuantity}</Text>
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
};
