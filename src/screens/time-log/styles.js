import {StyleSheet} from 'react-native';
import {commonStyles} from '../../globals';
import sizer from '../../helpers/sizer';

export const styles = StyleSheet.create({
  cardContainer: {
    paddingHorizontal: sizer.moderateScale(18),
    paddingVertical: sizer.moderateVerticalScale(18),
    marginBottom: sizer.moderateVerticalScale(12),
    ...commonStyles.cardShadow,
  },
  flatListContainer: {
    paddingHorizontal: sizer.moderateScale(16),
    paddingTop: sizer.moderateVerticalScale(18),
    paddingBottom: sizer.moderateVerticalScale(6),
  },
});
