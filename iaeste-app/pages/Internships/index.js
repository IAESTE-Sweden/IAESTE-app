import React from "react";
import { StyleSheet, FlatList, Text, View, Platform } from "react-native";

import InternshipCard from "../../components/InternshipCard";
import LoadingState from "../../components/LoadingState";
import Search from "../../components/Search";

const Header = ({ search, handleSearch }) => (
  <View style={styles.header}>
    <Search value={search} onChange={handleSearch} />
  </View>
);

const Separator = ({ highlighted }) =>
  Platform.OS !== "android" && (
    <View style={[styles.separator, highlighted && { marginLeft: 0 }]} />
  );

const EmptyState = ({ internships }) => (
  <Text>
    {internships.length === 0
      ? "No internships available at this moment :("
      : "We can't find any internship matching your query :("}
  </Text>
);

class Internships extends React.Component {
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

  fetchInternships = () =>
    fetch("https://iaeste.se/api/wp-json/internships/v1/offers/foreign")
      .then(response => response.json())
      .then(internships => this.setState({ internships, loading: false }))
      .catch(error => console.error(error));

  _renderItem = ({ item: internship }) => (
    <InternshipCard
      navigate={this.props.navigation.navigate}
      internship={internship}
    />
  );

  _onRefresh = () => {
    this.setState({ refreshing: true });
    this.fetchInternships().then(() => {
      this.setState({ refreshing: false });
    });
  };

  componentDidMount() {
    this.fetchInternships();
  }

  render() {
    const { search, loading, refreshing, internships } = this.state;
    const filteredInternships = this.filterInternships();

    if (loading) {
      return <LoadingState />;
    }

    return (
      <FlatList
        contentContainerStyle={styles.container}
        ListHeaderComponent={
          <Header search={search} handleSearch={this.handleSearchChange} />
        }
        ItemSeparatorComponent={Separator}
        ListEmptyComponent={<EmptyState internships={internships} />}
        data={filteredInternships}
        renderItem={this._renderItem}
        keyExtractor={item => item.RefNo}
        refreshing={refreshing}
        onRefresh={this._onRefresh}
        stickyHeaderIndices={[0]}
      />
    );
  }
}

export default Internships;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff"
  },
  header: {
    backgroundColor: "#fff"
  },
  separator: {
    height: 1,
    backgroundColor: "#eee",
    width: "95%"
  }
});
