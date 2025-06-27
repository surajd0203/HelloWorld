import messaging, { getMessaging } from '@react-native-firebase/messaging';
import analytics from '@react-native-firebase/analytics';
import { setupNotificationListeners } from './messageHandler';
import { createDefaultChannel } from './showNotification';

export const requestUserPermission = async () => {
  const authStatus = await getMessaging().requestPermission();

  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status : ', authStatus);
  }
};

export const getFcmToken = async () => {
  try {
    const fcmToken = await getMessaging().getToken();

    if (fcmToken) {
      console.log('FCM Token : ' + fcmToken);
      return fcmToken;
    } else {
      console.log('Failed to get fcm token');
    }
  } catch (error) {
    console.error('Error fetching FCM Token :', error);
  }
};

export const getFirebaseDeviceId = async () => {
  try {
    const appInstanceId = await analytics().getAppInstanceId();
    console.log('Firebase app instance id :', appInstanceId);
    return appInstanceId;
  } catch (error) {
    console.error('Error getting firebase device id : ', error);
    return null;
  }
};

export const initNotificationServices = async () => {
  await requestUserPermission();
  await createDefaultChannel();
  await setupNotificationListeners();
  await getFirebaseDeviceId();
};
