import MapView, { PROVIDER_GOOGLE } from "react-native-maps"; // remove PROVIDER_GOOGLE import if not using Google Maps
import React from "react";
import { View, Text, StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 600,
    width: 400,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    height: 300,
    width: 400,
    borderBottomColor: "black",
    borderBottomWidth: 2,
    borderStyle: "solid"
  }
});

export default () => (
  <View style={styles.container}>
    <MapView
      provider={PROVIDER_GOOGLE} // remove if not using Google Maps
      style={styles.map}
      region={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.15,
        longitudeDelta: 0.121
      }}
    />
    <Text>Map View Made It</Text>
  </View>
);
