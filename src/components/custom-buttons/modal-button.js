import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Flex, Typography} from '../../atom-components';
import {COLORS} from '../../globals';
import sizer from '../../helpers/sizer';


const ModalButton = ({
  leftLabel = '',
  rightLabel = '',
  primaryLeft = false,
  handlePressCancel = () => {},
  handlePressSubmit = () => {},
}) => {
  return (
    <Flex>
      <View style={[styles.btnView, {borderRightWidth: 0.5}]}>
        <TouchableOpacity style={styles.btn} onPress={handlePressCancel}>
          <Typography
            size={14}
            color={primaryLeft ? COLORS.primary : COLORS.dark}
            textAlign="center"
            medium>
            {leftLabel}
          </Typography>
        </TouchableOpacity>
      </View>
      <View style={[styles.btnView, {borderLeftWidth: 0.5}]}>
        <TouchableOpacity style={styles.btn} onPress={handlePressSubmit}>
          <Typography
            size={14}
            color={primaryLeft ? COLORS.dark : COLORS.primary}
            textAlign="center"
            medium>
            {rightLabel}
          </Typography>
        </TouchableOpacity>
      </View>
    </Flex>
  );
};

export default ModalButton;

const styles = StyleSheet.create({
  btnView: {
    borderTopWidth: 1,
    borderColor: COLORS.greyV5,
    flex: 1,
  },
  btn: {
    paddingVertical: sizer.moderateVerticalScale(18),
  },
});
