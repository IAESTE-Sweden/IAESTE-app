import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import SaveIcon from "../SaveIcon";

format = str => {
  const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
  const sentences = str
    .split(".")
    .map(sentence => capitalize(sentence.replace(/^\s+/g, "")));
  return sentences.join(". ");
};

const InternshipCard = ({ internship, navigate, isSaved }) => {
  const { Employer, City, Country, RefNo, Workkind } = internship;
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigate("Details", internship)}
    >
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{Employer}</Text>
      <SaveIcon RefNo={RefNo} isSaved={isSaved} />
    </View>
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
  titleContainer: {
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-between"
  },
  title: {
    flex: 1,
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
