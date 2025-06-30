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

function App() {
  useEffect(() => {
    initNotificationServices();

    getFcmToken().then(res => {
      if (res) {
        axios
          .post('https://helloworld-1t5n.onrender.com/api/register', {
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
