import {StyleSheet} from 'react-native';

import sizer from '../../helpers/sizer';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: sizer.moderateVerticalScale(20),
    marginBottom: sizer.moderateVerticalScale(3),
    paddingHorizontal: 16
  },

  stepContainer: {
    minWidth: sizer.moderateScale(133),
    paddingRight: 20,
    height: sizer.moderateVerticalScale(33),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
    shadowColor: '#000',
    elevation: 3,
    marginHorizontal: 1
  },

  iconContainer: {
    width: sizer.moderateScale(13),
    height: sizer.moderateScale(13),
    backgroundColor: '#DC0028',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: sizer.moderateScale(5),
  },

  textStyle: {
    fontSize: sizer.fontScale(9),
  },
});

export default styles;
