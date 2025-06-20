import React from 'react';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';

const ModalCard = ({ selectedCard, visible, onClose }) => {
  return (
    <Modal
      style={styles.modalBody}
      visible={visible}
      animationType={'slide'}
      backdropColor = {'rgba(0,0,0,0.5)'}
      // transparent={true}
    >
      <View style={styles.card}>
        <View style={styles.textHeader}>
          <Text style={styles.userTitle}>User Details</Text>
          <Pressable onPress={onClose}>
            <Text style={styles.close}>X</Text>
          </Pressable>
        </View>

        {selectedCard ? (
          <>
            <Text style={styles.textProp}>
              User ID : {selectedCard.userId}{' '}
            </Text>
            <Text style={styles.textProp}>Unique ID : {selectedCard.id}</Text>
            <Text style={styles.textProp}>Title : {selectedCard.title} </Text>
            <Text style={styles.textProp}>Body : {selectedCard.body} </Text>
          </>
        ) : (
          <Text>Lading....</Text>
        )}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBody: {
    backgroundColor: 'red',
    marginTop: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },

  card: {
    marginVertical: 20,
    backgroundColor: 'transparent',
    padding: '8%',
    width: '90%',
    marginHorizontal: 'auto',
    borderRadius: 20,
    borderColor: '#6e98db',
    borderWidth: 1,
    backgroundColor: '#e8e8e8',
  },

  textProp: {
    fontSize: 15,
    color: '#4a4a4a',
    marginBottom: 15,
    fontFamily: 'monospace',
    lineHeight: 20,
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

  close: {
    color: 'red',
    fontSize: 20,
    textAlign: 'right',
  },

  userTitle: {
    color: '#545657',
    fontFamily: 'monospace',
    fontSize: 25,
  },

  textHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
});

export default ModalCard;
