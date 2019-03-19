import React from "react";
import { StyleSheet, Text, Linking, ScrollView } from "react-native";

import moment from "moment";

import LabeledText from "../../components/LabeledText";
import Button from "../../components/Button";

class InternshipDetails extends React.Component {
  render() {
    const {
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
    } = this.props.navigation.state.params;
    const location = [...(City ? [City] : []), ...(Country ? [Country] : [])];

    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.h1}>{Employer}</Text>
        {location.length > 0 && (
          <Text style={styles.h3}>{location.join(", ")}</Text>
        )}
        <LabeledText label="Ref. No">{RefNo}</LabeledText>
        <LabeledText label="Offer Type">{ExchangeType}</LabeledText>
        <LabeledText label="Business">{Business}</LabeledText>
        <LabeledText label="Work Kind">{Workkind}</LabeledText>
        <LabeledText label="Required knowledge and experiences">
          {RequiredKnowledgeAndExperiences}
        </LabeledText>
        <LabeledText label="Languages">{Language1} ({Language1Level})</LabeledText>
        <LabeledText label="Deadline">{moment(Deadline).format("DD MMM YYYY")}</LabeledText>
        {Website && (
          <>
            <Text style={styles.h2}>Website</Text>
            <Text style={styles.a} onPress={() => Linking.openURL(Website)}>
              {Website}
            </Text>
          </>
        )}
        <Button
          title="Visit Exchange Platform"
          onPress={() => Linking.openURL("https://iaeste.net")}
        />
      </ScrollView>
    );
  }
}

export default InternshipDetails;

const styles = StyleSheet.create({
  container: {
    width: "95%",
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    padding: 15,
    margin: 5
  },
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
