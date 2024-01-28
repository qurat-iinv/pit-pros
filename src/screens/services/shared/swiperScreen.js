import React, {useEffect, useRef} from 'react';
import {View, useWindowDimensions} from 'react-native';
import {GestureHandlerRootView, ScrollView} from 'react-native-gesture-handler';

import ProposalRequestFields from './proposalRequestFields';

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
              <ProposalRequestFields
                key={i}
                width={width}
                height={height}
                fieldType={type}
              />
            );
          })}
        </ScrollView>
      </GestureHandlerRootView>
    </View>
  );
};

export default SwiperScreen;
