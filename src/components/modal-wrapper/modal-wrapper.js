import React from 'react';
import {
  StyleSheet,
  View,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';

// Import Components and Utils
import {BgBlurContainer} from '../../atom-components';
import sizer from '../../helpers/sizer';
import {COLORS} from '../../globals';

export default function CustomModal({
  children,
  visible = false,
  setVisible = () => {},
  onBackdropPress = false,
  pT = 20,
  pB = 20,
  pH = 16,
  modalBoxStyle = {},
}) {
  const handleBackdropPress = () => {
    if (onBackdropPress) setVisible(false);
  };

  const centeredViewStyle = {
    paddingHorizontal: sizer.moderateScale(pH),
    paddingTop: sizer.moderateVerticalScale(pT),
    paddingBottom: sizer.moderateVerticalScale(pB),
  };

  return (
    <Modal
      transparent
      visible={visible}
      onRequestClose={() => setVisible(false)}>
      <BgBlurContainer />
      <TouchableOpacity
        style={styles.modalContainer}
        onPress={handleBackdropPress}
        activeOpacity={1}>
        <TouchableWithoutFeedback>
          <View style={[styles.centeredView, centeredViewStyle, modalBoxStyle]}>
            {children}
          </View>
        </TouchableWithoutFeedback>
      </TouchableOpacity>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    paddingHorizontal: sizer.moderateScale(16),
    justifyContent: 'center',
  },
  centeredView: {
    backgroundColor: COLORS.white,
    borderRadius: sizer.fontScale(8),
    elevation: 4,
    shadowColor: '#00000070',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.08,
    shadowRadius: 8,
  },
});
