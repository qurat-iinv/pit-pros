import * as React from 'react';
import {View} from 'react-native';

// Import Components and Utils
import {Typography} from '../atom-components';
import sizer from '../helpers/sizer';
import {COLORS} from '../globals';
import {tabData} from './data';

// Import Libraries
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarActiveTintColor: COLORS.white,
        tabBarInactiveTintColor: COLORS.primary,
        tabBarLabelPosition: 'below-icon',
        tabBarStyle: {
          height: sizer.moderateVerticalScale(60),
          paddingTop: sizer.moderateVerticalScale(5),
          paddingBottom: 0,
          backgroundColor: COLORS.white,
          borderTopColor: COLORS.white,
          shadowOpacity: 0.2,
          shadowRadius: 14,
          elevation: 24,
          shadowColor: COLORS.dark,
          shadowOffset: {
            width: 0,
            height: 20,
          },
          shadowOpacity: 0.55,
          shadowRadius: 14.78,
        },
      })}>
      {tabData.map((data, index) => (
        <Tab.Screen
          key={index}
          name={data?.screenName}
          component={data?.stack}
          options={{
            tabBarLabel: ({focused}) => {
              return (
                <View
                  style={{
                    paddingBottom: sizer.moderateVerticalScale(5),
                    width: sizer.moderateScale(55),
                  }}>
                  <Typography
                    size={12}
                    color={focused ? COLORS.primary : COLORS.grey}
                    textAlign="center"
                    // bold={focused ? true : false}
                  >
                    {data?.label}
                  </Typography>
                </View>
              );
            },
            tabBarIcon: ({size, color, focused}) => {
              return (
                <data.TabIcon
                  stroke={focused ? COLORS.primary : COLORS.grey}
                  width={sizer.moderateScale(25)}
                  height={sizer.moderateVerticalScale(20)}
                />
              );
            },
          }}
          listeners={({navigation, route}) => ({
            tabPress: e => {
              // e.preventDefault();
              navigation.navigate(data?.screenName);
            },
          })}
        />
      ))}
    </Tab.Navigator>
  );
}
