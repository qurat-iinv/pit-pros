import {StyleSheet} from 'react-native';
import sizer from '../../helpers/sizer';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: sizer.moderateVerticalScale(28),
  },
  main: {
    marginTop: sizer.moderateVerticalScale(83),
    marginHorizontal: sizer.moderateScale(16),
    marginBottom: sizer.moderateVerticalScale(38),
    zIndex: 100,
  },
  mainLogoTop: {
    alignSelf: 'center',
  },
  forgot: {
    alignSelf: 'flex-end',
  },
  remember: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  box: {
    width: sizer.fontScale(17),
    height: sizer.fontScale(17),
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#F2F2F2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signupBtn: {
    flexDirection: 'row',
    gap: 5,
  },
});
