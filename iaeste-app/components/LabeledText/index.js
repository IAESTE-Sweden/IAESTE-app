import React from "react";
import {
  StyleSheet,
  Text
} from "react-native";

const LabeledText = ({ children, label }) => (
  <>
    <Text style={styles.h2}>{label}</Text>
    <Text style={styles.p}>{children}</Text>
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
