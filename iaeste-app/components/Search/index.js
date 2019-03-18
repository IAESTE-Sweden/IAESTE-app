import React from "react";
import { StyleSheet, View, TextInput } from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";

const Search = ({ value, onChange }) => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.search} value={value} onChangeText={onChange} />
      <Ionicons name="ios-search" size={25} color="#555" />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "center",
    width: "95%",
    borderRadius: 15,
    backgroundColor: "#eee",
    margin: 10
  },
  search: {
    width: "90%",
    padding: 10,
    fontSize: 16,
    fontWeight: "400",
    letterSpacing: 1.4,
  }
});
