/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable no-lone-blocks */
import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import {TabNavigation} from '../Navigation/tabNavigation';

export const DrawerNavigation = () => {
  const Drawer = createDrawerNavigator();

  function CustomDrawerContent(props: any) {
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label="English"
          onPress={() => {
            console.log('English');
          }}
        />
        <DrawerItem
          label="Arabic"
          onPress={() => {
            console.log('Arabic');
          }}
        />
        <DrawerItem
          label="Japanese"
          onPress={() => {
            console.log('Yamate Kudasai');
          }}
        />
      </DrawerContentScrollView>
    );
  }

  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen
        name="Language"
        component={TabNavigation}
        options={{
          header: () => null,
          drawerLabel: () => null,
        }}
      />
    </Drawer.Navigator>
  );
};
