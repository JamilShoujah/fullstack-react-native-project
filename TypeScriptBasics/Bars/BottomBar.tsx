import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomePage} from '../pages/AvailableTasks';
import {LandingPage} from '../pages/landingPage';

const Tab = createBottomTabNavigator();
export const BottomAppBar = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomePage} />
      <Tab.Screen name="Settings" component={LandingPage} />
    </Tab.Navigator>
  );
};
