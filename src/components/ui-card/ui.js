import {StyleSheet} from 'react-native';
import sizer from '../../helpers/sizer';

const styles = StyleSheet.create({
  cardHeader: {
    flexDirection: 'row',
    borderColor: 'white',
    alignSelf: 'flex-start',
  },
  linearGradient: {
    width: sizer.moderateScale(105),
    height: sizer.moderateVerticalScale(60),
    position: 'relative',
    borderRadius: 5,
    justifyContent: 'center',
    paddingLeft: sizer.moderateScale(11),
  },
  badge: {
    width: sizer.moderateScale(15),
    height: sizer.moderateScale(15),
    backgroundColor: 'white',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: sizer.moderateScale(-20),
  },
});

export default styles;
