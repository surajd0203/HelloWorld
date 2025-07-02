import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Details = ({ route, navigation }) => {
  const { selectedCard } = route.params;
  console.log('ROUTE PARAMS:', route.params);

  return (
    <View>
      <View>
        <View style={styles.card}>
          <Pressable style={styles.closeBtn}>
            <Icon name="close-circle" style={styles.closeIcon} />
          </Pressable>
          <View style={styles.textHeader}>
            <FontAwesome name="user" size={35} color="#007AFF" />
            <Text style={styles.userTitle}>User Details</Text>
          </View>

          {selectedCard ? (
            <>
              <Text style={styles.textProp}>
                Unique ID :{' '}
                <Text style={styles.textBody}>{selectedCard.id} </Text>
              </Text>
              <Text style={styles.textProp}>
                User ID :{' '}
                <Text style={styles.textBody}> {selectedCard.userId} </Text>
              </Text>
              <Text style={styles.textProp}>
                Title :{' '}
                <Text style={styles.textBody}> {selectedCard.title} </Text>{' '}
              </Text>
              <Text style={styles.textProp}>
                Body :{' '}
                <Text style={styles.textBody}> {selectedCard.body} </Text>{' '}
              </Text>
            </>
          ) : (
            <Text>Lading....</Text>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: '8%',
    width: '100%',
    marginHorizontal: 'auto',
    border: 4,
    backgroundColor: 'white',
    height : "100%"
  },

  textProp: {
    fontSize: 20,
    padding : 10,
    paddingLeft : 20,
    color: '#4a4a4a',
    marginBottom: 10,
    lineHeight: 25,
    fontWeight: 500,
    backgroundColor : "#E3E3E3",
    borderRadius : 10,
    elevation : 5,
    borderLeftColor : "#007AFF",
    borderLeftWidth : 6
  },

  textBody: {
    fontWeight: 400,
  },

  closeBtn: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
  },

  closeIcon: {
    color: '#ba1010',
    fontSize: 22,
  },

  userTitle: {
    color: '#545657',
    fontSize: 25,
    fontWeight: 'bold',
  },

  textHeader: {
    flexDirection: 'row',
    gap: 15,
    alignItems: 'center',
    marginBottom: 50,
  },
});

export default Details;
