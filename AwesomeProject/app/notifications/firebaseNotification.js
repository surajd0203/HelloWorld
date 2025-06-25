import messaging from '@react-native-firebase/messaging';
import { setupNotificationListeners } from './messageHandler';
import { createDefaultChannel } from './showNotification';

export const requestUserPermission = async () => {
  const authStatus = await messaging().requestPermission();

  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status : ', authStatus);
  }
};

export const getFcmToken = async () => {
  try {
    const fcmToken = await messaging().getToken();

    if (fcmToken) {
      console.log('FCM Token : ' + fcmToken);
    } else {
      console.log('Failed to get fcm token');
    }
  } catch (error) {
    console.error('Error fetching FCM Token :', error);
  }
};

export const initNotificationServices = async () => {
  await requestUserPermission();
  await getFcmToken();
  await createDefaultChannel();
  await setupNotificationListeners();
}
