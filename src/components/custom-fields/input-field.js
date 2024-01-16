import * as React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

// Import Components and Utils
import {COLORS} from '../../globals';
import sizer from '../../helpers/sizer';
import Fonts from '../../helpers/font-family';
import {Typography} from '../../atom-components';
import {ErrorTextSvg} from '../../assets';

const InputField = React.forwardRef(
  (
    {
      containerSt = {},
      inputStyle = {},
      label = '',
      labelStyle = {},
      error = '',
      placeholder = '',
      handleChange = e => {},
      handlePress = e => {},
      mb = 18,
      mt = 0,
      light = false,
      numPad = false,
      editable = true,
      color = '#000',
      labelColor = COLORS.outline,
      leftIcon = '',
      RightIcon = '',
      ...props
    },
    ref,
  ) => {
    const [value, setValue] = React.useState();

    // Error Message Component
    const ErrorMsg = ({error}) => (
      <View style={styles.errorView}>
        <ErrorTextSvg />
        <Text
          style={{
            color: COLORS.danger,
            fontSize: sizer.fontScale(10),
            ...Fonts.regular(),
            marginLeft: sizer.moderateScale(4),
          }}>
          {error}
        </Text>
      </View>
    );

    return (
      <View
        onStartShouldSetResponder={handlePress}
        style={{
          marginTop: sizer.moderateVerticalScale(mt),
          marginBottom: sizer.moderateVerticalScale(mb),
          ...containerSt,
        }}>
        {label && (
          <View style={styles.label}>
            <Typography
              style={labelStyle}
              size={12}
              mB={6}
              color={error ? COLORS.danger : labelColor}>
              {label}
            </Typography>
          </View>
        )}
        <View
          style={[
            styles.inputView,
            {borderColor: error ? COLORS.danger : COLORS.outline},
          ]}>
          {/* Left Icon */}
          {!!leftIcon && <View>{leftIcon}</View>}

          {/* Text Input Field */}
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
            style={[
              styles.input,
              {
                color: color,
                ...inputStyle,
              },
            ]}
            placeholderTextColor={COLORS.darkV1}
            {...props}
          />

          {/* Right Icon */}
          {!!RightIcon && (
            <View style={styles.rightIcon}>
              {
                <RightIcon
                  width={sizer.fontScale(24)}
                  height={sizer.fontScale(24)}
                  fill={error ? COLORS.danger : COLORS.darkV2}
                />
              }
            </View>
          )}
        </View>
        {/* Error Message */}
        {Boolean(error !== '') && <ErrorMsg error={error} />}
      </View>
    );
  },
);

export default InputField;

const styles = StyleSheet.create({
  inputView: {
    flexDirection: 'row',
    minHeight: sizer.moderateVerticalScale(56),
    borderRadius: sizer.fontScale(4),
    borderWidth: sizer.fontScale(1),
    alignItems: 'center',
  },
  input: {
    flex: 1,
    
    ...Fonts.regular(),
    fontSize: sizer.fontScale(14),
    paddingLeft: sizer.moderateScale(16),
  },
  label: {
    position: 'absolute',
    top: sizer.moderateVerticalScale(-12),
    left: sizer.moderateScale(12),
    zIndex: 2,
    backgroundColor: COLORS.white,
    paddingHorizontal: sizer.moderateScale(6),
  },
  rightIcon: {
    width: sizer.moderateScale(40),
    alignItems: 'center',
  },
  errorView: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: sizer.moderateScale(6),
  },
});
