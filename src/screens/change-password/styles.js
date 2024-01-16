import {StyleSheet} from 'react-native';
import {COLORS} from '../../globals';
import sizer from '../../helpers/sizer';

export const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
  },
  main: {
    marginHorizontal: sizer.moderateScale(16),
    backgroundColor: COLORS.white,
    zIndex: 100,
  },
  vector: {
    alignSelf: 'center',
    marginTop: sizer.moderateVerticalScale(44),
    marginBottom: sizer.moderateVerticalScale(37.94),
  },
  backBtnView: {
    paddingHorizontal: sizer.moderateScale(16),
    marginTop: sizer.moderateVerticalScale(21),
    alignSelf: 'flex-start',
    zIndex: 2,
  },
});
