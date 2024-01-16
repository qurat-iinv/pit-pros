import AsyncStorage from '@react-native-async-storage/async-storage';
import {createSlice} from '@reduxjs/toolkit';

export const myReducer = createSlice({
  name: 'storeReducer',
  initialState: {
    isLogged: true,
    user: null,
    showLoader: false,
    toast: {
      open: false,
      message: '',
      type: '',
    },
  },
  reducers: {
    setUser: (state, {payload}) => {
      state.isLogged = true;
      state.user = payload;
    },
    logOut: state => {
      state.isLogged = false;
      state.user = null;
      // AsyncStorage.removeItem('access_token');
      // AsyncStorage.removeItem('email_address');
    },
    login: (state, {payload}) => {
      state.isLogged = true;
      // state.user = payload;
      // payload?.token && AsyncStorage.setItem('access_token', payload?.token);
      // AsyncStorage.setItem('email_address', payload?.data?.email);
    },
    toggleLoader: (state, {payload}) => {
      state.showLoader = payload;
    },
    openToast: (state, {payload}) => {
      state.toast = {
        open: true,
        message: payload.message,
        type: payload.type,
      };
    },
    closeToast: state => {
      state.toast = {
        open: false,
        message: null,
        type: '',
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setUser,
  logOut,
  toggleLoader,
  openToast,
  closeToast,
  login,
  statusBarColor,
} = myReducer.actions;
export default myReducer.reducer;
