/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-native/no-inline-styles */

import {View} from 'react-native';
import {ItemModal} from '../../../components/Modals/ItemModal';
import {MarketItemDisplay} from '../../../components/Prefabs/MarketItemDisplay';
import {ISuperMarketItem} from '../../Types/interfaces/SuperMarketItem';

export function marketArrayMap(myarray: ISuperMarketItem[]) {
  return myarray.map(MItem => (
    <View key={MItem.id} style={{width: '50%'}}>
      <MarketItemDisplay MarketItem={MItem} />
      <ItemModal />
    </View>
  ));
}
