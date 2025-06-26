import { View } from 'react-native';
import List from './app/components/List';
import Header from './app/components/Header';
import Footer from './app/components/Footer';
import { useEffect } from 'react';
import { initNotificationServices } from './app/notifications/firebaseNotification';

function App() {
  useEffect(() => {
    initNotificationServices();

    const getToken = async () => {
      const token = await messaging().getToken();
      console.log('FCM Token:', token);
      await fetch('http://10.10.10.45/register', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ token }),
      });
    };

    getToken();
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
