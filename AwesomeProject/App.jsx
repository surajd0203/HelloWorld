/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { View } from 'react-native';
import List from './app/components/List';
import Header from './app/components/Header';
import Footer from './app/components/Footer';
import messaging from '@react-native-firebase/messaging';
import { useEffect } from 'react';

function App() {
  
  useEffect(() => {
    requestUserPermission();
    getFcmToken();
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <Header />
      <View style={{ flex: 1 }}>
        <List />
      </View>
      <Footer />
    </View>
  );
}

async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();

  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status : ', authStatus);
  }
}

const getFcmToken = async () => {
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

export default App;
