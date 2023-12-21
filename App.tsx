import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import TopNavBar from './components/TopNavBar';
import ElevatedCards from './components/ElevatedCards';
import CategoryCard from './components/CategoryCard';
import Fanceycard from './components/Fanceycard';

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>

        <TopNavBar />

        <View style={styles.container}>
          <View style={styles.textContainer}>

            <Text style={styles.subheadingText}>HELLO ASHRAF 👋</Text>
            <Text style={styles.headingText}>What you are looking for today </Text>

            <View style={styles.searchContainer}>
              <TextInput
                style={styles.searchInput}
                placeholder="Search what you need.."
                placeholderTextColor="gray"
              />
              <Ionicons name="search" size={24} color="black" style={styles.searchIcon} />
            </View>
          </View>
        </View>

        <CategoryCard />

        <ElevatedCards />

        <Fanceycard />

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9f9f9',
    padding: 16,
  },
  textContainer: {
    backgroundColor: '#fff',
    padding: 10,
    marginTop: 20,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  subheadingText: {
    minWidth:300,
    maxWidth:350,
    elevation:3,
    textAlign: 'left',
    fontSize: 20,
    fontWeight: '600',
    paddingBottom: 10,
  },
  headingText: {
    fontSize: 35,
    fontWeight:'900',
    // paddingBottom: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2', // Purple background
    borderRadius: 8,
    padding: 15,
    marginTop: 20,
  },
  searchIcon: {
    backgroundColor: '#6759ff', // Purple background
    marginRight: 8,
    borderRadius: 8,
    color:'#fff',
    padding:6,
  },
  searchInput: {
    flex: 1,
    fontSize: 20,
    color: '#fff', // White text color
  },
});
