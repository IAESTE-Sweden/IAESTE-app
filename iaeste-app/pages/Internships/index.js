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
  <View style={styles.emptyState}>
    <Text>
      {internships.length === 0
        ? "No internships available at this moment :("
        : "We can't find any internship matching your query :("}
    </Text>
  </View>
);

class Internships extends React.Component {
  state = {
    search: "",
    refreshing: false
  };

  handleSearchChange = search => {
    this.setState({ search });
  };

  filterInternships = () => {
    const { search } = this.state;
    const { internships } = this.props;

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

  _renderItem = ({ item: internship }) => (
    <InternshipCard
      navigate={this.props.navigation.navigate}
      internship={internship}
      isSaved={this.props.saved.includes(internship.RefNo)}
    />
  );

  _onRefresh = () => {
    this.setState({ refreshing: true });
    this.props.fetchInternships().then(() => {
      this.setState({ refreshing: false });
    });
  };

  render() {
    const { search, refreshing } = this.state;
    const { internships, loading } = this.props;
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
  },
  emptyState: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  }
});
