import React from 'react';

import TabNavigator from './tab-navigator';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function AppStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        initialRouteName: 'Home',
      }}>
      <Stack.Screen name="Home" component={TabNavigator} />
    </Stack.Navigator>
  );
}
