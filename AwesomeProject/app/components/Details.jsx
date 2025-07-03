import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useSelector } from 'react-redux';

const Details = ({ route, navigation }) => {
  const { selectedCard } = route.params;
  console.log('ROUTE PARAMS:', route.params);

  const id  = route.params;
  const userList = useSelector(state => state.user.list);
  
  const data = userList.find(item => item.id == id);

  const cardData = selectedCard || data;

  return (
    <View>
      <View>
        <View style={styles.card}>
          <View style={styles.head}>
            <Pressable
              style={styles.closeBtn}
              onPress={() => navigation.goBack()}
            >
              <Ionicons name="arrow-back" style={styles.closeIcon} />
            </Pressable>
            <View style={styles.textHeader}>
              <FontAwesome name="user" size={35} color="#007AFF" />
              <Text style={styles.userTitle}>User Details</Text>
            </View>
          </View>
          {cardData ? (
            <>
              <Text style={styles.textProp}>
                Unique ID :{' '}
                <Text style={styles.textBody}>{cardData.id} </Text>
              </Text>
              <Text style={styles.textProp}>
                User ID :{' '}
                <Text style={styles.textBody}> {cardData.userId} </Text>
              </Text>
              <Text style={styles.textProp}>
                Title :{' '}
                <Text style={styles.textBody}> {cardData.title} </Text>{' '}
              </Text>
              <Text style={styles.textProp}>
                Body :{' '}
                <Text style={styles.textBody}> {cardData.body} </Text>{' '}
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
    height: '100%',
  },

  textProp: {
    fontSize: 20,
    padding: 10,
    paddingLeft: 20,
    color: '#4a4a4a',
    marginBottom: 10,
    lineHeight: 25,
    fontWeight: 500,
    backgroundColor: '#E3E3E3',
    borderRadius: 10,
    elevation: 5,
    borderLeftColor: '#007AFF',
    borderLeftWidth: 6,
  },

  textBody: {
    fontWeight: 400,
  },

  closeBtn: {
    // padding: 8,
    // borderRadius: 10,
    // backgroundColor: '#f0f0f0',
  },

  head: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 20,
    paddingBottom: 15,
    gap : 20,
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
    gap: 10,
    alignItems: 'center',
  },
});

export default Details;
