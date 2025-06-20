import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.Footer}>
      <Text style={styles.heading}>Back</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Footer: {
    padding: 25,
  },

  heading: {
    color: '#c6c3e3',
    fontSize: 20,
    fontWeight: '700',
    fontFamily: 'monospace',
  },
});

export default Footer;
