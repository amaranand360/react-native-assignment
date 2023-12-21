import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CategoryCard = () => {
  const categories = [
    { name: 'Acc Repair', icon: 'md-build', color: '#3498db' },
    { name: 'Beauty', icon: 'md-cut', color: '#e74c3c' },
    { name: 'Appliance', icon: 'md-laptop', color: '#2ecc71' },
    { name: 'See All', icon: 'md-grid', color: '#f39c12' },
  ];

  const renderCategory = ({ name, icon, color }: { name: string, icon: string, color: string }) => (
    <TouchableOpacity key={name} style={[styles.category, { backgroundColor: color }]}>
      <Ionicons name={icon} size={40} color="#fff" />
      <Text style={styles.categoryTitle}>{name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {categories.map(renderCategory)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 16,
  },
  category: {
    alignItems: 'center',
    borderRadius: 50,
    padding: 10,
  },
  categoryTitle: {
    marginTop: 8,
    color: '#333',
    textAlign: 'center',
  },
});

export default CategoryCard;
