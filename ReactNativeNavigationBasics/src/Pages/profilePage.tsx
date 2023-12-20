import React from 'react';
import {IPageInterface} from '../ComponentInterfaces/PagesInterface';
import {ProfileScreen} from '../screens/ProfileScreen';

export const ProfilePage: React.FC<IPageInterface> = ({navigation}) => {
  return <ProfileScreen navigation={navigation} />;
};
