import React from 'react';
import {View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import sizer from '../../helpers/sizer';
import {Typography} from '../../atom-components';
import styles from './ui';

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
