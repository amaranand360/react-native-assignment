import React from 'react';
import { SafeAreaView,ScrollView,StyleSheet, Text, View, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import TopNavBar from './components/TopNavBar';
import ElevatedCards from './components/ElevatedCards'
import CategoryCard from "./components/CategoryCard"
import Fanceycard from './components/Fanceycard';

export default function App() {
  return (
    <SafeAreaView>
    <ScrollView>

    <TopNavBar />
    
    <View style={styles.container}>
      <Text style={styles.subheadingText}>Hello Ashfak 👋</Text>
      <Text style={styles.headingText}>What you are looking for today</Text>
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={24} color="black" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search what you need.."
          placeholderTextColor="gray"
        />
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    padding: 16, 
  },
  subheadingText: {
    fontSize: 16,
    fontWeight: '600',
    paddingBottom: 10,
  },
  headingText: {
    fontSize: 25,
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff', 
    borderRadius: 8, 
    padding: 8, 
    marginTop: 20, 
  },
  searchIcon: {
    marginRight: 8, 
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
});
