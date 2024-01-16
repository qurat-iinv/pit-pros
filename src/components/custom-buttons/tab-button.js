import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';

import sizer from '../../helpers/sizer';
import {Typography} from '../../atom-components';
import {COLORS, baseOpacity} from '../../globals';

const TabButton = ({text, marginRight = 0, onClick = () => {}}) => {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: COLORS.white,
          marginRight: sizer.moderateScale(marginRight),
        },
      ]}>
      <TouchableOpacity onPress={onClick} activeOpacity={baseOpacity}>
        <Typography size={12} color={COLORS.grey}>
          {text}
        </Typography>
      </TouchableOpacity>
    </View>
  );
};

export default TabButton;

const styles = StyleSheet.create({
  container: {
    paddingVertical: sizer.moderateVerticalScale(15),
    paddingHorizontal: sizer.moderateScale(12),
    borderRadius: 20,
  },
});
