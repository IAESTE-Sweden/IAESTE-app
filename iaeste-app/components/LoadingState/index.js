import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";

const LoadingState = () => {
  return (
    <View style={styles.container}>
      <Ionicons name="ios-globe" size={80} color="#bbb" />
      <Text style={styles.text}>Loading internships...</Text>
    </View>
  );
};

export default LoadingState;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 16,
    fontWeight: "500",
    color: "#bbb",
    textTransform: "uppercase",
    letterSpacing: 1.4,
  }
});
