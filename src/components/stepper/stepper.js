import React, {useEffect, useRef} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {ScrollView} from 'react-native-gesture-handler';

import sizer from '../../helpers/sizer';
import styles from './ui';

const Stepper = ({
  activeStep,
  setActiveStep,
  setActiveSwipeIndex,
}) => {
  const steps = [
    'Request Details',
    'Services & Products',
    'Schedule',
    'Authorize',
    'Notes',
  ];

  const scrollRef = useRef();
  const scrollToIndex = index => {
    scrollRef?.current?.scrollTo({x: index * 133, y: 0, animated: true});
  };
  useEffect(() => {
    scrollToIndex(activeStep);
  }, [activeStep]);

  return (
    <ScrollView
      horizontal
      style={{marginHorizontal: -16}}
      showsHorizontalScrollIndicator={false}
      ref={scrollRef}
      pagingEnabled>
      <View style={[styles.container]}>
        {steps.map((stepTitle, currentIndex) => {
          const isStepInProgress = activeStep === currentIndex;
          const isStepDone = activeStep > currentIndex;
          const isStepIncomplete = !isStepInProgress && !isStepDone;
          const isLastStep = currentIndex === steps.length - 1;
          const isFirstStep = currentIndex === 0;

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
                !isLastStep ? {marginRight: -15} : null,
                {zIndex: -1 * currentIndex},
                {paddingLeft: isStepDone && !isFirstStep ? 25 : 20},
              ]}
              onPress={() => {
                setActiveStep(currentIndex);
                setActiveSwipeIndex(currentIndex);
              }}>
              {isStepDone ? (
                <View style={styles.iconContainer}>
                  <Icon name="check" size={sizer.fontScale(10)} color="white" />
                </View>
              ) : null}
              <Text style={[textColorStyle, {fontSize: 12}]}>{stepTitle}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default Stepper;
