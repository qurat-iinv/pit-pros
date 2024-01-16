import {StyleSheet} from 'react-native';
import {COLORS} from '../../globals';
import sizer from '../../helpers/sizer';

export const styles = StyleSheet.create({
  main: {
    marginHorizontal: sizer.moderateScale(16),
    backgroundColor: COLORS.white,
  },
  vector: {
    alignSelf: 'center',
    marginTop: sizer.moderateVerticalScale(2),
    marginBottom: sizer.moderateVerticalScale(65),
  },
  backBtnView: {
    paddingHorizontal: sizer.moderateScale(16),
    marginTop: sizer.moderateVerticalScale(21),
    alignSelf: 'flex-start',
    zIndex: 2,
  },
});
