import {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {ScrollView} from 'react-native-gesture-handler';

import sizer from '../../helpers/sizer';
import styles from './ui';

const Stepper = ({stepperRef, scrollToIndex}) => {
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
    setCurrentStep(index);
    scrollToIndex(index, STEP_WIDTH);
  };

  return (
    <ScrollView
      horizontal
      style={{marginHorizontal: -16}}
      showsHorizontalScrollIndicator={false}
      ref={stepperRef}
      pagingEnabled>
      <View style={[styles.container]}>
        {steps.map((stepTitle, currentIndex) => {
          const isActive = currentStep === currentIndex;
          const isDone = currentStep > currentIndex;
          const isLastStep = currentIndex === steps.length - 1;
          const isFirstStep = currentIndex === 0;
          return (
            <TouchableOpacity
              key={currentIndex}
              activeOpacity={1}
              style={[
                styles.stepContainer,
                getStepperStyle(isActive, isDone),
                !isLastStep ? {marginRight: -15} : null,
                {zIndex: -1 * currentIndex},
                {paddingLeft: isDone && !isFirstStep ? 25 : 20},
              ]}
              onPress={() => handlePress(currentIndex)}>
              {isDone ? (
                <View style={styles.iconContainer}>
                  <Icon name="check" size={sizer.fontScale(10)} color="white" />
                </View>
              ) : null}
              <Text
                style={[getTextColorStyle(isActive, isDone), {fontSize: 12}]}>
                {stepTitle}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default Stepper;
