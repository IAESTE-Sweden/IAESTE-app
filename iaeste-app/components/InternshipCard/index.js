import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const InternshipCard = ({ internship, navigate }) => (
  <TouchableOpacity
    style={styles.container}
    onPress={() => navigate("Details", internship)}
  >
    <Text style={styles.title}>{internship.Employer}</Text>
    <Text style={styles.location}>
      {internship.City}, {internship.Country}
    </Text>
    <Text style={styles.refno}>{internship.RefNo}</Text>
    <Text style={styles.business}>{internship.Business}</Text>
  </TouchableOpacity>
);

export default InternshipCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "95%",
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    padding: 15,
    borderRadius: 5
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
    color: "#555"
  },
  refno: {
    fontSize: 14,
    color: "#555"
  },
  location: {
    fontSize: 16,
    fontWeight: "300",
    color: "#555",
    marginBottom: 5
  },
  business: {
    color: "#555"
  }
});
