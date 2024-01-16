import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Modal,
} from 'react-native';

// Import Components and Utils
import {COLORS, baseOpacity} from '../../globals';
import sizer from '../../helpers/sizer';
import fontFamily from '../../helpers/font-family';
import {BgBlurContainer, Flex, Typography} from '../../atom-components';
import {CustomDropDown, InputField, PrimaryButton} from '../';
import {CameraSvg} from '../../assets';
import {useDispatch} from 'react-redux';
import {toggleLoader} from '../../store/reducer';
import {dropdownData} from './data';

const AddVehicleDetails = ({visible, setVisible}) => {
  const dispatch = useDispatch();
  const [formErr, setFromErr] = useState({});
  const [formData, setFormData] = useState({
    chassisType: '',
    vinNumber: '',
    year: '',
    make: '',
    model: '',
    licenseNo: '',
  });

  const {chassisType, vinNumber, year, make, model, licenseNo} = formData;

  const handleFormData = (e, name) => {
    setFormData({
      ...formData,
      [name]: e,
    });
    setFromErr({
      ...formErr,
      [name]: '',
    });
  };

  const validate = () => {
    let obj = {};
    if (vinNumber === '' || !vinNumber) {
      obj.vinNumber = 'The vin number field is required.';
    }
    if (year === '' || !year) {
      obj.year = 'The year field is required.';
    }
    if (make === '' || !make) {
      obj.make = 'The make field is required.';
    }
    if (model === '' || !model) {
      obj.model = 'The model field is required.';
    }
    if (licenseNo === '' || !licenseNo) {
      obj.licenseNo = 'The license number field is required.';
    }
    if (Object.keys(obj)?.length) {
      setFromErr(obj);
      return true;
    }
    return false;
  };

  const ImageButton = () => {
    const handleImageClick = () => {
      console.log('Image Button Clicked');
    };
    return (
      <TouchableOpacity
        style={styles.imageBtn}
        onPress={handleImageClick}
        activeOpacity={baseOpacity}>
        <Flex jusContent="center" algItems="center" gap={12}>
          <Typography textAlign="center" size={12} color={COLORS.greyV6}>
            Take VIN/Plate Number Picture
          </Typography>
          <CameraSvg width={sizer.fontScale(18)} height={sizer.fontScale(16)} />
        </Flex>
      </TouchableOpacity>
    );
  };

  const form = () => {
    return (
      <View>
        <CustomDropDown
          label="Chassis type in Vehicle"
          handleChange={e => handleFormData(e, 'chassisType')}
          data={dropdownData}
          valueField="id"
          value={1}
          error={formErr?.vehicleType}
          labelColor={COLORS.greyV6}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.selectedTextStyle}
        />
        <InputField
          label="VIN"
          placeholder="Add VIN Number"
          handleChange={e => handleFormData(e, 'vinNumber')}
          value={formData?.vinNumber}
          error={formErr?.vinNumber}
          inputStyle={styles.commonInputStyle}
          placeholderTextColor={COLORS.outline}
          labelColor={COLORS.greyV6}
        />
        <ImageButton />
        <Flex gap={14}>
          <InputField
            label="Year"
            placeholder="Year"
            handleChange={e => handleFormData(e, 'year')}
            value={formData?.year}
            error={formErr?.year}
            containerSt={styles.halfInputStyle}
            inputStyle={styles.commonInputStyle}
            placeholderTextColor={COLORS.outline}
            labelColor={COLORS.greyV6}
          />
          <InputField
            label="Make"
            placeholder="Make"
            handleChange={e => handleFormData(e, 'make')}
            value={formData?.make}
            error={formErr?.make}
            containerSt={styles.halfInputStyle}
            inputStyle={styles.commonInputStyle}
            placeholderTextColor={COLORS.outline}
            labelColor={COLORS.greyV6}
          />
        </Flex>
        <Flex gap={14}>
          <InputField
            label="Model"
            placeholder="Model Number"
            handleChange={e => handleFormData(e, 'model')}
            value={formData?.model}
            error={formErr?.model}
            containerSt={styles.halfInputStyle}
            inputStyle={styles.commonInputStyle}
            placeholderTextColor={COLORS.outline}
            labelColor={COLORS.greyV6}
            mb={30}
          />
          <InputField
            label="License Plate"
            placeholder="License Plate Num.."
            handleChange={e => handleFormData(e, 'licenseNo')}
            value={formData?.licenseNo}
            error={formErr?.licenseNo}
            containerSt={styles.halfInputStyle}
            inputStyle={styles.commonInputStyle}
            placeholderTextColor={COLORS.outline}
            labelColor={COLORS.greyV6}
            mb={30}
          />
        </Flex>
      </View>
    );
  };

  const handleAddVehicle = async () => {
    if (validate()) {
      return;
    }
    setVisible(false);
    dispatch(toggleLoader(true));
    setTimeout(() => {
      dispatch(toggleLoader(false));
    }, 2000);
  };

  return (
    <View>
      <Modal visible={visible} transparent={true} animationType="fade">
        <BgBlurContainer />
        <TouchableOpacity
          style={styles.modalContainer}
          onPress={() => setVisible(false)}
          activeOpacity={1}>
          <TouchableWithoutFeedback>
            <View style={styles.centeredView}>
              <Typography textAlign="center" mB={39}>
                Add Vehicle Details
              </Typography>
              {form()}
              <View>
                <PrimaryButton
                  label="Add Vehicle"
                  mb={12}
                  onClick={handleAddVehicle}
                />
                <PrimaryButton
                  label="Cancel"
                  type="light"
                  onClick={() => setVisible(false)}
                />
              </View>
            </View>
          </TouchableWithoutFeedback>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default AddVehicleDetails;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    paddingHorizontal: sizer.moderateScale(12),
    justifyContent: 'center',
  },
  centeredView: {
    width: '100%',
    backgroundColor: COLORS.white,
    borderRadius: sizer.fontScale(8),
    elevation: 4,
    shadowColor: '#00000070',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.08,
    shadowRadius: 8,
    paddingHorizontal: sizer.moderateScale(16),
    paddingTop: sizer.moderateVerticalScale(31),
    paddingBottom: sizer.moderateVerticalScale(22),
  },
  halfInputStyle: {
    flex: 1,
  },
  commonInputStyle: {
    fontSize: sizer.fontScale(12),
    color: COLORS.outline,
  },
  imageBtn: {
    paddingVertical: sizer.moderateVerticalScale(16),
    borderRadius: 4,
    borderColor: '#D9D9D9',
    borderWidth: sizer.fontScale(1),
    marginBottom: sizer.moderateVerticalScale(18),
    backgroundColor: COLORS.white,
    elevation: 4,
    shadowColor: '#00000070',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.08,
    shadowRadius: 8,
  },
  placeholderStyle: {
    fontSize: sizer.fontScale(12),
    color: COLORS.darkV1,
    ...fontFamily.light(),
  },
  selectedTextStyle: {
    ...fontFamily.light(),
    fontSize: sizer.fontScale(12),
    color: COLORS.darkV1,
  },
});
