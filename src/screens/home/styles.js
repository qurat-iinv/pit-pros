import {StyleSheet} from 'react-native';
import sizer from '../../helpers/sizer';
import {COLORS} from '../../globals';

export const styles = StyleSheet.create({
  checkInBtn: {
    height: sizer.moderateVerticalScale(40),
    paddingHorizontal: sizer.moderateScale(24),
    borderRadius: sizer.fontScale(4),
  },
  createProposalBtn: {
    height: sizer.moderateVerticalScale(46),
    paddingHorizontal: sizer.moderateScale(10),
    position: 'absolute',
    bottom: sizer.moderateScale(16),
    right: sizer.moderateScale(16),
    borderRadius: sizer.fontScale(4),
  },
  appointmentCardHeader: {
    height: sizer.moderateVerticalScale(23),
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    paddingHorizontal: sizer.moderateScale(7),
    flexDirection: 'row',
    gap: 3,
    borderTopRightRadius: sizer.fontScale(5),
    borderTopLeftRadius: sizer.fontScale(5),
    elevation: 8,
    shadowColor: '#00000080',
  },
  appointmentCardBody: {
    borderBottomRightRadius: sizer.fontScale(5),
    borderBottomLeftRadius: sizer.fontScale(5),
    paddingHorizontal: sizer.moderateScale(7),
    elevation: 8,
    shadowColor: '#00000080',
    backgroundColor: COLORS.white,
  },
  flatListContainer: {
    paddingHorizontal: sizer.moderateScale(16),
    paddingTop: sizer.moderateVerticalScale(13),
    paddingBottom: sizer.moderateVerticalScale(4),
  },
});
