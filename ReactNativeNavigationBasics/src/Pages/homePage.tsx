import React from 'react';
import {View, Text} from 'react-native';
import { IPageInterface } from '../ComponentInterfaces/PagesInterface';
import { TabNavigation } from '../Navigation/tabNavigation';
import { LogInScreen } from '../prefabs/logInScreen';

export const HomePage = () => {
    return (
        <TabNavigation />
    );
}