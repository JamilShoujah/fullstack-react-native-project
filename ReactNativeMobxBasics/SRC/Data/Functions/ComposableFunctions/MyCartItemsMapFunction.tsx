/* eslint-disable react-native/no-inline-styles */
import {ScrollView} from 'react-native';
import React from 'react';
import {IMyCartArrayItemMaInterface} from '../../Types/interfaces/MyCartArrayMapInterface';
import {observer} from 'mobx-react';
import {TableItemBody} from './HomePageTableBody';

export const MyCartItemMapFunctions: React.FC<IMyCartArrayItemMaInterface> =
  observer(({ItemsArray}) => {
    return (
      <ScrollView
        contentContainerStyle={{
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        {ItemsArray.map(MItem => (
          <TableItemBody key={MItem.id} MItem={MItem} />
        ))}
      </ScrollView>
    );
  });
