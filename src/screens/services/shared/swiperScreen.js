import React, {Fragment, useEffect, useRef} from 'react';
import {View, useWindowDimensions} from 'react-native';
import {GestureHandlerRootView, ScrollView} from 'react-native-gesture-handler';

import ProposalRequestFields from './proposalRequestFields';
import {PrimaryButton} from '../../../components';

const SwiperScreen = ({
  activeStep,
  setActiveStep,
  setScrollRef,
  scrollSwiper,
}) => {
  const scrollRef = useRef();
  const {width, height} = useWindowDimensions();
  const fieldTypes = [
    'RequestDetails',
    'GlobalServices',
    'Scheduling',
    'Authorization',
    'Notes',
  ];

  const scrollToIndex = index => {
    scrollRef?.current?.scrollTo({x: index * width, y: 0, animated: true});
  };
  // useEffect(() => {
  //   scrollToIndex(activeStep);
  // }, [activeStep]);

  console.log(activeStep);

  return (
    <View style={{marginTop: 20}}>
      <GestureHandlerRootView>
        <ScrollView
          ref={scrollRef}
          initialScrollIndex={0}
          horizontal
          onMomentumScrollEnd={event => {
            const index = Math.floor(
              event.nativeEvent.contentOffset.x /
                event.nativeEvent.layoutMeasurement.width,
            );
            setActiveStep(index);
            console.log(index);

            // scrollSwiper(index);
          }}
          showsHorizontalScrollIndicator={false}
          pagingEnabled>
          {fieldTypes.map((type, i) => {
            return (
              <View key={i}>
                <ProposalRequestFields
                  width={width}
                  height={height}
                  fieldType={type}
                />

                <View
                  style={{
                    alignItems: 'flex-end',
                    paddingHorizontal: 16,
                    marginTop: 18,
                  }}>
                  <PrimaryButton
                    label={
                      activeStep === fieldTypes.length - 1 ? 'Done' : 'Next'
                    }
                    fontSize={12}
                    btnStyle={{width: 76, height: 31}}
                  />
                </View>
              </View>
            );
          })}
        </ScrollView>
      </GestureHandlerRootView>
    </View>
  );
};

export default SwiperScreen;
