import { View } from 'react-native';
import List from './app/components/List';
import Header from './app/components/Header';
import Footer from './app/components/Footer';
import { useEffect } from 'react';
import { initNotificationServices } from './app/notifications/firebaseNotification';

function App() {
  useEffect(() => {
    initNotificationServices();
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
