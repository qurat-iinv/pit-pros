import React, {useRef} from 'react';
import {StyleSheet, View} from 'react-native';
import Swiper from 'react-native-swiper';
import ProposalRequestFields from './proposalRequestFields';
import {PrimaryButton} from '../../../components';
import sizer from '../../../helpers/sizer';

const styles = StyleSheet.create({
  wrapper: {},
});

const SwiperComponent = () => {
  const swiperRef = useRef(null);

  const handleNextButtonClick = () => {
    if (swiperRef.current) {
      swiperRef.current.scrollBy(2);
    }
  };

  return (
    <View style={{flex: 1}}>
      <Swiper
        ref={swiperRef}
        style={styles.wrapper}
        showsButtons={false}
        showsPagination={false}>
        <ProposalRequestFields />
        <ProposalRequestFields />
        <ProposalRequestFields />
      </Swiper>

      <PrimaryButton
        label="Next"
        fontSize={sizer.fontScale(12)}
        btnStyle={{
          width: sizer.moderateScale(76),
          height: sizer.moderateVerticalScale(31),
          alignSelf: 'flex-end',
        }}
        onPress={handleNextButtonClick}
      />
    </View>
  );
};

export default SwiperComponent;
