import { View } from 'react-native';
import List from './app/components/List';
import Header from './app/components/Header';
import Footer from './app/components/Footer';
import { useEffect } from 'react';
import {
  getFcmToken,
  initNotificationServices,
} from './app/notifications/firebaseNotification';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

function App() {
  useEffect(() => {
    initNotificationServices();

    getFcmToken().then(async res => {
      if (res) {
        const alreadyRegistered = await AsyncStorage.getItem('fcm_registered');

        if (!alreadyRegistered) {
          axios
            .post('http://10.10.10.45:8080/api/register', {
              token: res,
            })
            .then(res => {
              console.log('Succesfully registerd token', res.data);
            })
            .catch(error => {
              console.error('Axios error registering token:', error.message);
              if (error.response) {
                console.log('Server responded with:', error.response.data);
              }
            });

          console.log('res :', res);
        } else {
          console.log('Token already registered !');
        }
      }
    });
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

export default App;
