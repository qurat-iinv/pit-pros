import {View, useWindowDimensions} from 'react-native';
import {GestureHandlerRootView, ScrollView} from 'react-native-gesture-handler';

import ProposalRequestFields from './proposalRequestFields';
import {memo} from 'react';

const SwiperScreen = ({setActiveStep, swiperRef, scrollToIndex}) => {
  console.log('yes rendering');
  const {width, height} = useWindowDimensions();
  const fieldTypes = [
    'RequestDetails',
    'GlobalServices',
    'Scheduling',
    'Authorization',
    'Notes',
  ];

  return (
    <View style={{marginTop: 20}}>
      <GestureHandlerRootView>
        <ScrollView
          ref={swiperRef}
          initialScrollIndex={0}
          horizontal
          onMomentumScrollEnd={event => {
            const index = Math.floor(
              event.nativeEvent.contentOffset.x /
                event.nativeEvent.layoutMeasurement.width,
            );
            setActiveStep(index);
            scrollToIndex(index, 133);
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
              </View>
            );
          })}
        </ScrollView>
      </GestureHandlerRootView>
    </View>
  );
};

export default memo(SwiperScreen);
