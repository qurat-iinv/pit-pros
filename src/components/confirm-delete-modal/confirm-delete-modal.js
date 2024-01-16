import React, {useState} from 'react';
import {View, StyleSheet, KeyboardAvoidingView} from 'react-native';
import sizer from '../../helpers/sizer';
import {Flex, MyLoader, Typography} from '../../atom-components';
import {COLORS} from '../../globals';
import ApiManager from '../../api-manager';
import {logOut, openToast} from '../../store/reducer';
import {useDispatch} from 'react-redux';
import PrimaryButton from '../custom-buttons/primary-button';
import CustomModal from '../modal-wrapper/modal-wrapper';

export default function ConfirmDeleteModal({visible = false, setVisible}) {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState();

  const DeleteAcc = async () => {
    setVisible(false);
    setIsLoading(true);
    try {
      let {data} = await ApiManager('delete', 'user/delete');
      dispatch(openToast({type: 'success', message: data?.message}));
      dispatch(logOut());
    } catch (error) {
      console.log(
        '🚀 ~ file: confirm-delete-modal.js:28 ~ DeleteAcc ~ error:',
        error,
      );
      dispatch(openToast({message: error?.response?.data?.message}));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading ? <MyLoader /> : null}
      <KeyboardAvoidingView>
        <CustomModal visible={visible}>
          <View style={styles.center}>
            <View style={styles.wrapper}>
              <Typography size={20} medium>
                Deactivate Account!
              </Typography>
              <Typography
                textAlign="center"
                color="#484848"
                mT={38}
                mB={48}
                light>
                Are you sure you want to deactivate your account?
              </Typography>
              <Flex gap={8}>
                <View style={{flex: 0.5}}>
                  <PrimaryButton
                    label={'Cancel'}
                    type="secondary"
                    onClick={() => setVisible(false)}
                  />
                </View>
                <View style={{flex: 0.5}}>
                  <PrimaryButton
                    label={'Yes! deactivate'}
                    onClick={() => DeleteAcc()}
                  />
                </View>
              </Flex>
            </View>
          </View>
        </CustomModal>
      </KeyboardAvoidingView>
    </>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: sizer.moderateVerticalScale(38),
    paddingHorizontal: sizer.moderateScale(23),
    width: '90%',
    borderWidth: 1,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    borderRadius: 9,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.58)',
  },
});
