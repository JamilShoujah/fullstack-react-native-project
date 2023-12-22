/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import {TabNavigation} from './tabNavigation';
import i18next from '../shared/i18n/i18next';
import {getLanguageStore} from '../data/stores/right-to-left-language-store';

export const DrawerNavigation = () => {
  const Drawer = createDrawerNavigator();
  const lang = getLanguageStore();

  function CustomDrawerContent(props: any) {
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItem
          label="English"
          onPress={() => {
            i18next.changeLanguage('en');
            lang.setIsRighttoLeft(false);
            props.navigation.closeDrawer();
          }}
        />
        <DrawerItem
          label="Arabic"
          onPress={() => {
            lang.setIsRighttoLeft(true);
            i18next.changeLanguage('ar');
            props.navigation.closeDrawer();
          }}
        />
        <DrawerItem
          label="Japanese"
          onPress={() => {
            lang.setIsRighttoLeft(false);
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
