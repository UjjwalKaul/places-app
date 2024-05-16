import { View, Text, FlatList } from 'react-native';
import React from 'react';

export default function PlacesList({ places }) {
  return (
    <FlatList
      data={places}
      keyExtractor={(item) => {
        return item.id;
      }}
    />
  );
}
