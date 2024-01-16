import React from 'react';
import {StyleSheet, View, Modal} from 'react-native';

import {COLORS} from '../../globals';
import {BgBlurContainer, Container, Typography} from '../../atom-components';
import sizer from '../../helpers/sizer';
import {ActivityIndicator} from 'react-native-paper';
import {SpinnerLogoSvg} from '../../assets';

const Loader = () => {
  const [visible, setVisible] = React.useState(true);
  return (
    <Modal
      transparent={true}
      visible={visible}
      animationType="fade"
      onRequestClose={() => setVisible(false)}>
      <BgBlurContainer />
      <Container styles={styles.mainContainer}>
        <View style={styles.centeredView}>
          <View style={{justifyContent: 'center'}}>
            <View style={styles.logoView}>
              <SpinnerLogoSvg />
            </View>
            <ActivityIndicator
              color={COLORS.primary}
              size={sizer.fontScale(42)}
            />
          </View>
          <Typography size={14} mL={12}>
            Loading, Please Wait.
          </Typography>
        </View>
      </Container>
    </Modal>
  );
};

export default Loader;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'transparent',
    justifyContent: 'center',
  },
  centeredView: {
    backgroundColor: COLORS.white,
    borderRadius: sizer.fontScale(13),
    paddingHorizontal: sizer.moderateScale(16),
    paddingVertical: sizer.moderateVerticalScale(16),
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 10,
  },
  logoView: {
    position: 'absolute',
    left: 0,
    right: 0,
    alignItems: 'center',
  },
});
