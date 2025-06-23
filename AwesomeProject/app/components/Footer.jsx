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
    // backgroundColor: "#ebebeb"
  },

  heading: {
    color: '#4a4a4a',
    fontSize: 20,
    fontWeight: '700',
  },
});

export default Footer;
