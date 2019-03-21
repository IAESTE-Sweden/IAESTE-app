import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";

import { InternshipConsumer } from "../InternshipContext";

const SaveIcon = ({ RefNo, isSaved, addSaved, removeSaved }) => {
  const add = () => addSaved(RefNo);
  const remove = () => removeSaved(RefNo);
  const icon = isSaved ? "ios-heart" : "ios-heart-empty";
  return (
    <TouchableOpacity style={styles.container} onPress={isSaved ? remove : add}>
      <Ionicons name={icon} size={25} color="red" />
    </TouchableOpacity>
  );
};

const WithConsumer = props => (
  <InternshipConsumer>
    <SaveIcon {...props} />
  </InternshipConsumer>
);

export default WithConsumer;

const styles = StyleSheet.create({
  container: {
    width: 42,
    height: 42,
    justifyContent: "center",
    alignItems: "center"
  }
})