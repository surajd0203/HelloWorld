import notifee, {
  AndroidImportance,
  AndroidStyle,
} from '@notifee/react-native';

export const createDefaultChannel = async () => {
  return await notifee.createChannel({
    id: 'default',
    name: 'Default Channel',
    importance: AndroidImportance.HIGH,
  });
};

const showNotification = async ({ title, body, image, data }) => {
  const channelId = await createDefaultChannel();

  await notifee.displayNotification({
    title: title || 'New Notification',
    body: body || 'Notification Body',
    data: data,
    android: {
      channelId,
      style: { type: AndroidStyle.BIGPICTURE, picture: image },
      smallIcon: 'ic_notification',
    },
  });
};

export default showNotification;
