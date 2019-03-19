import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const Button = ({ type, title, onPress }) => (
  <TouchableOpacity style={styles.primaryButton} onPress={onPress}>
    <Text style={styles.primaryText}>{title}</Text>
  </TouchableOpacity>
);

export default Button;

const styles = StyleSheet.create({
  primaryButton: {
    justifyContent: "center",
    backgroundColor: "tomato",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 10,
    height: 60
  },
  primaryText: {
    color: "white",
    textAlign: "center",
    fontSize: 22
  }
});
