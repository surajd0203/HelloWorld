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
    backgroundColor : "#f7f7f7",
    borderBottomWidth : 2
  },

  heading: {
    color: '#4a4a4a',
    fontSize: 20,
    fontWeight: '700',
    fontFamily: 'monospace',
  },
});

export default Header;
