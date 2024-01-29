import React, {useRef, useState} from 'react';
import {StyleSheet, View, useWindowDimensions} from 'react-native';

import {Container} from '../../atom-components';
import Header from '../../components/custom-headers/header';
import Card from '../../components/ui-card/card';
import sizer from '../../helpers/sizer';
import Stepper from '../../components/stepper/stepper';
import SwiperScreen from './shared/swiperScreen';

const Services = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [activeSwipeIndex, setActiveSwipeIndex] = useState(0);
  const {width} = useWindowDimensions();

  const handleNextStep = () => {
    setActiveStep(prev => prev + 1);
  };

  const stepperRef = useRef();
  const swiperRef = useRef();

  const scrollToIndex = (index, STEP_WIDTH) => {
    stepperRef?.current?.scrollTo({
      x: index * STEP_WIDTH,
      y: 0,
      animated: true,
    });
    swiperRef?.current?.scrollTo({x: index * width, y: 0, animated: true});
  };

  return (
    <Container pH={0} pT={10}>
      <View style={{paddingHorizontal: sizer.moderateScale(16)}}>
        <Header title="New Service Order" titleCenter />
        <View style={styles.cardContainer}>
          <Card title="Services" badgeNumber={2} dollars={6} />
          <Card title="Products" badgeNumber={2} dollars={6} />
          <Card title="Total" dollars={12} />
        </View>
        <Stepper
          stepperRef={stepperRef}
          swiperRef={swiperRef}
          scrollToIndex={scrollToIndex}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
          setActiveSwipeIndex={setActiveSwipeIndex}
        />
      </View>

      <SwiperScreen
        swiperRef={swiperRef}
        scrollToIndex={scrollToIndex}
        activeStep={activeStep}
        handleNextStep={handleNextStep}
        setActiveStep={setActiveStep}
      />
    </Container>
  );
};

export default Services;

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: sizer.moderateVerticalScale(18),
  },
});
