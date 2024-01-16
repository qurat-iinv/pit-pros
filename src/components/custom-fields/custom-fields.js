import * as React from 'react';
import {View, Text, TextInput} from 'react-native';

import {COLORS} from '../../globals';
import sizer from '../../helpers/sizer';
import Fonts from '../../helpers/font-family';
import {Typography} from '../../atom-components';

const CustomInput = React.forwardRef(
  (
    {
      containerSt = {},
      inputStyle = {},
      label = '',
      // value = '',
      error = '',
      placeholder = '',
      handleChange = e => {},
      mb = 18,
      mt = 0,
      light = false,
      numPad = false,
      editable = true,
      color = '#000',
      leftIcon = '',
      rightIcon = '',
      labelSet,
      placeholderTextColor = COLORS.greyV3,
      ...props
    },
    ref,
  ) => {
    const [value, setValue] = React.useState();
    const [focusStyle, setFocusStyle] = React.useState(false);
    const errorText = err => (
      <Text
        style={{
          color: COLORS.danger,
          fontSize: sizer.fontScale(12),
          paddingTop: sizer.moderateScale(4),
          alignItems: 'center',
          ...Fonts.medium(),
        }}>
        {err}
      </Text>
    );

    return (
      <View
        style={{
          marginTop: sizer.moderateVerticalScale(mt),
          marginBottom: sizer.moderateVerticalScale(mb),
          ...containerSt,
        }}>
        <View
          style={{
            position: 'absolute',
            zIndex: 1,
            top: -10,
            left: labelSet ? 7 : 15,
            backgroundColor: COLORS.white,
            paddingHorizontal: sizer.moderateScale(5),
          }}>
          <Typography
            size={14}
            color={error ? COLORS.dangerV2 : COLORS.dark}
            mB={12}>
            {label}
          </Typography>
        </View>
        <View>
          {!!leftIcon && (
            <View
              style={{
                position: 'absolute',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 2,
                bottom: 0,
                top: 0,
                left: sizer.moderateScale(12),
              }}>
              {leftIcon}
            </View>
          )}
          {!!rightIcon && (
            <View
              style={{
                position: 'absolute',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 2,
                bottom: 0,
                top: 0,
                right: sizer.moderateScale(12),
              }}>
              {rightIcon}
            </View>
          )}
          <TextInput
            keyboardType={numPad ? 'numeric' : 'default'}
            placeholder={placeholder}
            ref={ref}
            value={value}
            editable={editable}
            onChangeText={e => {
              setValue(e);
              handleChange(e);
            }}
            style={{
              ...Fonts.regular(),
              fontSize: sizer.fontScale(15),
              paddingVertical: sizer.moderateVerticalScale(14),
              paddingHorizontal: sizer.moderateScale(10),
              borderRadius: sizer.fontScale(3),
              backgroundColor: COLORS.white,
              borderWidth: sizer.fontScale(1),
              borderColor: focusStyle
                ? COLORS.dark
                : error
                ? COLORS.danger
                : '#D2D2D2',
              paddingLeft: leftIcon ? sizer.moderateScale(44) : 18,
              color: color,
              ...inputStyle,
            }}
            placeholderTextColor={placeholderTextColor}
            onFocus={() => setFocusStyle(true)}
            onBlur={() => setFocusStyle(false)}
            {...props}
          />
        </View>
        {Boolean(error !== '') ? errorText(error) : null}
      </View>
    );
  },
);

export default CustomInput;
