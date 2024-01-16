import {StyleSheet} from 'react-native';
import sizer from '../../helpers/sizer';
import {COLORS} from '../../globals';

export const styles = StyleSheet.create({
  main: {
    marginHorizontal: sizer.moderateScale(16),
    backgroundColor: COLORS.white,
    zIndex: 100,
  },
  vector: {
    alignSelf: 'center',
    marginTop: sizer.moderateVerticalScale(14),
    marginBottom: sizer.moderateVerticalScale(55.16),
  },
  resendBtn: {
    flexDirection: 'row',
    gap: 5,
  },
  bottomView: {
    alignItems: 'center',
    marginBottom: sizer.moderateVerticalScale(132),
    marginTop: sizer.moderateVerticalScale(48),
  },
  backbtnView: {
    paddingHorizontal: sizer.moderateScale(16),
    marginTop: sizer.moderateVerticalScale(21),
  },
});
