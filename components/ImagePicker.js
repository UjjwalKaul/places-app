import { View, Button, Alert } from 'react-native';
import React from 'react';
import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
} from 'expo-image-picker';

export default function ImagePicker() {
  const [cameraPermissionInfo, requestPermission] = useCameraPermissions(); //For iOS
  async function verifyPermissions() {
    if (cameraPermissionInfo.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission();
      return permissionResponse.granted;
    }
    if (cameraPermissionInfo.status === PermissionStatus.DENIED) {
      Alert.alert(
        'Permission Denied',
        'You need to grant camera permissions to use this app'
      );
      return false;
    }
    return true;
  }
  async function imageHandler() {
    const hasPermissions = await verifyPermissions();
    if (!hasPermissions) {
      return;
    }
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
