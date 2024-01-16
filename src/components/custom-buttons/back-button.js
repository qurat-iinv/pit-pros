import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

import sizer from '../../helpers/sizer';
import {BackBtnSvg} from '../../assets';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../../globals';

const BackButton = ({disabled = false}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.goBack()}
      disabled={disabled}>
      <BackBtnSvg width={sizer.fontScale(10)} height={sizer.fontScale(16)} />
    </TouchableOpacity>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  button: {
    width: sizer.fontScale(38),
    height: sizer.fontScale(38),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: sizer.fontScale(1),
    borderRadius: 6,
    borderColor: COLORS.whiteV2,
    backgroundColor: COLORS.whiteV1,
  },
});
