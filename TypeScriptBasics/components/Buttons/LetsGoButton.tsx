/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {LetsGoProps} from '../../data/types/letsGoProps';
export const LetsGo: React.FC<LetsGoProps> = ({navFunction}) => {
  return (
    <View>
      <TouchableOpacity
        onPress={navFunction}
        style={{
          backgroundColor: 'green',
          padding: 10,
          borderRadius: 10,
          margin: 10,
        }}>
        <Text style={{color: 'white', fontSize: 20, textAlign: 'center'}}>
          Let's Go
        </Text>
      </TouchableOpacity>
    </View>
  );
};
