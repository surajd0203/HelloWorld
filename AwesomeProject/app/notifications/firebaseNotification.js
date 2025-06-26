import messaging, { getMessaging } from '@react-native-firebase/messaging';
import { setupNotificationListeners } from './messageHandler';
import { createDefaultChannel } from './showNotification';
import { useEffect } from 'react';

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
};
