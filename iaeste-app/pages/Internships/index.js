import React from "react";
import { StyleSheet, Button, ScrollView, RefreshControl } from "react-native";

import InternshipCard from "../../components/InternshipCard";

class Internships extends React.Component {
  static navigationOptions = {
    title: "Internships",
    headerStyle: {
      backgroundColor: "#f4511e"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    },
    headerRight: (
      <Button
        onPress={() => alert("This is a button!")}
        title="Info"
        color="#fff"
      />
    )
  };

  state = {
    internships: [],
    refreshing: false
  };

  _onRefresh = () => {
    this.setState({refreshing: true});
    this.fetchInternships().then(() => {
      this.setState({refreshing: false});
    });
  }

  fetchInternships = () =>
    fetch("https://iaeste.se/api/wp-json/internships/v1/offers/foreign")
      .then(response => response.json())
      .then(internships => this.setState({ internships }))
      .catch(error => console.error(error));

  componentDidMount() {
    this.fetchInternships();
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container} refreshControl={
        <RefreshControl
          refreshing={this.state.refreshing}
          onRefresh={this._onRefresh}
        />
      }>
        {this.state.internships.map(internship => (
          <InternshipCard
            key={internship.RefNo}
            navigate={this.props.navigation.navigate}
            internship={internship}
          />
        ))}
      </ScrollView>
    );
  }
}

export default Internships;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  }
});
