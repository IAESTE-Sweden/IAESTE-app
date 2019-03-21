import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

format = str => {
  const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
  const sentences = str
    .split(".")
    .map(sentence => capitalize(sentence.replace(/^\s+/g, "")));
  return sentences.join(". ");
};

const InternshipCard = ({ internship, navigate }) => {
  const { Employer, City, Country, RefNo, Workkind } = internship;
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigate("Details", internship)}
    >
      <Text style={styles.title}>{Employer}</Text>
      <Text style={styles.location}>
        {City}, {Country}
      </Text>
      <Text style={styles.refno}>{RefNo}</Text>
      <Text style={styles.business} ellipsizeMode="tail" numberOfLines={6}>
        {format(Workkind)}
      </Text>
    </TouchableOpacity>
  );
};

export default InternshipCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
