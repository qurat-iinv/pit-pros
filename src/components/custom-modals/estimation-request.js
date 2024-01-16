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
import {BackButton, PrimaryButton} from '../';
import {BgBlurContainer, Typography} from '../../atom-components';

import {ScrollView} from 'react-native-gesture-handler';

const EstimationRequestModal = ({visible, setVisible}) => {
  const handleModal = () => {
    setVisible('estimationRequest', false);
  };

  const handleReject = () => {
    setVisible('estimationRequest', false);
    setVisible('estimationReject', true);
  };

  return (
    <Modal transparent={true} visible={visible} onRequestClose={handleModal}>
      <BgBlurContainer />
      <View style={styles.modalContainer}>
        <TouchableOpacity style={styles.backBtn} onPress={handleModal}>
          <BackButton disabled={true}/>
        </TouchableOpacity>
        <View style={styles.centeredView}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingVertical: sizer.moderateVerticalScale(25),
            }}>
            <Typography size={18} medium mB={34} textAlign="center">
              Estimation Request
            </Typography>
            <Typography
              size={15}
              medium
              color={COLORS.outline}
              mB={28}
              style={{lineHeight: 28}}>
              <Typography size={15} medium>
                Lex Murphy
              </Typography>{' '}
              Has Sent You Estimate Request For Your{' '}
              <Typography size={15} medium>
                Car Oil Change.
              </Typography>
            </Typography>
            <View style={{alignSelf: 'flex-start'}}>
              <Typography size={14} medium mB={8}>
                Price
              </Typography>
              <Typography size={15} color={COLORS.outline} mB={18}>
                50$
              </Typography>
              <Typography size={14} medium mB={8}>
                Time
              </Typography>
              <Typography size={15} color={COLORS.outline} mB={28}>
                3 Hours
              </Typography>
              <Typography
                size={12}
                light
                capitalize
                mB={38}
                color={COLORS.outline}
                style={{lineHeight: 24}}
                textAlign="center">
                We take pride in offering all of our services at flat,
                discounted rates, providing you with exceptional value from the
                outset. Our commitment to transparency and affordability means
                that our pricing is consistently competitive, and as a result,
                we do not offer further discounts beyond our already reduced
                rates. Rest assured, our dedication to providing quality service
                at a fair and accessible cost remains unwavering.
              </Typography>
              <View style={{paddingHorizontal: sizer.moderateScale(11)}}>
                <PrimaryButton label="Approve Estimation" mb={12} />
                <PrimaryButton
                  label="Reject Estimation"
                  type="light"
                  btnStyle={styles.rejectBtn}
                  onClick={handleReject}
                />
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

export default EstimationRequestModal;

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
