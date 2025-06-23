import React, { useEffect, useState } from 'react';
import {
  Button,
  StyleSheet,
  FlatList,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import ModalCard from './ModalCard';

const List = () => {
  const [data, setData] = useState([]);
  const [visibleDataCount, setVisibleDataCount] = useState(10);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  console.log('List display');

  const getData = async () => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts',
      );
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleShowMoreBtn = () => {
    setVisibleDataCount(prev => prev + 10);
  };

  const handleCard = (item) => {
    setModalVisible(true);
    setSelectedCard(item);
  };

  return (
    <View style={styles.body}>
      <FlatList
        data={data.slice(0, visibleDataCount)}
        keyExtractor={item => item.id.toString()}
        onEndReached={handleShowMoreBtn}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleCard(item)}>
            <View style={styles.card}>
              <Text style={styles.textProp}>
                User ID : <Text style={styles.innerText}> {item.userId} </Text>{'   '}
                Unique ID : <Text style={styles.innerText}> {item.id} </Text>
              </Text>
            </View>
          </TouchableOpacity>
        )}

        // ListFooterComponent={
        //   visibleDataCount < data.length ? (
        //     <View style={styles.btn}>
        //       <Button title="Show More" onPress={handleShowMoreBtn} />
        //     </View>
        //   ) : null
        // }
      />

      <ModalCard
        selectedCard={selectedCard}
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#f7f7f7',
  },

  card: {
    marginVertical: 20,
    backgroundColor: 'transparent',
    padding: '3%',
    width: '90%',
    marginHorizontal: 'auto',
    borderRadius: 20,
    borderColor: '#6e98db',
    borderWidth: 1,
  },

  textProp: {
    fontSize: 15,
    color: '#4a4a4a',
    fontFamily: 'monospace',
    lineHeight: 20,
    fontWeight: 'bold'
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
