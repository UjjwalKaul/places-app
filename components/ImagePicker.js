import { View, Button } from 'react-native';
import React from 'react';
import { launchCameraAsync } from 'expo-image-picker';
export default function ImagePicker() {
  async function imageHandler() {
    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });
    console.log(image);
  }
  return (
    <View>
      <View>
        <Button title="Take Image" onPress={imageHandler} />
      </View>
    </View>
  );
}
