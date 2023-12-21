import React from 'react'
import { TouchableOpacity,SafeAreaView, StyleSheet, Text, View } from 'react-native'

export default function Fanceycard() {
    return (
        <SafeAreaView>
        <View style={styles.card}>
          <Text style={styles.subheading}>Offer: AC Service</Text>
          <Text style={styles.description}>Get 25% off</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Grab Offer {'>'} </Text>
          </TouchableOpacity>
        </View>
        </SafeAreaView>
      );
    
}

const styles = StyleSheet.create({
    card: {
      backgroundColor: '#EAF6EF',
      padding: 20,
      borderRadius: 10,
      elevation: 3,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 2,
    },
    subheading: {
      fontSize: 15,
      fontWeight: 500,
      color: '#33383F',
    },
    description: {
    fontSize: 30,
      fontWeight: 'bold',
      color: '#1A1D1F',
      marginTop: 10,
    },
    button: {
      backgroundColor: '#fff',
      borderRadius: 5,
      padding: 10,
      marginTop: 20,
      alignItems: 'center',
    },
    buttonText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#6A9B7E',
    },
  });