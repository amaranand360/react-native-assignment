import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CategoryCard = () => {
  const categories = [
    { name: 'Acc Repair', icon: 'md-build', color: '#ffbc99' },
    { name: 'Beauty', icon: 'md-cut', color: '#cabdff' },
    { name: 'Appliance', icon: 'md-laptop', color: '#b1e5fc' },
    { name: 'See All', icon: 'arrow-forward', color: '#ececec' },
  ];

  const renderCategory = ({ name, icon, color }: { name: string, icon: string, color: string }) => (
    <view >
    <TouchableOpacity key={name} style={[styles.category, { backgroundColor: color }]}>
      <Ionicons name={icon} size={40} color="#000" />
    </TouchableOpacity>
      <Text style={styles.categoryTitle}>{name}</Text>
    </view>
    
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
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 16,
  },
  category: {
    alignItems: 'center',
    borderRadius: 50,
    padding: 10,
  },
  categoryTitle: {
    marginTop: 15,
    color: '#333',
    textAlign: 'center',
    fontSize:18,
    fontWeight:600,
  },
});

export default CategoryCard;
