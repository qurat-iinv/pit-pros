import {StyleSheet, View, Modal, TouchableOpacity} from 'react-native';
import React from 'react';

import {COLORS} from '../../globals';
import sizer from '../../helpers/sizer';
import {PrimaryButton} from '../';
import {BgBlurContainer, Flex, Typography} from '../../atom-components';
import {
  ArrowReceiptSvg,
  PaymentFailedSvg,
  PaymentSuccessSvg,
} from '../../assets';

const Divider = () => <View style={styles.divider}></View>;

const PaymentModal = ({visible, setVisible, error = false}) => {
  const handleModal = () => {
    console.log('click');
  };
  return (
    <Modal transparent={true} visible={visible} onRequestClose={handleModal}>
      <BgBlurContainer />
      <View style={styles.modalContainer}>
        <View style={styles.centeredView}>
          <View style={styles.header}>
            {error ? (
              <PaymentFailedSvg
                width={sizer.fontScale(56)}
                height={sizer.fontScale(56)}
              />
            ) : (
              <PaymentSuccessSvg
                width={sizer.fontScale(56)}
                height={sizer.fontScale(56)}
              />
            )}
            <Typography
              size={18}
              bold
              color={error ? COLORS.primary : '#121212'}
              mT={16}>
              {error ? 'Payment Failed' : 'Payment Success!'}
            </Typography>
          </View>
          <Flex jusContent="space-between" algItems="center" mb={12}>
            <Typography size={14} color="#707070">
              References Number
            </Typography>
            <Typography size={12} color={COLORS.darkV3}>
              1FMJK1JT8FEF48431
            </Typography>
          </Flex>
          <Flex jusContent="space-between" algItems="center" mb={12}>
            <Typography size={14} color="#707070">
              Date
            </Typography>
            <Typography size={12} color={COLORS.darkV3}>
              Oct 31, 2023
            </Typography>
          </Flex>
          <Flex jusContent="space-between" algItems="center" mb={12}>
            <Typography size={14} color="#707070">
              Time
            </Typography>
            <Typography size={12} color={COLORS.darkV3}>
              08:30 AM
            </Typography>
          </Flex>
          <Flex jusContent="space-between" algItems="center" mb={16}>
            <Typography size={14} color="#707070">
              Payment Method
            </Typography>
            <Typography size={12} color={COLORS.darkV3}>
              Paypal
            </Typography>
          </Flex>
          <Divider />
          <Flex jusContent="space-between" algItems="center" mt={16} mb={16}>
            <Typography size={14} color="#707070">
              Amount
            </Typography>
            <Typography size={12} color={COLORS.darkV3}>
              50$
            </Typography>
          </Flex>
          <Divider />
          <PrimaryButton
            label={error ? 'Try Again' : 'Get PDF Receipt'}
            {...(!error
              ? {type: 'light', btnStyle: styles.btnLightBorder}
              : {type: 'primary'})}
            mt={33}
            mb={14}
            icon={
              !error ? (
                <ArrowReceiptSvg
                  width={sizer.fontScale(24)}
                  height={sizer.fontScale(24)}
                />
              ) : null
            }
          />
          <PrimaryButton
            label="Back to Home"
            {...(error
              ? {type: 'light', btnStyle: styles.btnLightBorder}
              : {type: 'primary'})}
          />
        </View>
      </View>
    </Modal>
  );
};

export default PaymentModal;

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
    paddingVertical: sizer.moderateVerticalScale(35),
    elevation: 4,
    shadowColor: '#00000070',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.08,
    shadowRadius: 8,
  },
  header: {
    alignItems: 'center',
    marginBottom: sizer.moderateVerticalScale(33),
  },
  divider: {
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#DCDEE0',
  },
  btnLightBorder: {borderColor: '#DEDEDE', borderWidth: 1},
});
