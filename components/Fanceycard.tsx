import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.card}>
        <Text style={styles.subheading}>Offer: AC Service</Text>
        <Text style={styles.description}>Get 25% off</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Grab Offer</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    height: 200,
    width: 375,
    backgroundColor: '#eaf6ef', 
    padding: 16,
    borderRadius: 16,
    justifyContent:'flex-start',
  },
  subheading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 45,
    marginBottom: 12,
    fontWeight:'700'
  },
  button: {
    maxWidth:125,
    backgroundColor: '#fff', 
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 25,
  },
  buttonText: {
    color: '#6a9b7e',
    fontWeight: 'bold',
    fontSize:18,
  },
});

export default App;
