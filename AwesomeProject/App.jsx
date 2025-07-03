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
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Details from './app/components/Details';
import { store } from './app/store';
import { Provider } from 'react-redux';

function HomeScreen() {
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

function App() {
  const Stack = createNativeStackNavigator();
  const navigationRef = useNavigationContainerRef();

  useEffect(() => {
    initNotificationServices((screen, params) => {
      navigationRef.navigate(screen, params.id);
      // console.log("app id", screen, params.id);
    });

    getFcmToken().then(async res => {
      if (res) {
        const alreadyRegistered = await AsyncStorage.getItem('fcm_registered');

        if (!alreadyRegistered) {
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
        } else {
          console.log('Token already registered !');
        }
      }
    });
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Details"
            component={Details}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
