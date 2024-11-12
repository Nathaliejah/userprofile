import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Avatar, Button, Card, List, Paragraph, Title } from 'react-native-paper';

const ProfileScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <Card style={styles.card}>
        <Card.Content style={styles.header}>
          <Avatar.Image size={100} source={{ uri: 'https://via.placeholder.com/150' }} />
          <Title style={styles.title}>User Name</Title>
          <Paragraph style={styles.subtitle}>@username</Paragraph>
          <Button
            mode="contained"
            style={styles.editButton}
            onPress={() => navigation.navigate('EditProfile')}
          >
            Edit Profile
          </Button>
        </Card.Content>
      </Card>
      <List.Section>
        <List.Subheader style={styles.subheader}>Mimi Headline</List.Subheader>
        <List.Item title="Popular" right={() => <List.Icon icon="chevron-right" />} />
        <List.Item title="Trending" right={() => <List.Icon icon="chevron-right" />} />
        <List.Item title="Today" right={() => <List.Icon icon="chevron-right" />} />

        <List.Subheader style={styles.subheader}>Content</List.Subheader>
        <List.Item title="Favourite" left={() => <List.Icon icon="heart" />} right={() => <List.Icon icon="chevron-right" />} />
        <List.Item title="Download" left={() => <List.Icon icon="download" />} right={() => <List.Icon icon="chevron-right" />} />

        <List.Subheader style={styles.subheader}>Preferences</List.Subheader>
        <List.Item title="Language" left={() => <List.Icon icon="translate" />} right={() => <List.Icon icon="chevron-right" />} />
        <List.Item title="Darkmode" left={() => <List.Icon icon="theme-light-dark" />} right={() => <List.Icon icon="chevron-right" />} />
        <List.Item title="Only Download via Wifi" left={() => <List.Icon icon="wifi" />} right={() => <List.Icon icon="chevron-right" />} />
      </List.Section>
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
  },
  header: {
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    marginTop: 8,
    fontWeight: 'bold',
  },
  subtitle: {
    marginBottom: 8,
    color: '#777',
  },
  editButton: {
    marginTop: 12,
  },
  subheader: {
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
