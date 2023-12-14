import React from 'react';
import {View, Text} from 'react-native';
import { IPageInterface } from '../ComponentInterfaces/PagesInterface';
import { TabNavigation } from '../Navigation/tabNavigation';
import { LogInScreen } from '../prefabs/logInScreen';

export const HomePage = () => {
    return (
        // <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', top: 'auto'}}>
        //     {/* <Text style={{fontWeight: 'bold', fontSize: 50}}>HOME</Text> */}
            
        // </View>
        <TabNavigation />
    );
}