import React from "react";
import { StyleSheet, Text, Button, Linking, ScrollView } from "react-native";

class InternshipDetails extends React.Component {
  render() {
    const {
      RefNo,
      Country,
      City,
      Business,
      Website,
      ExchangeType,
      Workkind,
      RequiredKnowledgeAndExperiences
    } = this.props.navigation.state.params;
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.h1}>{RefNo}</Text>
        <Text style={styles.h3}>
          {City}, {Country}
        </Text>
        <Text style={styles.h3}>{ExchangeType}</Text>
        <Text style={styles.h2}>Business</Text>
        <Text style={styles.p}>{Business.trim()}</Text>
        <Text style={styles.h2}>Work Kind</Text>
        <Text style={styles.p}>{Workkind.trim()}</Text>
        <Text style={styles.h2}>Required knowledge and experiences</Text>
        <Text style={styles.p}>{RequiredKnowledgeAndExperiences.trim()}</Text>
        <Text style={styles.h2}>Website</Text>
        <Text style={styles.a} onPress={() => Linking.openURL(Website)}>
          {Website}
        </Text>
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
    marginBottom: 5
  },
  p: {
    fontSize: 16,
    color: "#555",
    marginBottom: 10
  },
  a: {
    fontSize: 16,
    color: "blue",
    marginBottom: 10
  }
});
