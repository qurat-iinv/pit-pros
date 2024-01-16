import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

// Import Components and Utils
import sizer from '../../helpers/sizer';
import {Flex, Typography} from '../../atom-components';
import {COLORS, baseOpacity} from '../../globals';
import {NotificationSvg} from '../../assets';

// Import Libraries
import {Avatar} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const badgeValue = value => (value > 99 ? '99+' : value);

const UserInfo = ({mb, badgeNum = 3}) => {
  const navigation = useNavigation();

  return (
    <Flex jusContent="space-between" algItems="center" mb={mb}>
      <Flex algItems="center" gap={12}>
        <TouchableOpacity activeOpacity={baseOpacity}>
          <Avatar.Image
            style={{backgroundColor: COLORS.white}}
            size={sizer.fontScale(55)}
            source={require('../../assets/images/dummy-image.png')}
          />
        </TouchableOpacity>
        <View>
          <Typography size={10} light color={COLORS.outline}>
            Welcome 👋🏼
          </Typography>
          <Typography size={14} medium color={COLORS.dark} mB={6} capitalize>
            johnson michele
          </Typography>
          <Typography size={12} light color={COLORS.grey} LineHeight={20}>
            {`Following are your Appointments\nScheduled for today so far.`}
          </Typography>
        </View>
      </Flex>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Notifications')}
          style={styles.NotificationBtn}>
          <View style={styles.badgeView}>
            <View style={styles.badge}>
              <Typography size={8} color={COLORS.white}>
                {badgeValue(badgeNum)}
              </Typography>
            </View>
          </View>
          <NotificationSvg
            width={sizer.fontScale(18)}
            height={sizer.fontScale(20)}
          />
        </TouchableOpacity>
      </View>
    </Flex>
  );
};

export default UserInfo;

const styles = StyleSheet.create({
  NotificationBtn: {
    backgroundColor: COLORS.primary,
    height: sizer.fontScale(38),
    width: sizer.fontScale(38),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },
  badgeView: {
    borderWidth: sizer.fontScale(2),
    borderColor: COLORS.white,
    position: 'absolute',
    top: sizer.fontScale(-5),
    right: sizer.fontScale(-5),
    borderRadius: 100,
  },
  badge: {
    backgroundColor: COLORS.green,
    height: sizer.fontScale(16),
    width: sizer.fontScale(16),
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
