import React from 'react';
import {TouchableOpacity, Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function ElevatedCards() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <view style={{display:'flex', marginLeft:5, justifyContent:'space-between'}}>
        <Text style={styles.headingText}>Cleaning Services</Text>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>See All {'>'}</Text>
          </TouchableOpacity>

        </view>
      
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={[styles.card, styles.elevatedCard]}>
            <Image source={require('../assets/Serface.png')} style={styles.imageCard} />
            <Text style={styles.cardTitle}>Home Cleaning</Text>
          </View>

          <View style={[styles.card, styles.elevatedCard]}>
            <Image source={require('../assets/home.png')} style={styles.imageCard} />
            <Text style={styles.cardTitle}>Carpet Cleaning</Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 20,
    fontWeight: '700',
    paddingHorizontal: 8,
    marginBottom: 8,
  },
  container: {
    flex:1,
    padding: 8,
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    margin: 8,
    maxWidth: 200, 
  },
  elevatedCard: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 8, 
    borderColor: '#ddd',
    overflow: 'hidden', 
  },
  imageCard: {
    width: 200,
    height: 200,
    resizeMode: 'cover', 
  },
  cardTitle: {
    color: '#000000',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 4,
  },
  button: {
    backgroundColor: '#ececec', 
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingRight:10,
    paddingVertical:8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#111',
    fontSize: 14,
  },
});
