import { View, Text, FlatList, StyleSheet } from 'react-native';
import React from 'react';
import PlaceItem from './PlaceItem';
import { Colors } from '../colors';

export default function PlacesList({ places }) {
  if (!places || places.length === 0) {
    return (
      <View style={styles.fallback}>
        <Text style={styles.fallbackText}>
          No places added yet - Start adding some
        </Text>
      </View>
    );
  }
  return (
    <FlatList
      data={places}
      keyExtractor={(item) => {
        return item.id;
      }}
      renderItem={({ item }) => {
        return <PlaceItem place={item} />;
      }}
    />
  );
}

const styles = StyleSheet.create({
  fallback: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fallbackText: {
    fontSize: 16,
    color: Colors.primary200,
  },
});
