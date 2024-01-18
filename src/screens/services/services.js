import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';

import {Container, Typography} from '../../atom-components';
import Header from '../../components/custom-headers/header';
import Card from '../../components/ui-card/card';
import sizer from '../../helpers/sizer';
import Stepper from '../../components/stepper/stepper';

export const StepperHeading = ({title}) => {
  return (
    <Typography
      size={sizer.fontScale(14)}
      bold
      mT={sizer.moderateVerticalScale(40)}>
      {title}
    </Typography>
  );
};

const Services = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNextStep = index => {
    setActiveStep(index);
  };

  return (
    <Container>
      <Header title="New Service Order" titleCenter />
      <View style={styles.cardContainer}>
        <Card title="Services" badgeNumber={2} dollars={6} />
        <Card title="Products" badgeNumber={2} dollars={6} />
        <Card title="Total" dollars={12} />
      </View>

      <View>
        <Stepper activeStep={activeStep} setActiveStep={setActiveStep} />
      </View>

      {/* <SwiperScreen /> */}
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
