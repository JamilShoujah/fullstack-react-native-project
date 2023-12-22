import React from 'react';
import {IPageInterface} from '../../data/types/ComponentInterfaces/PagesInterface';
import {ProfileScreen} from './profilePageComponents/ProfileScreen';

export const ProfilePage: React.FC<IPageInterface> = ({navigation}) => {
  return <ProfileScreen navigation={navigation} />;
};
