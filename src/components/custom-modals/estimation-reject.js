import {
  StyleSheet,
  View,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';

import {COLORS} from '../../globals';
import sizer from '../../helpers/sizer';
import {BackButton, InputField, PrimaryButton} from '..';
import {BgBlurContainer, Typography} from '../../atom-components';

const EstimationRejectModal = ({visible, setVisible}) => {
  const [inputValue, setInputValue] = React.useState('');
  const maxLength = 250;
  const handleModal = () => {
    setVisible('estimationReject', false);
    setVisible('estimationRequest', true);
  };

  const handleClick = () => {
    console.log('clicked');
  };

  return (
    <Modal transparent={true} visible={visible} onRequestClose={handleModal}>
      <BgBlurContainer />
      <View style={styles.modalContainer}>
        <TouchableOpacity style={styles.backBtn} onPress={handleModal}>
          <BackButton disabled={true} />
        </TouchableOpacity>
        <View style={styles.centeredView}>
          <Typography size={18} medium textAlign="center" mB={34}>
            Estimation Rejections
          </Typography>
          <Typography size={14} LineHeight={20} mB={6}>
            Please tell us the reason to reject the estimation.
          </Typography>
          <View>
            <InputField
              placeholder="Please type your reason here..."
              handleChange={e => setInputValue(e)}
              value={inputValue}
              // error={formErr?.complaint}
              multiline
              textAlignVertical="top"
              inputStyle={styles.input}
              labelColor="#49454F"
              placeholderTextColor="#979797"
              mb={0}
              maxLength={maxLength}
            />
            <Typography size={10} color="#979797" style={styles.letterCount}>
              {inputValue.length}/{maxLength}
            </Typography>
          </View>
          <PrimaryButton label="Send" onClick={handleClick} mt={28} />
        </View>
      </View>
    </Modal>
  );
};

export default EstimationRejectModal;

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: 'transparent',
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: sizer.moderateScale(16),
  },
  centeredView: {
    width: '100%',
    backgroundColor: COLORS.white,
    borderRadius: 10,
    paddingHorizontal: sizer.moderateScale(16),
    paddingTop: sizer.moderateVerticalScale(25),
    paddingBottom: sizer.moderateVerticalScale(39),
    elevation: 4,
    shadowColor: '#00000070',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.08,
    shadowRadius: 8,
  },
  backBtn: {
    alignSelf: 'flex-start',
    position: 'absolute',
    top: sizer.moderateVerticalScale(21),
    left: sizer.moderateScale(16),
    zIndex: 99,
  },
  rejectBtn: {
    borderColor: '#DEDEDE',
    borderWidth: sizer.fontScale(1),
  },
  input: {
    fontSize: sizer.fontScale(12),
    height: sizer.moderateVerticalScale(135),
    paddingLeft: sizer.moderateScale(13),
    paddingRight: sizer.moderateScale(13),
    paddingTop: sizer.moderateVerticalScale(9),
    paddingBottom: sizer.moderateVerticalScale(24),
    borderColor: '#DBDBDB',
  },
  letterCount: {
    position: 'absolute',
    bottom: sizer.moderateVerticalScale(8),
    right: sizer.moderateScale(13),
  },
});
