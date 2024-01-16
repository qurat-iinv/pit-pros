import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import sizer from '../helpers/sizer';
import {Typography} from '../atom-components';
import {COLORS} from '../globals';

const Divider = ({
  text = '',
  color = '#C7C7C7',
  weight = 1,
  mT = 0,
  mB = 0,
}) => {
  const dividerStyle = {
    backgroundColor: color,
    height: sizer.moderateVerticalScale(weight),
    marginTop: sizer.moderateVerticalScale(mT),
    marginBottom: sizer.moderateVerticalScale(mB),
  };

  const textStyle = {
    position: 'absolute',
    alignSelf: 'center',
    backgroundColor: COLORS.white,
    zIndex: 100,
    paddingHorizontal: sizer.moderateScale(10),
  };

  return (
    <View style={{justifyContent: 'center'}}>
      {text && (
        <View style={textStyle}>
          <Typography size={14} color={color}>
            {text}
          </Typography>
        </View>
      )}
      <View style={dividerStyle} />
    </View>
  );
};

export default Divider;
