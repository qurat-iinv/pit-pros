import React from 'react';
import {StyleSheet, View} from 'react-native';

import {Container, Typography} from '../../atom-components';
import Header from '../../components/custom-headers/header';
import Card from '../../components/ui-card/card';
import Stepper from '../../components/stepper/stepper';
import sizer from '../../helpers/sizer';
import SwiperComponent from './shared/swiper';

const Services = () => {
  return (
    <Container>
      <Header title="New Service Order" titleCenter />
      <View style={styles.cardContainer}>
        <Card title="Services" badgeNumber={2} dollars={6} />
        <Card title="Products" badgeNumber={2} dollars={6} />
        <Card title="Total" dollars={12} />
      </View>

      <View>
        <Stepper />
      </View>

      <View>
        <Typography
          size={sizer.fontScale(14)}
          bold
          mT={sizer.moderateVerticalScale(40)}>
          Request Details
        </Typography>
      </View>

      <SwiperComponent />
    </Container>
  );
};

export default Services;

const styles = StyleSheet.create({
  heading: {
    fontSize: sizer.fontScale(14),
    fontWeight: '800',
    color: 'black',
  },

  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: sizer.moderateVerticalScale(18),
  },
});
