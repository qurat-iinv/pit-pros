import {StyleSheet} from 'react-native';

import sizer from '../../helpers/sizer';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: sizer.moderateVerticalScale(20),
  },
  circleContainer: {
    width: sizer.moderateScale(30),
    height: sizer.moderateScale(30),
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },

  innerFilledCircle: {
    width: sizer.moderateScale(20),
    height: sizer.moderateScale(20),
    backgroundColor: '#DC0028',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },

  textContainer: {
    position: 'absolute',
    bottom: -36,
    width: sizer.moderateScale(50),
    height: sizer.moderateVerticalScale(40),
    justifyContent: 'center',
  },

  textStyle: {
    fontSize: sizer.fontScale(9),
    textAlign: 'center',
  },

  line: {
    width: '18%',
    height: 2,
  },
});

export default styles;
