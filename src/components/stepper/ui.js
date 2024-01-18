import {StyleSheet} from 'react-native';

import sizer from '../../helpers/sizer';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: sizer.moderateVerticalScale(20),
  },

  stepContainer: {
    minWidth: sizer.moderateScale(120),
    height: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
    shadowColor: '#52006A',
    elevation: 4,
  },

  iconContainer: {
    width: sizer.moderateScale(13),
    height: sizer.moderateScale(13),
    backgroundColor: '#DC0028',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5,
  },

  textStyle: {
    fontSize: sizer.fontScale(9),
  },
});

export default styles;
