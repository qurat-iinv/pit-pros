import {StyleSheet} from 'react-native';
import React from 'react';

import PrimaryButton from './primary-button';
import {GoogleBtnSvg} from '../../assets';
import {COLORS} from '../../globals';

import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

const GoogleButton = props => {
  const handleGoogleSignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      await GoogleSignin.signOut();
      const userInfo = await GoogleSignin.signIn();
      const userToken = await GoogleSignin.getTokens();
      // console.log(format(userInfo));
      // console.log('userToken:', userToken?.accessToken);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        console.log(statusCodes.SIGN_IN_CANCELLED);
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
        console.log(statusCodes.IN_PROGRESS);
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
        console.log(statusCodes.PLAY_SERVICES_NOT_AVAILABLE);
      } else {
        // some other error happened
        console.log(error, 'error');
      }
    }
  };
  return (
    <PrimaryButton
      textStyle={styles.googleBtnText}
      btnStyle={styles.googleBtn}
      icon={<GoogleBtnSvg />}
      iconGap={15}
      onClick={handleGoogleSignIn}
      {...props}
    />
  );
};

export default GoogleButton;

const styles = StyleSheet.create({
  googleBtnText: {
    textTransform: 'none',
    color: '#0000008A',
  },
  googleBtn: {backgroundColor: COLORS.white, elevation: 4},
});
