import React from 'react';
import {View} from 'react-native';
import {COLORS} from '../globals';
import sizer from '../helpers/sizer';

export default function Container({children, styles = {}, pT = 0, pH = 16}) {
  return (
    <View
      style={[
        {
          flex: 1,
          backgroundColor: COLORS.white,
          paddingHorizontal: sizer.moderateScale(pH),
          paddingTop: sizer.moderateScale(pT),
        },
        styles,
      ]}>
      {children}
    </View>
  );
}
