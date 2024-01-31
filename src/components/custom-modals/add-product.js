import {StyleSheet, View, Modal, TouchableOpacity} from 'react-native';

import {COLORS} from '../../globals';
import sizer from '../../helpers/sizer';
import {BackButton, CustomDropDown} from '../';
import {BgBlurContainer, Typography} from '../../atom-components';
import {
  RenderInputField,
  globalServicesLeft,
} from '../../screens/services/utils';
import ModalButton from '../custom-buttons/modal-button';

const AddProductModal = ({visible, setVisible}) => {
  const handleReject = () => {
    setVisible(false);
  };

  return (
    <Modal transparent={true} visible={visible} onRequestClose={handleReject}>
      <BgBlurContainer />
      <View style={styles.modalContainer}>
        <TouchableOpacity style={styles.backBtn} onPress={handleReject}>
          <BackButton disabled={true} />
        </TouchableOpacity>
        <View style={styles.centeredView}>
          <Typography size={18} medium mB={14} textAlign="center">
            Add Product
          </Typography>

          <Typography size={14} mB={14} textAlign="center">
            Medium Duty Oil Change
          </Typography>
          <CustomDropDown
            data={globalServicesLeft}
            mt={sizer.moderateVerticalScale(5)}
            labelStyle={{color: 'black'}}
            placeholder="heelo"
            label="Customer Complaint *"
            value=""
            valueField="value"
          />

          <RenderInputField label="Quantity *" placeholder="1" />
          <RenderInputField label="Cost" placeholder="$100" />

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginHorizontal: sizer.moderateScale(-17),
            }}>
            <ModalButton
              rightLabel="Add a Product"
              leftLabel="Cancel"
              handlePressCancel={handleReject}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default AddProductModal;

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
    borderRadius: 10,
    paddingHorizontal: sizer.moderateScale(16),
    paddingTop: sizer.moderateScale(25),
    maxHeight: sizer.moderateVerticalScale(675),
    elevation: 4,
    shadowColor: '#00000070',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.08,
    shadowRadius: 8,
    marginTop: sizer.moderateVerticalScale(60),
  },
  backBtn: {
    alignSelf: 'flex-start',
    position: 'absolute',
    top: sizer.moderateVerticalScale(21),
    left: sizer.moderateScale(16),
  },
  rejectBtn: {
    borderColor: '#DEDEDE',
    borderWidth: sizer.fontScale(1),
  },

  noteImage: {
    width: sizer.moderateScale(56),
    height: sizer.moderateVerticalScale(61),
    borderRadius: sizer.moderateScale(4),
  },

  crossIconContainer: {
    width: sizer.moderateScale(10),
    height: sizer.moderateScale(10),
    backgroundColor: '#DC0028',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: sizer.moderateVerticalScale(-4),
    left: sizer.moderateScale(48),
  },

  addImageContainer: {
    backgroundColor: 'white',
    borderColor: '#79747E',
    borderWidth: sizer.moderateScale(1),
    borderStyle: 'dashed',
    width: sizer.moderateScale(56),
    height: sizer.moderateVerticalScale(61),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
