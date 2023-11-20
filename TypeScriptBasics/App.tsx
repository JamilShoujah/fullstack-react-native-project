/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import {InProgressTasksPage} from './pages/InProgressTasks';
import {AvailableTasksPage} from './pages/AvailableTasks';
import {PendingApprovalTasksPage} from './pages/PendingApprovalTasks';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {CompleteTasksPage} from './pages/CompleteTask';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarLabelStyle: {fontSize: 12},
        tabBarStyle: {backgroundColor: 'white'},
        tabBarIcon: ({focused, color, size}) => {
          let iconName: string;
          switch (route.name) {
            case 'Available':
              iconName = focused ? 'list' : 'list-outline';
              break;
            case 'In Progress':
              iconName = focused ? 'list' : 'list-outline';
              break;
            case 'Pending':
              iconName = focused ? 'list' : 'list-outline';
              break;
            default:
              iconName = 'default-icon';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}>
      <Tab.Screen name="Available" component={AvailableTasksPage} />
      <Tab.Screen name="In Progress" component={InProgressTasksPage} />
      <Tab.Screen name="Pending" component={PendingApprovalTasksPage} />
      <Tab.Screen name="Complete" component={CompleteTasksPage} />
    </Tab.Navigator>
  );
}
function App(): JSX.Element {
  return (
    <NavigationContainer>
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View style={{flex: 1}} />
        </ScrollView>
      </SafeAreaView>
      <MyTabs />
    </NavigationContainer>
  );
}

export default App;
