import { Pressable, StyleSheet } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
export default function IconButton({ icon, size, color, onPress }) {
  return (
    <Pressable
      style={({ pressed }) => {
        return [styles.button, pressed && styles.pressed];
      }}
      onPress={onPress}>
      <Ionicons name={icon} color={color} size={size} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pressed: {
    opacity: 0.7,
  },
});
