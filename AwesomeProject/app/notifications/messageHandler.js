import { getMessaging } from '@react-native-firebase/messaging';
import showNotification from './showNotification';

export const setupNotificationListeners = async () => {
  getMessaging().onMessage(async remoteMessage => {
    // console.log('Forgorund notification', JSON.stringify(remoteMessage, null, 2));

    const imageUrl = remoteMessage.notification?.android?.imageUrl || 'No image';
    console.log('Extracted Image URL:', imageUrl);

    await showNotification({
      title: remoteMessage.notification?.title || 'No title',
      body: remoteMessage.notification?.body || 'No body',
      image: imageUrl,
    });
  });
};
