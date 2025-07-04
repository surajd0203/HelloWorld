import messaging from "@react-native-firebase/messaging";
import notifee, { EventType } from "@notifee/react-native";
import showNotification from "./showNotification";

// Setup all notification listeners
export const setupNotificationListeners = (navigate) => {
  // Foreground FCM listener
  messaging().onMessage(async (remoteMessage) => {
    console.log("📲 Foreground FCM:", remoteMessage);

    await showNotification({
      title: remoteMessage.notification?.title,
      body: remoteMessage.notification?.body,
      image: remoteMessage.notification?.android?.imageUrl,
      data: remoteMessage.data,
    });
  });

  // Foreground tap
  notifee.onForegroundEvent(({ type, detail }) => {
    if (type === EventType.PRESS) {
      console.log("🔔 Foreground tap:", detail.notification?.data);
      handleNavigation(detail.notification?.data, navigate);
    }
  });

  // Background tap (app in memory)
  notifee.onBackgroundEvent(({ type, detail }) => {
    if (type === EventType.PRESS) {
      console.log("🔔 Background tap:", detail.notification?.data);
      handleNavigation(detail.notification?.data, navigate);
    }
  });
};

// ////////////////////////////////////
// Handle taps after cold start
export const checkInitialNotification = async (navigate) => {
  const initialNotification = await notifee.getInitialNotification();
  if (initialNotification) {
    console.log(
      "🚀 App opened by notification:",
      initialNotification.notification?.data
    );
    handleNavigation(initialNotification.notification?.data, navigate);
  }
};

// Navigation helper
const handleNavigation = (data, navigate) => {
  if (data?.id) {
    navigate("Details", { id: data.id });
  }
};

// FCM background handler (app closed / quit)
messaging().setBackgroundMessageHandler(async (remoteMessage) => {
  console.log("📥 [Background FCM]:", remoteMessage);

  await showNotification({
    title: remoteMessage.notification?.title,
    body: remoteMessage.notification?.body,
    image: remoteMessage.notification?.android?.imageUrl,
    data: remoteMessage.data,
  });
});
