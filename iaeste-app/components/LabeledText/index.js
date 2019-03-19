import React from "react";
import { StyleSheet, Text } from "react-native";

capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const LabeledText = ({ children, label }) =>
  children && typeof children === "string" && (
    <>
      <Text style={styles.h2}>{label}</Text>
      <Text style={styles.p}>{capitalize(children.trim())}</Text>
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
