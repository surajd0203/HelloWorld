import { getMessaging } from '@react-native-firebase/messaging';
import showNotification from './showNotification';
import notifee, { EventType } from '@notifee/react-native';

export const setupNotificationListeners = async navigate => {
  getMessaging().onMessage(async remoteMessage => {
    // console.log('Forgorund notification', JSON.stringify(remoteMessage, null, 2));

    const imageUrl =
      remoteMessage.notification?.android?.imageUrl || 'No image';
    console.log('Extracted Image URL:', imageUrl);

    const dataPayloadId = remoteMessage.data.id;
    console.log(dataPayloadId);

    await showNotification({
      id: remoteMessage.notification?.title || 'No id',
      title: remoteMessage.notification?.title || 'No title',
      body: remoteMessage.notification?.body || 'No body',
      image: imageUrl,
      data: remoteMessage.data,
    });
  });

  notifee.onForegroundEvent(({ type, detail }) => {
    if (type === EventType.PRESS) {
      console.log('data notification press', detail.notification?.data);
      handleNavigation(detail.notification?.data, navigate);
      console.log('CALLLED');
    }
  });

  notifee.onBackgroundEvent(({ type, detail }) => {
    if (type === EventType.PRESS) {
      console.log('data notification press', detail.notification?.data);
      handleNavigation(detail.notification?.data, navigate);
      console.log('bg call');
    }
  });
};

export const checkInitialNotification = async navigate => {
  const initialNotification = await notifee.getInitialNotification();
  if (initialNotification) {
    console.log('App open by notification', initialNotification.notification);
    handleNavigation(initialNotification.notification?.data, navigate);
  }
};

const handleNavigation = (data, navigate) => {
  if (data?.id) {
    navigate('Details', { id: data.id });
  }
};

getMessaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('BG FCM', remoteMessage);

  await showNotification({
    title: remoteMessage.notification?.title,
    body: remoteMessage.notification?.body,
    image: remoteMessage.notification?.android?.imageUrl,
    data: remoteMessage.data,
  });
});
