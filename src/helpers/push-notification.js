import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';

async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
    getFCMToken();
  }
}

async function getFCMToken() {
  let fcmToken = await AsyncStorage.getItem('fcmtoken');
  console.log(
    '🚀 ~ file: push-notification.js:18 ~ getFCMToken ~ fcmToken:',
    fcmToken,
  );
  if (!fcmToken) {
    try {
      let fcmToken = await messaging().getToken();
      if (fcmToken) {
        console.log(
          '🚀 ~ file: push-notification.js:27 ~ getFCMToken ~ fcmToken:',
          fcmToken,
        );
        AsyncStorage.setItem('fcmtoken', fcmToken);
      }
    } catch (error) {
      console.log("🚀 ~ file: push-notification.js:33 ~ getFCMToken ~ error:", error)
    }
  }
}

function notificationListener() {
  // Assume a message-notification contains a "type" property in the data payload of the screen to open
  messaging().onNotificationOpenedApp(remoteMessage => {
    console.log(
      'Notification caused app to open from background state:',
      remoteMessage.notification,
    );
  });

  // Check whether an initial notification is available
  messaging()
    .getInitialNotification()
    .then(remoteMessage => {
      if (remoteMessage) {
        console.log(
          'Notification caused app to open from quit state:',
          remoteMessage.notification,
        );
        // setInitialRoute(remoteMessage.data.type);
      }
    });

  // Foreground state messages
  const unsubscribe = messaging().onMessage(async remoteMessage => {
    console.log('A new FCM message arrived!', JSON.stringify(remoteMessage));
  });

  return unsubscribe;
}

// Background & Quit state messages
function backgroundMessageHandler() {
  messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Message handled in the background!', remoteMessage);
  });
}

export {requestUserPermission, notificationListener, backgroundMessageHandler};
