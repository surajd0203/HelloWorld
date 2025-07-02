import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  Text,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import ModalCard from './ModalCard';
import Icon from 'react-native-vector-icons/FontAwesome';
import showNotification from '../notifications/showNotification';
import { useNavigation } from '@react-navigation/native';

const borderColors = ['#f7713c', '#3c3ff7', '#2EEB5E', '#FCE525', '#615a5a'];

const List = () => {
  const [data, setData] = useState([]);
  const [visibleDataCount, setVisibleDataCount] = useState(10);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [refreshing, setRefreshing] = useState(false);

  // const Stack = createNativeStackNavigator();
  const navigation = useNavigation();

  console.log('List display');

  const getData = async () => {
    try {
      const response = await fetch(
        // 'https://jsonplaceholder.typicode.com/posts',
        'https://helloworld-1t5n.onrender.com/api/users',
      );
      // console.log(response);
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const onRefresh = () => {
    setRefreshing(true);

    getData();

    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  };

  const handleShowMoreBtn = () => {
    setVisibleDataCount(prev => prev + 10);
  };

  const handleCard = item => {
    // setModalVisible(true);
    // setSelectedCard(item);

    navigation.navigate('Details', { selectedCard: item });
  };

  return (
    <View style={styles.body}>
      <FlatList

        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}

        data={data.slice(0, visibleDataCount)}
        keyExtractor={item => item.id.toString()}
        onEndReached={handleShowMoreBtn}
        renderItem={({ item, index }) => {
          const borderColor = borderColors[index % borderColors.length];

          return (
            <View style={[styles.card, { borderLeftColor: borderColor }]}>
              <View
                style={{ flexDirection: 'row', gap: 20, alignItems: 'center' }}
              >
                <Icon name="user" size={35} color="#007AFF" />
                <View style={{ flex: 1 }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <View>
                      <Text style={[styles.textProp]}>
                        Unique ID : {item.id}
                      </Text>
                      <Text style={[styles.textProp, styles.textMargin]}>
                        User ID : {item.userId}
                      </Text>
                    </View>

                    <View style={styles.btnContainer}>
                      <TouchableOpacity
                        onPress={async () => {
                          handleCard(item);
                          await showNotification({
                            title: `User ID: ${item.id}`,
                            body: item.title,
                          });
                        }}
                        style={styles.viewDtl}
                      >
                        <Text style={styles.viewdtltext}>View Details</Text>
                      </TouchableOpacity>
                    </View>
                  </View>

                  <Text
                    style={styles.textProp}
                    numberOfLines={1}
                    ellipsizeMode="tail"
                  >
                    Title : {item.title}
                  </Text>
                </View>
              </View>
            </View>
          );
        }}

        // ListFooterComponent={
        //   visibleDataCount < data.length ? (
        //     <View style={styles.btn}>
        //       <Button title="Show More" onPress={handleShowMoreBtn} />
        //     </View>
        //   ) : null
        // }
      />

      {/* <ModalCard
        selectedCard={selectedCard}
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#fafafa',
  },

  card: {
    marginVertical: 20,
    backgroundColor: 'white',
    padding: '4%',
    width: '90%',
    marginHorizontal: 'auto',
    borderRadius: 15,
    borderLeftWidth: 7,
    elevation: 5,
  },

  textProp: {
    fontSize: 15,
    color: '#4a4a4a',
    lineHeight: 20,
    fontWeight: 'bold',
  },

  textMargin: {
    marginBottom: 10,
    color: '#a3a3a3',
  },

  viewDtl: {
    backgroundColor: '#3e7aeb',
    borderRadius: 10,
    width: 'auto',
    paddingVertical: 7,
    paddingHorizontal: 14,
    elevation: 3,
  },

  viewdtltext: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },

  btn: {
    alignSelf: 'center',
    color: 'white',
    marginTop: 10,
    marginHorizontal: 20,
    marginBottom: 10,
    backgroundColor: 'yellow',
    borderRadius: 8,
  },
});

export default List;
