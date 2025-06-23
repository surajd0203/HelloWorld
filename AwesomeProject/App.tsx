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

function App() {
  return (
    <View style={{ flex: 1, backgroundColor : "white" }}>
      <Header />
      <View style={{ flex: 1 }}>
        <List />
      </View>
      <Footer />
    </View>
  );
}

export default App;
