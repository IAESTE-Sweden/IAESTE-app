import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const InternshipCard = ({ internship, navigate }) => (
  <TouchableOpacity style={styles.container} onPress={() => navigate('Details', internship)}>
    <Text>{internship.RefNo}</Text>
    <Text>{internship.City}, {internship.Country}</Text>
    <Text>{internship.Business}</Text>
  </TouchableOpacity>
);

export default InternshipCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "95%",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#000",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 15,
    borderRadius: 5,
    margin: 5
  }
});
