import React from "react";
import { StyleSheet, Text } from "react-native";

capitalize = str => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const LabeledText = ({ label, text, onPress }) =>
  typeof text === "string" &&
  text.replace(/\s/g, "").length > 0 && (
    <>
      <Text style={styles.h2}>{label}</Text>
      <Text style={onPress ? styles.a : styles.p} onPress={onPress}>
        {capitalize(text.trim())}
      </Text>
    </>
  );

export default LabeledText;

const styles = StyleSheet.create({
  h2: {
    fontSize: 20,
    color: "#555",
    fontWeight: "500",
    marginBottom: 5
  },
  p: {
    fontSize: 16,
    color: "#555",
    marginBottom: 10
  },
  a: {
    fontSize: 16,
    color: "tomato",
    marginBottom: 10
  }
});
