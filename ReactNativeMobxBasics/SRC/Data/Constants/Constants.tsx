import {getModalStore} from '../Store/ModalStore';
import {getSuperMarketItemsStore} from '../Store/SuperMarketArrayStore';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

export const MODAL_STORE = getModalStore();
export const MARKET_ITEMS_STORE = getSuperMarketItemsStore();
export const TAB = createBottomTabNavigator();

export const HOME: string = 'Home';
export const DAIRY: string = 'Dairy';
export const FRUITS: string = 'Fruits';
export const VEGETABLES: string = 'Vegetables';
export const PROTEINS: string = 'Proteins';
