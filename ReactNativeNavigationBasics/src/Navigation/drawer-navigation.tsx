/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import {TabNavigation} from '../Navigation/tabNavigation';
import i18next from '../services/i18next';

export const DrawerNavigation = () => {
  const Drawer = createDrawerNavigator();

  function CustomDrawerContent(props: any) {
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItem
          label="English"
          onPress={() => {
            i18next.changeLanguage('en');
            props.navigation.closeDrawer();
          }}
        />
        <DrawerItem
          label="Arabic"
          onPress={() => {
            i18next.changeLanguage('ar');
            props.navigation.closeDrawer();
          }}
        />
        <DrawerItem
          label="Japanese"
          onPress={() => {
            i18next.changeLanguage('jp');
            props.navigation.closeDrawer();
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
