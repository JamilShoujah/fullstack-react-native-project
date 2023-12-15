import React from 'react';
import {View, Text} from 'react-native';

export const ProfileScreen = () => {
  return (
    <View>
      <View style={{backgroundColor: 'blue'}}>
        <Text style={{color: 'white', fontWeight: '900', padding: 20}}>
          My Profile
        </Text>
      </View>

      <View>
        <Text style={{fontSize: 18, marginBottom: 15}}>Name</Text>
      </View>
    </View>
  );
};
