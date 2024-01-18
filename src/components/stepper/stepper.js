import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

import sizer from '../../helpers/sizer';
import styles from './ui';

const Stepper = ({activeStep, setActiveStep}) => {
  const steps = [
    'Request Details',
    'Services And Products',
    'Schedule',
    'Authorize',
    'Notes',
  ];

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} pagingEnabled>
      <View style={styles.container}>
        {steps.map((stepTitle, currentIndex) => {
          const isStepInProgress = activeStep === currentIndex;
          const isStepDone = activeStep > currentIndex;
          const isStepIncomplete = !isStepInProgress && !isStepDone;
          const isAfterFirstStep = currentIndex > 0;

          const stepBgColor = isStepInProgress
            ? {backgroundColor: '#DC0028'}
            : isStepIncomplete
            ? {backgroundColor: 'white'}
            : isStepDone
            ? {backgroundColor: 'white'}
            : null;

          const textColorStyle = isStepInProgress
            ? [styles.textStyle, {color: 'white'}]
            : isStepIncomplete
            ? [styles.textStyle, {color: '#C7C7C7'}]
            : isStepDone
            ? [styles.textStyle, {color: '#DC0028'}]
            : null;

          return (
            <TouchableOpacity
              key={currentIndex}
              activeOpacity={1}
              style={[
                styles.stepContainer,
                stepBgColor,
                isAfterFirstStep
                  ? {left: -10 * currentIndex, zIndex: -1 * currentIndex}
                  : null,
                currentIndex === 1 && isStepDone ? {width: 150} : null,
              ]}
              onPress={() => {
                setActiveStep(currentIndex);
              }}>
              {isStepDone ? (
                <View style={styles.iconContainer}>
                  <Icon name="check" size={sizer.fontScale(10)} color="white" />
                </View>
              ) : null}
              <Text style={textColorStyle}>{stepTitle}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default Stepper;
