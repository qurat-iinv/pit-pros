import React from 'react';
import {TextInput} from 'react-native';

import {COLORS} from '../../globals';
import sizer from '../../helpers/sizer';
import FontFamily from '../../helpers/font-family';

const OTPInput = React.forwardRef(
  (
    {
      containerSt = {},
      inputStyle = {},
      label = '',
      // value = '',
      error = false,
      placeholder = '',
      handleChange = e => {},
      onKeyPress = e => {},
      ...props
    },
    ref,
  ) => {
    const [value, setValue] = React.useState();

    return (
      <TextInput
        maxLength={1}
        inputMode="numeric"
        placeholder={placeholder}
        ref={ref}
        value={value}
        onChangeText={e => {
          setValue(e);
          handleChange(e);
        }}
        onKeyPress={onKeyPress}
        style={{
          color: COLORS.dark,
          backgroundColor: COLORS.whiteV1,
          fontSize: sizer.fontScale(18),
          ...FontFamily.medium(),
          height: sizer.fontScale(58),
          width:sizer.fontScale(58),
          borderRadius: sizer.fontScale(10),
          textAlign: 'center',
          elevation: 5,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          ...(error && {shadowColor: COLORS.danger}),
          ...(error && {borderWidth: 1, borderColor: COLORS.danger}),
          ...inputStyle,
        }}
        placeholderTextColor={COLORS.dark}
        {...props}
      />
    );
  },
);

export default OTPInput;
