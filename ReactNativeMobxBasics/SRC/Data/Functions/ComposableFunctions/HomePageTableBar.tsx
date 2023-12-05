/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-native/no-inline-styles */
import {HOME_PAGE_TABLE_ENTRIES} from '../../Constants/HomePageTableBarEntries';
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
      {HOME_PAGE_TABLE_ENTRIES.map(item => (
        <Text key={item} style={{color: 'white', fontWeight: '900'}}>
          {item}
        </Text>
      ))}
    </View>
  );
};
