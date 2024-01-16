import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import sizer from '../../helpers/sizer';
import {COLORS} from '../../globals';
import Fonts from '../../helpers/font-family';
import {Typography} from '../../atom-components';
import {DropDownSvg, ErrorTextSvg} from '../../assets';

const CustomDropDown = ({
  data = [],
  contStyle = '',
  mainContStyle = '',
  labelStyle = {},
  placeholder = 'Select',
  leftIcon = '',
  RightIcon = DropDownSvg,
  label = '',
  value = '',
  error = '',
  labelField = 'label',
  valueField = '_id',
  search = false,
  maxHeight = 300,
  mt = 0,
  mb = 18,
  labelColor = COLORS.outline,
  handleChange = e => {},
  placeholderStyle = {},
  selectedTextStyle = {},
  inputSearchStyle = {},
  rightIconStyle = {width: 28, height: 28, marginRight: 0},
}) => {
  const renderLabel = () => {
    return (
      <View style={styles.label}>
        <Typography
          style={labelStyle}
          color={error ? COLORS.danger : labelColor}
          size={12}>
          {label}
        </Typography>
      </View>
    );
  };
  return (
    <View
      style={[
        styles.container,
        {
          marginBottom: sizer.moderateVerticalScale(mb),
          marginTop: sizer.moderateVerticalScale(mt),
        },
        {...mainContStyle},
      ]}>
      {label && renderLabel()}
      <Dropdown
        style={[
          styles.dropdown,
          {borderColor: error ? COLORS.danger : COLORS.outline},
          {...contStyle},
        ]}
        placeholderStyle={[styles.placeholderStyle, placeholderStyle]}
        selectedTextStyle={[styles.selectedTextStyle, selectedTextStyle]}
        inputSearchStyle={[styles.inputSearchStyle, inputSearchStyle]}
        iconStyle={styles.iconStyle}
        data={data}
        search={search}
        maxHeight={maxHeight}
        labelField={labelField}
        valueField={valueField}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        renderRightIcon={() => (
          <View
            style={{
              marginRight: sizer.moderateScale(rightIconStyle.marginRight),
            }}>
            {RightIcon && (
              <RightIcon
                width={sizer.fontScale(rightIconStyle.width)}
                height={sizer.fontScale(rightIconStyle.height)}
                fill={error ? COLORS.danger : COLORS.outline}
              />
            )}
          </View>
        )}
        renderLeftIcon={() => (
          <View
            style={{
              marginLeft: sizer.moderateScale(6),
              marginRight: leftIcon && sizer.moderateScale(13),
            }}>
            {leftIcon && leftIcon}
          </View>
        )}
        itemTextStyle={{color: COLORS.dark, fontSize: sizer.fontScale(14)}}
      />
      {error ? (
        <View
          style={{
            alignSelf: 'flex-end',
            flexDirection: 'row',
            alignItems: 'center',
            paddingTop: sizer.moderateScale(8),
          }}>
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
      ) : null}
    </View>
  );
};

export default CustomDropDown;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
  },
  dropdown: {
    paddingHorizontal: sizer.moderateScale(10),
    color: COLORS.dark,
    height: sizer.moderateVerticalScale(56),
    borderWidth: 1,
    borderRadius: sizer.fontScale(4),
  },
  placeholderStyle: {
    ...Fonts.regular(),
    fontSize: sizer.fontScale(14),
    color: COLORS.dark,
  },
  selectedTextStyle: {
    ...Fonts.regular(),
    fontSize: sizer.fontScale(14),
    color: COLORS.dark,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    ...Fonts.regular(),
    height: 20,
    fontSize: 14,
    color: COLORS.dark,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: sizer.moderateScale(12),
    top: sizer.moderateVerticalScale(-10),
    zIndex: 999,
    paddingHorizontal: sizer.moderateScale(6),
    fontSize: 14,
  },
});
