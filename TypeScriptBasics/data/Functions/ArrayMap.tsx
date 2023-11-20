/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-native/no-inline-styles */
import {Text, TouchableOpacity, View} from 'react-native';

import {ArrayMapParam} from '../types/DataArrayMap';
export const DataArrayMap: React.FC<ArrayMapParam> = ({
  statusType,
  array,
  setTaskModalVisible,
  handleData,
}) => {
  const myarray = array.filter(item => item.status === statusType);

  return (
    <View>
      {myarray.map(item => (
        <TouchableOpacity
          onPress={() => {
            setTaskModalVisible(true);
            handleData(item);
          }}
          key={item.id}
          style={{
            backgroundColor: 'gainsboro',
            marginTop: 10,
            marginHorizontal: 10,
            padding: 10,
            borderRadius: 10,
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: 20,
              fontWeight: '900',
            }}>
            {item.title}
          </Text>
          <Text>{item.description}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};
