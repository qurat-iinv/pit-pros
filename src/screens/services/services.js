import React, {useRef, useState} from 'react';
import {StyleSheet, View, useWindowDimensions} from 'react-native';

import {Container, Typography} from '../../atom-components';
import Header from '../../components/custom-headers/header';
import Card from '../../components/ui-card/card';
import sizer from '../../helpers/sizer';
import Stepper from '../../components/stepper/stepper';
import SwiperScreen from './shared/swiperScreen';

export const StepperHeading = ({title, ...otherProps}) => {
  return (
    <Typography {...otherProps} size={sizer.fontScale(14)} bold>
      {title}
    </Typography>
  );
};

const Services = () => {
  const {width} = useWindowDimensions();

  const scrollRef = useRef();
  const [activeStep, setActiveStep] = useState(0);
  const [activeSwipeIndex, setActiveSwipeIndex] = useState(0);

  const handleNextStep = index => {
    setActiveStep(index);
  };

  const setScrollRef = scrollEl => {
    scrollRef.current = scrollEl;
  };

  const scrollStepperIndex = index => {
    scrollRef?.current?.scrollTo({
      x: index * width,
      y: 0,
      animated: true,
    });
  };

  return (
    <Container pH={0}>
      <View style={{paddingHorizontal: sizer.moderateScale(16)}}>
        <Header title="New Service Order" titleCenter />
        <View style={styles.cardContainer}>
          <Card title="Services" badgeNumber={2} dollars={6} />
          <Card title="Products" badgeNumber={2} dollars={6} />
          <Card title="Total" dollars={12} />
        </View>

        <Stepper
          scrollStepperIndex={scrollStepperIndex}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
          setActiveSwipeIndex={setActiveSwipeIndex}
        />
      </View>

      <SwiperScreen
        setScrollRef={setScrollRef}
        activeStep={activeStep}
        setActiveStep={setActiveStep}
        activeSwipeIndex={activeSwipeIndex}
        setActiveSwipeIndex={setActiveSwipeIndex}
      />
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
