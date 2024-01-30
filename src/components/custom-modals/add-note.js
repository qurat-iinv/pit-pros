import {
  StyleSheet,
  View,
  Modal,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React from 'react';

import {COLORS} from '../../globals';
import sizer from '../../helpers/sizer';
import {BackButton, PrimaryButton} from '../';
import {BgBlurContainer, Typography} from '../../atom-components';

import {ScrollView} from 'react-native-gesture-handler';
import {RenderInputField} from '../../screens/services/utils';
import Icon from 'react-native-vector-icons/FontAwesome6';
import Acha from 'react-native-vector-icons/Entypo';

const AddNoteModal = ({visible, setVisible}) => {
  const handleModal = () => {
    setVisible('estimationRequest', false);
  };

  const handleReject = () => {
    setVisible('estimationRequest', false);
    setVisible('estimationReject', true);
  };

  const NoteImage = () => {
    return (
      <ImageBackground
        source={require('../../assets/images/dummy-images/4.png')}
        style={{width: 56, height: 61, borderRadius: 4}}>
        <View
          style={{
            width: 10,
            height: 10,
            backgroundColor: '#DC0028',
            borderRadius: 50,
            position: 'absolute',
            top: -4,
            left: 48,
          }}>
          <Acha name="cross" size={sizer.fontScale(10)} color="white" />
        </View>
      </ImageBackground>
    );
  };

  return (
    <Modal transparent={true} visible={visible} onRequestClose={handleModal}>
      <BgBlurContainer />
      <View style={styles.modalContainer}>
        <TouchableOpacity style={styles.backBtn} onPress={handleModal}>
          <BackButton disabled={true} />
        </TouchableOpacity>
        <View style={styles.centeredView}>
          <ScrollView
            contentContainerStyle={{
              paddingTop: sizer.moderateVerticalScale(25),
              paddingBottom: sizer.moderateVerticalScale(36),
            }}>
            <Typography size={18} medium mB={24} textAlign="center">
              Add a Note
            </Typography>
            {/* <View style={{alignSelf: 'flex-start'}}>
              <Typography size={14} medium mB={8}>
                Proposed By
              </Typography>
              <Typography size={15} color={COLORS.outline} mB={18}>
                Nathan
              </Typography>
              <Typography size={14} medium mB={8}>
                Unit
              </Typography>
              <Typography size={15} color={COLORS.outline} mB={18}>
                Mazda RX
              </Typography>
              <Typography size={14} medium mB={8}>
                Price
              </Typography>
              <Typography size={15} color={COLORS.outline} mB={18}>
                50$
              </Typography>
              <Typography size={14} medium mB={8}>
                Title
              </Typography>
              <Typography size={15} color={COLORS.outline} mB={18}>
                For Additional Oil Change
              </Typography>
              <Typography size={14} medium mB={8}>
                Message
              </Typography>
              <Typography
                size={12}
                light
                capitalize
                mB={22}
                color={COLORS.outline}
                style={{lineHeight: 24}}>
                We take pride in offering all of our services at flat,
                discounted rates, providing you with exceptional value from the
                outset. Our commitment to transparency and affordability means
                that our pricing is consistently competitive, and as a result,
                we do not offer further discounts beyond our already reduced
                rates. Rest assured, our dedication to providing quality service
                at a fair and accessible cost remains unwavering.
              </Typography>
              <View style={{paddingHorizontal: sizer.moderateScale(11)}}>
                <PrimaryButton label="Approve Proposal" mb={12} />
                <PrimaryButton
                  label="Reject Proposal"
                  type="light"
                  btnStyle={styles.rejectBtn}
                  onClick={handleReject}
                />
              </View>
            </View> */}

            <RenderInputField label="Note" placeholder="Note" multiline />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                gap: 8,
                marginBottom: 24,
              }}>
              <NoteImage />
              <NoteImage />
              <NoteImage />
              <NoteImage />

              <View
                style={{
                  backgroundColor: 'white',
                  borderColor: '#79747E',
                  borderWidth: 2,
                  borderStyle: 'dashed',
                  width: 56,
                  height: 61,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Icon name="plus" size={sizer.fontScale(15)} color="#79747E" />
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',

                justifyContent: 'space-between',
              }}>
              <Typography size={12}>Visible to Customer</Typography>
              <Icon
                name="toggle-on"
                size={sizer.fontScale(28)}
                color="#DC0028"
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',

                justifyContent: 'space-between',
              }}>
              <PrimaryButton
                label="Yes! Delete"
                btnStyle={{
                  width: '60%',
                  marginBottom: -40,
                  marginHorizontal: -24,
                  backgroundColor: 'white',
                }}
                textStyle={{color: '#DC0028'}}
              />
              <PrimaryButton
                label="Cancel"
                btnStyle={{
                  width: '60%',
                  marginBottom: -40,
                  marginHorizontal: -24,
                  backgroundColor: 'white',
                }}
                textStyle={{color: 'black'}}
              />
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

export default AddNoteModal;

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
});
