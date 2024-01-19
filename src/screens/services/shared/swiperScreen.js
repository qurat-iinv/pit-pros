import React, {useRef, useState} from 'react';
import {Dimensions, View, useWindowDimensions} from 'react-native';
import ProposalRequestFields from './proposalRequestFields';
import {ScrollView, GestureHandlerRootView} from 'react-native-gesture-handler';

const SwiperScreen = ({activeSwipeIndex, setActiveSwipeIndex}) => {
  const {height} = useWindowDimensions();
  const fieldTypes = [
    'RequestDetails',
    'GlobalServices',
    'Scheduling',
    'Authorization',
    'Notes',
  ];

  const width = Dimensions.get('window').width;

  
  return (
    <View style={{marginTop: 20}}>
      <GestureHandlerRootView>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          style={{marginHorizontal: -16}}
          onScroll={e => {
            console.log(
              parseInt(
                e.nativeEvent.contentOffset.x / Dimensions.get('window').width,
              ),
            );

            setActiveSwipeIndex(
              parseInt(
                e.nativeEvent.contentOffset.x / Dimensions.get('window').width,
              ),
            );
          }}>
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
