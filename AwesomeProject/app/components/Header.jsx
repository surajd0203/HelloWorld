import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.heading}>User Data</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 25,
    textAlign: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#4a4a4a',
  },

  heading: {
    color: '#4a4a4a',
    fontSize: 20,
    fontWeight: '700',
  },
});

export default Header;
