/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-native/no-inline-styles */
import {View, Text} from 'react-native';
export const TableTopBar = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'orangered',
        width: '100%',
        padding: 10,
      }}>
      <Text style={{color: 'white', fontWeight: '900'}}>Product</Text>
      <Text style={{color: 'white', fontWeight: '900'}}>Quantity</Text>
      <Text style={{color: 'white', fontWeight: '900'}}>Price</Text>
      <Text style={{color: 'white', fontWeight: '900'}}>Discount</Text>
      <Text style={{color: 'white', fontWeight: '900'}}>Total</Text>
    </View>
  );
};
