import {StyleSheet, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Flex, Typography} from '../../atom-components';
import {BackButton} from '..';
import sizer from '../../helpers/sizer';
import {COLORS, baseOpacity} from '../../globals';

const Header = ({
  title = '',
  titleSize = 16,
  titleBold = false,
  titleCenter = false,
  btnLabel = '',
  btnIcon = null,
  btnColor = COLORS.primary,
  btnShadow = true,
  onClick = () => {
    console.log('click');
  },
}) => {
  return (
    <Flex jusContent="space-between" algItems="center">
      <View style={styles.backBtnView}>
        <BackButton />
      </View>
      <View style={titleCenter && styles.titleViewCenter}>
        <Typography textAlign="center" size={titleSize} medium={titleBold}>
          {title}
        </Typography>
      </View>
      {(btnLabel || btnIcon) && (
        <TouchableOpacity
          onPress={onClick}
          style={[
            styles.optionBtn,
            {backgroundColor: btnColor},
            !!btnShadow && styles.optionBtnShadow,
          ]}
          activeOpacity={baseOpacity}>
          {!!btnIcon && btnIcon}
          {!!btnLabel && (
            <Typography
              size={10}
              color={COLORS.white}
              medium
              style={{letterSpacing: 0.1}}>
              {btnLabel}
            </Typography>
          )}
        </TouchableOpacity>
      )}
    </Flex>
  );
};

export default Header;

const styles = StyleSheet.create({
  optionBtn: {
    paddingVertical: sizer.moderateVerticalScale(10),
    paddingHorizontal: sizer.moderateScale(6.5),
    borderRadius: 4,
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  optionBtnShadow: {
    shadowColor: 'rgba(0, 0, 0, 0.50)',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 1,
    shadowRadius: 12,
    elevation: 6,
  },
  titleViewCenter: {
    position: 'absolute',
    left: 0,
    right: 0,
  },
  backBtnView: {
    zIndex: 99,
  },
  rightBtn: {},
});
