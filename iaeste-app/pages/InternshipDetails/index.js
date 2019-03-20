import React from "react";
import { StyleSheet, Text, Linking, ScrollView, View } from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";

import Button from "../../components/Button";
import InternshipInfo from "../../components/InternshipInfo";

const Header = ({ goBack }) => (
  <View style={styles.header}>
    <Ionicons
      onPress={() => goBack()}
      name="md-arrow-back"
      size={36}
      color="#555"
    />
    <Text style={styles.goBackText} onPress={() => goBack()}>
      Go back
    </Text>
  </View>
);

const InternshipDetails = props => {
  const { goBack } = props.navigation;
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      stickyHeaderIndices={[0]}
    >
      <Header goBack={goBack} />
      <InternshipInfo {...props.navigation.state.params} />
      <Button
        title="Visit Exchange Platform"
        onPress={() => Linking.openURL("https://iaeste.net")}
      />
    </ScrollView>
  );
};

export default InternshipDetails;

const styles = StyleSheet.create({
  container: {
    width: "95%",
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    padding: 15
  },
  header: {
    width: "100%",
    backgroundColor: "#fff",
    height: 50,
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "center"
  },
  goBackText: {
    marginLeft: 5,
    fontSize: 16,
    position: "relative",
    top: -2
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
