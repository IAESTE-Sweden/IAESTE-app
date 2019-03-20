import React from "react";
import { StyleSheet, Text, Linking } from "react-native";

import moment from "moment";

import LabeledText from "../LabeledText";

const InternshipInfo = ({
  Employer,
  RefNo,
  Country,
  City,
  Business,
  Website,
  ExchangeType,
  Workkind,
  RequiredKnowledgeAndExperiences,
  Deadline,
  Language1,
  Language1Level
}) => {
  const location = [];
  City && location.push(City);
  Country && location.push(Country);
  return (
    <>
      <Text style={styles.h1}>{Employer}</Text>
      {location.length > 0 && (
        <Text style={styles.h3}>{location.join(", ")}</Text>
      )}
      <LabeledText label="Ref. No" text={RefNo} />
      <LabeledText label="Offer Type" text={ExchangeType} />
      <LabeledText label="Business" text={Business} />
      <LabeledText label="Work Kind" text={Workkind} />
      <LabeledText
        label="Required knowledge and experiences"
        text={RequiredKnowledgeAndExperiences}
      />
      <LabeledText
        label="Languages"
        text={`${Language1} (${Language1Level})`}
      />
      <LabeledText
        label="Deadline"
        text={moment(Deadline).format("DD MMM YYYY")}
      />
      <LabeledText
        label="Website"
        text={Website}
        onPress={() => Linking.openURL(Website)}
      />
    </>
  );
};

export default InternshipInfo;

const styles = StyleSheet.create({
  h1: {
    fontSize: 24,
    color: "#555",
    fontWeight: "700",
    marginBottom: 5
  },
  h2: {
    fontSize: 20,
    color: "#555",
    fontWeight: "500",
    marginBottom: 5
  },
  h3: {
    fontSize: 18,
    color: "#555",
    fontWeight: "300",
    marginBottom: 15
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