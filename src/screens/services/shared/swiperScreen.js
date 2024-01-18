import React, {Fragment, useRef} from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
} from 'react-native';
import ProposalRequestFields from './proposalRequestFields';

const SwiperScreen = () => {
  const scrollRef = useRef(null);

  return (
    <View
      style={{
        height: '50%',
      }}>
      <ScrollView
        style={{
          // backgroundColor: 'pink',
          // marginHorizontal: 20,
          marginTop: 30,
          height: 150,
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled>
        {[1, 2, 3, 4, 5].map((_, i) => {
          return (
            <Text key={i}>
              <ProposalRequestFields fieldType="RequestDetails" />;
            </Text>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default SwiperScreen;
