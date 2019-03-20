import React from "react";
import { StyleSheet, View, TextInput, TouchableOpacity } from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";

const Search = ({ value, onChange }) => {
  console.log(value);
  
  return (
    <View style={styles.container}>
      <View style={styles.searchIcon}>
        <Ionicons name="ios-search" size={25} color="#555" />
      </View>
      <TextInput
        style={styles.search}
        placeholder="Search employer, country, ref. no..."
        value={value}
        onChangeText={text => onChange(text)}
      />
      {value.length > 0 &&
      <TouchableOpacity style={styles.closeIcon} onPress={() => onChange("")}>
        <Ionicons name="ios-close-circle" size={18} color="#555" />
      </TouchableOpacity>}
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
    padding: 5,
    paddingLeft: 10,
    paddingRight: 15,
    fontSize: 18,
    fontWeight: "400",
    letterSpacing: 1.4
  },
  searchIcon: {
    marginLeft: 10
  },
  closeIcon: {
    marginRight: 10,
    height: 25,
    width: 25,
    justifyContent: "center",
    alignItems: "flex-end"
  }
});
