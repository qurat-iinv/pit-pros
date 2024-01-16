import React from 'react';
import {StyleSheet} from 'react-native';

import fontFamily from '../../helpers/font-family';
import PrimaryButton from './primary-button';
import {FacebookBtnSvg} from '../../assets';

import {
  LoginManager,
  AccessToken,
  // Profile,
  // UserData,
  GraphRequestManager,
  GraphRequest,
} from 'react-native-fbsdk-next';

const FacebookButton = props => {
  async function handleFacebookLogin() {
    // LoginManager.setLoginBehavior('WEB_ONLY');
    LoginManager.logOut();
    LoginManager.logInWithPermissions(['public_profile', 'email']).then(
      function (result) {
        if (result.isCancelled) {
          console.log('==> Login cancelled');
        } else {
          AccessToken.getCurrentAccessToken().then(data => {
            let accessToken = data?.accessToken;
            const responseInfoCallback = (error, result) => {
              if (error) {
                console.log(error);
              } else {
                let data = {
                  type: 'facebook',
                  first_name: result?.first_name,
                  last_name: result?.last_name,
                  email: result?.email,
                  token: accessToken,
                };
                console.log(data);
              }
            };

            const infoRequest = new GraphRequest(
              '/me',
              {
                accessToken: accessToken,
                parameters: {
                  fields: {
                    string: 'email,name,first_name,middle_name,last_name',
                  },
                },
              },
              responseInfoCallback,
            );
            // Start the graph request.
            new GraphRequestManager().addRequest(infoRequest).start();
          });
        }
      },
      function (error) {
        console.log('==> Login fail with error: ' + error);
      },
    );
  }
  return (
    <PrimaryButton
      textStyle={styles.facebookBtnText}
      btnStyle={{backgroundColor: '#1877F2'}}
      icon={<FacebookBtnSvg />}
      iconGap={15}
      onClick={handleFacebookLogin}
      {...props}
    />
  );
};

export default FacebookButton;

const styles = StyleSheet.create({
  facebookBtnText: {textTransform: 'none', ...fontFamily.bold()},
});
