import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Avatar, Button, Card, TextInput } from 'react-native-paper';

const EditProfile = () => {
  return (
    <ScrollView style={styles.container}>
      <Card style={styles.card}>
        <Card.Content style={styles.header}>
          {/* Avatar component for profile picture */}
          <Avatar.Image size={100} source={{ uri: 'https://via.placeholder.com/150' }} />

          {/* Button for changing profile picture */}
          <Button mode="text" style={styles.changePictureButton}>Change Picture</Button>
        </Card.Content>
      </Card>

      {/* Input fields for updating profile */}
      <TextInput
        label="Username"
        value="Nathalie"
        style={styles.input}
      />
      <TextInput
        label="Email ID"
        value="juagpao.nathalie@gmail.com"
        style={styles.input}
      />
      <TextInput
        label="Phone Number"
        value="+149878899999"
        style={styles.input}
        keyboardType="phone-pad"
      />
      <TextInput
        label="Password"
        value="evFTbyVVcD"
        style={styles.input}
        secureTextEntry
      />

      {/* Update button */}
      <Button
        mode="contained"
        style={styles.updateButton}>
        Update
      </Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f4f4f4',
  },
  card: {
    marginBottom: 16,
    elevation: 4, // Adds shadow effect (for Android) without using deprecated styles
    shadowColor: 'rgba(0, 0, 0, 0.1)', // Applies shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.2,
    borderRadius: 8, // Rounded corners for the card
  },
  header: {
    alignItems: 'center',
    marginBottom: 16,
  },
  changePictureButton: {
    marginTop: 8, // Space between button and image
  },
  input: {
    marginVertical: 8,
    backgroundColor: 'white',
    borderRadius: 8, // Rounded corners for input fields
  },
  updateButton: {
    marginTop: 16,
  },
});

export default EditProfile;
