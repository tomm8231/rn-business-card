import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, TextInput } from 'react-native';


export default function App() {
  const [companyName, setCompanyName] = useState('Your Company Name');

  const handleCompanyNameChange = (text) => {
    setCompanyName(text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image source={{ uri: './profile_photo.png' }} style={styles.photo} />
        <TextInput style={styles.companyNameInput} placeholder='Company' />
        <TextInput style={styles.textInput} placeholder='Name' />
        <TextInput style={styles.textInput} placeholder='Email Address' />
        <TextInput style={styles.textInput} placeholder='Phone Number' />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#311B92', // Deep Purple
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#FF6E40', // Vivid Orange
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  photo: {
    width: 150,
    height: 150,
    borderRadius: 75,
    alignSelf: 'center',
    marginBottom: 10,
  },
  companyNameInput: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#311B92', // Deep Purple
  },
  textInput: {
    alignSelf: 'center',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#FFC107', // Amber
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    color: '#311B92', // Deep Purple
    fontWeight: 'bold',
  },
});
