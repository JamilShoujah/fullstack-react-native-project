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
import {useArrayStates} from './data/UseStates/ArrayUseState';

const Tab = createBottomTabNavigator();

function MyTabs() {
  const {arrayItems, setArrayItems} = useArrayStates();
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerStyle: {
          backgroundColor: 'blue',
          height: 70,
        },
        headerTitleStyle: {
          color: 'white',
          fontWeight: '900',
          fontSize: 40,
        },
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
            case 'Complete':
              iconName = focused ? 'list' : 'list-outline';
              break;
            default:
              iconName = '';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}>
      <Tab.Screen
        name="Available"
        children={() => (
          <AvailableTasksPage
            ArrayItems={arrayItems}
            SetArrayItems={setArrayItems}
          />
        )}
      />
      <Tab.Screen
        name="In Progress"
        children={() => (
          <InProgressTasksPage
            ArrayItems={arrayItems}
            SetArrayItems={setArrayItems}
          />
        )}
      />
      <Tab.Screen
        name="Pending"
        children={() => (
          <PendingApprovalTasksPage
            ArrayItems={arrayItems}
            SetArrayItems={setArrayItems}
          />
        )}
      />
      <Tab.Screen
        name="Complete"
        children={() => (
          <CompleteTasksPage
            ArrayItems={arrayItems}
            SetArrayItems={setArrayItems}
          />
        )}
      />
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
