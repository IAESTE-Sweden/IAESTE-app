import React from "react";
import { StyleSheet, View, TextInput } from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";

const Search = ({ value, onChange }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.search}
        placeholder="Search employer, country, ref. no..."
        value={value}
        onChangeText={onChange}
      />
      <View style={styles.icon}>
        <Ionicons name="ios-search" size={25} color="#555" />
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "center",
    justifyContent: "space-between",
    height: 40,
    borderRadius: 20,
    backgroundColor: "#eee",
    margin: 10
  },
  search: {
    flex: 1,
    padding: 10,
    paddingLeft: 15,
    fontSize: 16,
    fontWeight: "400",
    letterSpacing: 1.4
  },
  icon: {
    marginRight: 15
  }
});
