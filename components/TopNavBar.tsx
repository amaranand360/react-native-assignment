import React from 'react';
import { StyleSheet, View} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const TopNavBar = () => {
  return (
    <View style={styles.container}>
      <Ionicons name="md-home" size={30} color="#000000" />
      <Ionicons name="md-document" size={30} color="#000000" />
      <Ionicons name="md-notifications" size={30} color="#000000" />
      <Ionicons name="md-menu" size={30} color="#000000" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#ffffff', 
    height: 60, 
    borderTopWidth: 1, 
  },
});

export default TopNavBar;
