/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-native/no-inline-styles */
import {Text, TouchableOpacity, View} from 'react-native';

import {ArrayMapParam} from '../types/DataArrayMap';
export const DataArrayMap: React.FC<ArrayMapParam> = ({statusType, array}) => {
  const myarray = array.filter(item => item.status === statusType);

  return (
    <View>
      {myarray.map(item => (
        <TouchableOpacity
          onPress={() => {
            // add function here
            //new use state la new Modal yalli hiyyi l task modal
            // calls on it to be open
            // contains the delete/inprogress Button
          }}
          key={item.id}
          style={{
            backgroundColor: 'green',
            margin: 5,
            padding: 10,
            borderRadius: 10,
          }}>
          <Text
            style={{
              color: 'white',
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
