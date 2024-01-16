import React from 'react';
import {
  Modal,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

// Import Components
import {COLORS} from '../../globals';
import sizer from '../../helpers/sizer';
import {BgBlurContainer, Typography} from '../../atom-components';
import FiveStarRating from '../five-star-rating';
import InputField from '../custom-fields/input-field';

const FeedbackModal = ({
  modalVisible,
  setModalVisible,
  formData,
  formError,
  validate,
  handleFormData,
}) => {
  const handleSubmit = () => {
    if (validate()) {
      return;
    }
    setModalVisible(false);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    handleFormData('', 'inputField');
    handleFormData(0, 'rating');
  };

  return (
    <Modal transparent={true} visible={modalVisible} animationType="fade">
      <BgBlurContainer />
      <TouchableOpacity
        style={styles.modalContainer}
        onPress={handleCloseModal}
        activeOpacity={1}>
        <TouchableWithoutFeedback>
          <View style={styles.centeredView}>
            <Typography size={14} mB={20}>
              Feedback
            </Typography>
            <Typography size={12} mB={11} medium>
              Appointment Review
            </Typography>
            <FiveStarRating
              setRatingValue={e => handleFormData(e, 'rating')}
              ratingValue={formData?.rating}
            />
            <InputField
              mt={11}
              placeholder="Write Something!!!"
              handleChange={e => handleFormData(e, 'inputField')}
              value={formData?.inputField}
              error={formError?.inputField || formError?.rating}
              multiline
              textAlignVertical="top"
              inputStyle={{
                height: sizer.moderateVerticalScale(95),
                fontSize: sizer.fontScale(10),
                color: COLORS.outline,
                borderColor: formError?.inputField ? COLORS.danger : '#E2E2E2',
                paddingHorizontal: sizer.moderateScale(10),
                paddingVertical: sizer.moderateVerticalScale(8),
                paddingLeft: sizer.moderateScale(10),
              }}
              placeholderTextColor={COLORS.outline}
            />
            <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
              <Typography size={10} medium>
                Done
              </Typography>
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      </TouchableOpacity>
    </Modal>
  );
};

export default FeedbackModal;

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: 'transparent',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: sizer.moderateScale(16),
  },
  centeredView: {
    width: '100%',
    backgroundColor: COLORS.white,
    borderRadius: 13,
    paddingHorizontal: sizer.moderateScale(16),
    paddingVertical: sizer.moderateVerticalScale(17),
    elevation: 4,
    shadowColor: '#00000070',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.08,
    shadowRadius: 8,
  },
  btn: {
    borderRadius: 4,
    alignSelf: 'flex-end',
    borderWidth: 1,
    borderColor: '#DEDEDE',
    paddingHorizontal: sizer.moderateScale(12.5),
    paddingVertical: sizer.moderateVerticalScale(5.5),
  },
});
