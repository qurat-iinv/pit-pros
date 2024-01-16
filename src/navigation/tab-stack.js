import * as React from 'react';

import {ChatInbox, Home, Services, TimeLog} from '../screens';

import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

export function ServicesStack() {
  return (
    <Stack.Navigator
      initialRouteName="Services"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Services" component={Services} />
    </Stack.Navigator>
  );
}

export function TimelogStack() {
  return (
    <Stack.Navigator
      initialRouteName="TimeLog"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="TimeLog" component={TimeLog} />
    </Stack.Navigator>
  );
}

export function ChatStack() {
  return (
    <Stack.Navigator
      initialRouteName="ChatInbox"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="ChatInbox" component={ChatInbox} />
    </Stack.Navigator>
  );
}
