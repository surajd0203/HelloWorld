import { getMessaging } from '@react-native-firebase/messaging';
import showNotification from './showNotification';

export const setupNotificationListeners = async () => {
  getMessaging().onMessage(async remoteMessage => {
    console.log('Forgorund notification', remoteMessage);

    await showNotification({
        title : remoteMessage.notification?.title || "No title",
        body : remoteMessage.notification?.body || "No body"
    })
  });
};
