import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {baseUrl} from './globals';

async function ApiManager(method = '', path = '', params = {}, headerOpt = {}) {
  let header;
  const token = await AsyncStorage.getItem('access_token');
  if (token) {
    header = {
      headers: {
        Authorization: token,
        ...headerOpt,
      },
    };
  } else {
    header = {
      headers: {
        'Content-Type': 'application/json',
        ...headerOpt,
      },
    };
  }

  return new Promise(function (myResolve, myReject) {
    if (method === 'post' || method === 'put') {
      axios[method](baseUrl + path, params, header)
        .then(response => {
          return myResolve(response);
        })
        .catch(err => {
          console.log('🚀 ~ file: api-manager.js:33 ~ err:', err);
          return myReject(err);
        });
    } else {
      axios[method](baseUrl + path, header)
        .then(response => {
          return myResolve(response);
        })
        .catch(err => {
          return myReject(err);
        });
    }
  });
}

export default ApiManager;
