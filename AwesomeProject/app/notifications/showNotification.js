import notifee, { AndroidImportance } from '@notifee/react-native';

export const createDefaultChannel = async () => {
  return await notifee.createChannel({
    id: 'default',
    name: 'Default Channel',
    importance : AndroidImportance.HIGH
  });
};

const showNotification = async ({title, body}) => {

    const channelId = await createDefaultChannel();

    await notifee.displayNotification({
      title: title || 'New Notification',
      body: body || 'Notification Body',
      android: {
        channelId,
      },
    });
}

export default showNotification;




