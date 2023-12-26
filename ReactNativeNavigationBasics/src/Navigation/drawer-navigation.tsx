/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import {TabNavigation} from './tabNavigation';
// import i18next from '../shared/i18n/i18next';
import {getLanguageStore} from '../data/stores/right-to-left-language-store';
import i18n from '../shared/i18n/i18n';
import {TLanguageEnum} from '../data/types/enums/languageEnum';

export const DrawerNavigation = () => {
  const Drawer = createDrawerNavigator();
  const lang = getLanguageStore();
  const isR2L = lang.isRighttoLeft.get();

  function CustomDrawerContent(props: any) {
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItem
          label="English"
          onPress={() => {
            i18n.setLanguage(TLanguageEnum.ENGLISH);
            lang.setIsRighttoLeft(false);
            props.navigation.closeDrawer();
          }}
        />
        <DrawerItem
          label="Arabic"
          onPress={() => {
            lang.setIsRighttoLeft(true);
            i18n.setLanguage(TLanguageEnum.ARABIC);
            props.navigation.closeDrawer();
          }}
        />
        <DrawerItem
          label="Japanese"
          onPress={() => {
            lang.setIsRighttoLeft(false);
            i18n.setLanguage(TLanguageEnum.JAPANESE);
            props.navigation.closeDrawer();
          }}
        />
      </DrawerContentScrollView>
    );
  }

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerPosition: isR2L ? 'right' : 'left',
        drawerType: 'front',
      }}
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
