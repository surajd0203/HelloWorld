import React from 'react';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const ModalCard = ({ selectedCard, visible, onClose }) => {
  return (
    <Modal
      style={styles.modalBody}
      visible={visible}
      animationType={'fade'}
      transparent={true}
    >
      <Pressable style={styles.backdrop} onPress={onClose}>
        <Pressable>
          <View style={styles.card}>
            <Pressable onPress={onClose} style={styles.closeBtn}>
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
        </Pressable>
      </Pressable>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBody: {
    // fontFamily : "Roboto"
  },

  backdrop: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  card: {
    marginVertical: 20,
    backgroundColor: 'transparent',
    padding: '8%',
    width: '95%',
    marginHorizontal: 'auto',
    borderRadius: 20,
    borderColor: '#6e98db',
    border: 4,
    backgroundColor: 'white',
    elevation: 20,
    borderBottomWidth: 15,
  },

  textProp: {
    fontSize: 15,
    color: '#4a4a4a',
    marginBottom: 1,
    lineHeight: 20,
    fontWeight: 500,
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
    marginBottom: 10,
  },
});

export default ModalCard;
