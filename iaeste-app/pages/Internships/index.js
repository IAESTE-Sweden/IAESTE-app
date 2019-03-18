import React from "react";
import { StyleSheet, Button, ScrollView, RefreshControl } from "react-native";

import InternshipCard from "../../components/InternshipCard";
import LoadingState from "../../components/LoadingState";
import Search from "../../components/Search";

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
    search: "",
    refreshing: false,
    loading: true
  };

  handleSearchChange = search => {
    this.setState({ search });
  };

  filterInternships = () => {
    const { internships, search } = this.state;

    const filterValues = internship => {
      const matchedValues = Object.values(internship).filter(value =>
        value.toLowerCase().includes(search.toLowerCase())
      );
      return matchedValues.length > 0;
    };
    return search.length === 0
      ? internships
      : internships.filter(internship => filterValues(internship));
  };

  _onRefresh = () => {
    this.setState({ refreshing: true });
    this.fetchInternships().then(() => {
      this.setState({ refreshing: false });
    });
  };

  fetchInternships = () =>
    fetch("https://iaeste.se/api/wp-json/internships/v1/offers/foreign")
      .then(response => response.json())
      .then(internships => this.setState({ internships, loading: false }))
      .catch(error => console.error(error));

  componentDidMount() {
    this.fetchInternships();
  }

  render() {
    const { search, loading, refreshing } = this.state;
    const filteredInternships = this.filterInternships();

    if (loading) {
      return <LoadingState />;
    }

    return (
      <ScrollView
        contentContainerStyle={styles.container}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={this._onRefresh} />
        }
      >
        <Search value={search} onChange={this.handleSearchChange} />
        {filteredInternships.map(internship => (
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
