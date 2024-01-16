import React, {Fragment, useRef, useState} from 'react';
import {Text, View, Animated} from 'react-native';

import sizer from '../../helpers/sizer';
import Icon from 'react-native-vector-icons/FontAwesome6';

import styles from './ui';

const Stepper = () => {
  const [activeStep, setActiveStep] = useState(0);
  const ref = useRef(new Animated.Value(0)).current;

  const steps = [
    'Request Details',
    'Services And Products',
    'Schedule',
    'Authorize',
  ];
//   const handleAnimation = () => {
//     Animated.timing(animation, {
//       toValue: 1,
//       duration: 3000,
//       useNativeDriver: false,
//     }).start();
//   };

  const handleIncreaseStep = () => {
    setActiveStep(prev => prev + 1);
  };

  const Line = ({isStepDone}) => {
    return (
      <View
        style={[
          styles.line,
          {backgroundColor: isStepDone ? '#DC0028' : '#C7C7C7'},
        ]}></View>
    );
  };

  return (
    <View style={styles.container}>
      {steps.map((stepTitle, currentIndex) => {
        const isStepInProgress = activeStep === currentIndex;
        const isStepDone = activeStep > currentIndex;
        const isStepIncomplete = !isStepInProgress && !isStepDone;
        const isLastStep = currentIndex === steps.length - 1;

        const circleStyle = isStepInProgress
          ? [styles.circleContainer, {borderColor: '#DC0028'}]
          : isStepIncomplete
          ? [styles.circleContainer, {borderColor: '#C7C7C7'}]
          : isStepDone
          ? [
              styles.innerFilledCircle,
              {width: sizer.moderateScale(30), height: sizer.moderateScale(30)},
            ]
          : null;

        const textColorStyle = isStepInProgress
          ? [styles.textStyle, {color: '#DC0028'}]
          : isStepIncomplete
          ? [styles.textStyle, {color: '#C7C7C7'}]
          : isStepDone
          ? [styles.textStyle, {color: 'black'}]
          : null;

        return (
          <Fragment key={currentIndex}>
            <View style={styles.circleContainer}>
              <View
                onStartShouldSetResponder={() => setActiveStep(currentIndex)}
                style={circleStyle}>
                {isStepInProgress && (
                  <View style={styles.innerFilledCircle}></View>
                )}
                {isStepDone ? (
                  <Icon name="check" size={sizer.fontScale(18)} color="white" />
                ) : null}
              </View>

              <View style={styles.textContainer}>
                <Text style={textColorStyle}>{stepTitle}</Text>
              </View>
            </View>

            {!isLastStep && <Line isStepDone={isStepDone} />}
          </Fragment>
        );
      })}
    </View>
  );
};

export default Stepper;

