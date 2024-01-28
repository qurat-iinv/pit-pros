import React, {useRef} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {ScrollView} from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

import sizer from '../../helpers/sizer';
import styles from './ui';

const Stepper = ({activeStep, setActiveStep}) => {
  const STEP_WIDTH = sizer.moderateScale(133);
  const steps = [
    'Request Details',
    'Services & Products',
    'Schedule',
    'Authorize',
    'Notes',
  ];

  const scrollRef = useRef();
  const stepperWidthRefs = useRef([]);
  const widthh = useSharedValue(STEP_WIDTH);

  const scrollToIndex = index => {
    scrollRef?.current?.scrollTo({x: index * STEP_WIDTH, y: 0, animated: true});
  };

  const getTextColorStyle = (isActive, isDone) => {
    if (isActive) return [styles.textStyle, {color: 'white'}];
    if (isDone) return [styles.textStyle, {color: '#DC0028'}];
    return [styles.textStyle, {color: '#C7C7C7'}];
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{translateX: widthh.value}],
  }));

  const handlePress = index => {
    setActiveStep(index);
    scrollToIndex(index);
    widthh.value = withTiming(STEP_WIDTH * index);

    console.log(index);
  };

  const storeRef = ref => {
    ref?.measure((x, y, width) => {
      if (width) stepperWidthRefs.current.push(width);
    });
  };

  console.log(stepperWidthRefs.current);

  return (
    <ScrollView
      horizontal
      style={{marginHorizontal: -16}}
      showsHorizontalScrollIndicator={false}
      ref={scrollRef}
      pagingEnabled>
      <View style={[styles.container]}>
        {steps.map((stepTitle, currentIndex) => {
          const isActive = activeStep === currentIndex;
          const isDone = activeStep > currentIndex;
          const isLastStep = currentIndex === steps.length - 1;
          const isFirstStep = currentIndex === 0;
          return (
            <TouchableOpacity
              key={currentIndex}
              activeOpacity={1}
              ref={storeRef}
              style={[
                styles.stepContainer,
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
        <Animated.View
          style={[
            styles2.wait,
            animatedStyle,
            {width: stepperWidthRefs.current[activeStep]},
          ]}
        />
      </View>
    </ScrollView>
  );
};

export default Stepper;

const styles2 = StyleSheet.create({
  wait: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    // paddingLeft: 20,
    width: 133,
    height: 30,
    backgroundColor: 'red',
    zIndex: -10,
    left: 10,
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
  },
});
