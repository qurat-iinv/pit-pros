import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

import LogStack from './log-stack';
import AppStack from './app-stack';

import {COLORS} from '../globals';
import {closeToast, logOut, login, openToast} from '../store/reducer';
// import {MyLoader} from '../atom-components';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import format from 'pretty-format';
// import {CustomToast, Loader} from '../components';
// import ApiManager from '../api-manager';
// import SplashScreen from 'react-native-splash-screen';

function RootNavigation() {
  const {toast, isLogged, showLoader} = useSelector(
    state => state.storeReducer,
  );
  const dispatch = useDispatch();
  // const [isLoading, setIsLoading] = useState(true);

  //   const validateToken = async () => {
  //     const access_token = await AsyncStorage.getItem('access_token');
  //     if (access_token) {
  //       setIsLoading(true);
  //       try {
  //         let {data} = await ApiManager('get', 'user/me', access_token);
  //         moment.tz.setDefault(data.response.timezone);
  //         data.response.token = access_token;
  //         dispatch(login(data?.response));
  //       } catch (error) {
  //         if (error?.response?.status === 401) {
  //           dispatch(logOut());
  //           SplashScreen.hide();
  //         }
  //       } finally {
  //         setIsLoading(false);
  //         SplashScreen.hide();
  //       }
  //     } else {
  //       dispatch(logOut());
  //       SplashScreen.hide();
  //       setIsLoading(false);
  //     }
  //   };
  //
  //   const requestLocationPermission = async () => {
  //     let permission = 'denied';
  //     if (Platform.OS === 'ios') {
  //       permission = await Geolocation.requestAuthorization('always');
  //     } else {
  //       permission = await PermissionsAndroid.request(
  //         PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  //       );
  //     }
  //
  //     if (permission !== 'granted') {
  //       dispatch(
  //         openToast({type: 'info', message: 'Location permission is required'}),
  //       );
  //     }
  //   };

  useEffect(() => {
    // SplashScreen.hide();
    // validateToken();
    // requestLocationPermission();
  }, []);

  return (
    <>
      <StatusBar backgroundColor={COLORS.white} barStyle={'dark-content'} />
      <SafeAreaView style={{flex: 1, backgroundColor: COLORS.primary,}}>
        <NavigationContainer>
          {isLogged ? <AppStack /> : <LogStack />}
        </NavigationContainer>
        {/* {showLoader && <Loader />} */}
        {toast.open ? (
          <CustomToast toast={toast} close={() => dispatch(closeToast())} />
        ) : null}
      </SafeAreaView>
    </>
  );
}

export default RootNavigation;
