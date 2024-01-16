import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';

import sizer from '../../helpers/sizer';
import Fonts from '../../helpers/font-family';
import {COLORS, baseOpacity} from '../../globals';
import {Flex} from '../../atom-components';

function PrimaryButton({
  label = 'Custom Button',
  flag = false,
  btnStyle = '',
  textStyle = '',
  loader = false,
  upperCase = false,
  onClick = () => {},
  icon = false,
  type = 'primary',
  mb = 0,
  mt = 0,
  iconGap = 8,
  fontSize = 16,
  ...props
}) {
  let bgColor;
  let textColor = COLORS.white;
  let loaderColor = COLORS.white;
  let shadow = 0;

  if (type === 'primary') {
    bgColor = COLORS.primary;
    shadow = 2;
  } else if (type === 'secondary') {
    bgColor = COLORS.dark;
  } else if (type === 'danger') {
    bgColor = COLORS.danger;
  } else {
    bgColor = COLORS.white;
    textColor = COLORS.dark;
    loaderColor = COLORS.white;
  }

  const styles = {
    btn: {
      borderRadius: sizer.fontScale(8),
      height: sizer.moderateVerticalScale(50),
      alignItems: 'center',
      justifyContent: 'center',
      elevation: shadow,
    },
    btnTextStyle: {
      ...Fonts.medium(),
      fontSize: sizer.fontScale(fontSize),
      textAlign: 'center',
      textTransform: upperCase ? 'uppercase' : 'capitalize',
    },
  };

  return (
    <TouchableOpacity
      disabled={loader}
      activeOpacity={baseOpacity}
      style={[
        styles.btn,
        {
          backgroundColor: bgColor,
          marginBottom: sizer.moderateVerticalScale(mb),
          marginTop: sizer.moderateVerticalScale(mt),
        },
        btnStyle,
      ]}
      onPress={onClick}
      {...props}>
      {loader ? (
        <ActivityIndicator size={sizer.fontScale(19)} color={loaderColor} />
      ) : (
        <Flex gap={iconGap} algItems="center">
          {!!icon && icon}
          <Text style={[styles.btnTextStyle, {color: textColor}, textStyle]}>
            {label}
          </Text>
        </Flex>
      )}
    </TouchableOpacity>
  );
}

export default PrimaryButton;
