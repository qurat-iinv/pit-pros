import {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {ScrollView} from 'react-native-gesture-handler';

import sizer from '../../helpers/sizer';
import styles from './ui';

const Stepper = ({stepperRef, scrollToIndex, activeStep, setActiveStep}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const STEP_WIDTH = sizer.moderateScale(133);

  const steps = [
    'Request Details',
    'Services & Products',
    'Schedule',
    'Authorize',
    'Notes',
  ];

  const getTextColorStyle = (isActive, isDone) => {
    if (isActive) return [styles.textStyle, {color: 'white'}];
    if (isDone) return [styles.textStyle, {color: '#DC0028'}];
    return [styles.textStyle, {color: '#C7C7C7'}];
  };

  const getStepperStyle = (isActive, isDone) => {
    if (isActive) return {backgroundColor: '#DC0028'};
    if (isDone) return {backgroundColor: 'white'};
    return {backgroundColor: 'white'};
  };

  const handlePress = index => {
    setActiveStep(index);
    scrollToIndex(index, STEP_WIDTH);
  };

  const Step = ({index, stepTitle}) => {
    const isActive = activeStep === index;
    const isDone = activeStep > index;
    const isLastStep = index === 4;
    const isFirstStep = index === 0;

    return (
      <TouchableOpacity
        activeOpacity={1}
        index={index}
        style={[
          styles.stepContainer,
          getStepperStyle(isActive, isDone),
          !isLastStep ? {marginRight: -15} : null,
          {zIndex: -1 * index},
          {paddingLeft: isDone && !isFirstStep ? 25 : 20},
        ]}
        onPress={() => handlePress(index)}>
        {isDone ? (
          <View style={styles.iconContainer}>
            <Icon name="check" size={sizer.fontScale(10)} color="white" />
          </View>
        ) : null}
        <Text style={[getTextColorStyle(isActive, isDone), {fontSize: 12}]}>
          {stepTitle}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView
      horizontal
      style={{marginHorizontal: -16}}
      showsHorizontalScrollIndicator={false}
      ref={stepperRef}
      pagingEnabled>
      <View style={[styles.container]}>
        <Step index={0} stepTitle={steps[0]} />
        <Step index={1} stepTitle={steps[1]} />
        <Step index={2} stepTitle={steps[2]} />
        <Step index={3} stepTitle={steps[3]} />
        <Step index={4} stepTitle={steps[4]} />
      </View>
    </ScrollView>
  );
};

export default Stepper;
