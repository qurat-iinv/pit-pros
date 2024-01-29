import {View, useWindowDimensions} from 'react-native';
import {GestureHandlerRootView, ScrollView} from 'react-native-gesture-handler';

import ProposalRequestFields from './proposalRequestFields';
import {PrimaryButton} from '../../../components';
import sizer from '../../../helpers/sizer';

const SwiperScreen = ({
  activeStep,
  setActiveStep,
  swiperRef,
  scrollToIndex,
}) => {
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

                <View
                  style={{
                    alignItems: 'flex-end',
                    paddingHorizontal: sizer.moderateScale(16),
                  }}>
                  <PrimaryButton
                    label={
                      activeStep === fieldTypes.length - 1 ? 'Done' : 'Next'
                    }
                    fontSize={sizer.fontScale(12)}
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
