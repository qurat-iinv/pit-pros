import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import sizer from '../../helpers/sizer';
import {Typography} from '../../atom-components';

const Card = ({title, badgeNumber, dollars}) => {
  return (
    <LinearGradient
      colors={['#FFD1DA', '#FF4365', '#DC0028']}
      start={{x: 1, y: 0.01}}
      style={styles.linearGradient}>
      <View style={styles.cardHeader}>
        <Typography color="white" size={sizer.fontScale(12)}>
          {title}
        </Typography>
        {badgeNumber && (
          <View style={styles.badge}>
            <Typography size={sizer.fontScale(9)} bold color="#DC0028">
              2
            </Typography>
          </View>
        )}
      </View>
      <View>
        <Typography size={sizer.fontScale(20)} color="white" bold>
          ${dollars}
        </Typography>
      </View>
    </LinearGradient>
  );
};

export default Card;

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
