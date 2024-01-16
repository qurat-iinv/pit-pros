import React from 'react';

import {
  SignIn,
  ForgotPassword,
  OTPVerification,
  ChangePassword,
} from '../screens';

import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

function LogStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        initialRouteName: 'SignIn',
      }}>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="OTPVerification" component={OTPVerification} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
    </Stack.Navigator>
  );
}

export default LogStack;
