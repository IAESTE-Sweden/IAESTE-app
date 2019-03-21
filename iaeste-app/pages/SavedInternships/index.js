import React from "react";
import { StyleSheet, FlatList, Text, View, Platform } from "react-native";

import InternshipCard from "../../components/InternshipCard";

const Header = () => (
  <View style={styles.header}>
    <Text style={styles.title}>Saved internships</Text>
  </View>
);

const Separator = ({ highlighted }) =>
  Platform.OS !== "android" && (
    <View style={[styles.separator, highlighted && { marginLeft: 0 }]} />
  );

const EmptyState = () => (
  <View style={styles.emptyState}>
    <Text>You haven't saved any internships yet :(</Text>
  </View>
);

class Internships extends React.Component {
  filterInternships = () => {
    const { internships, saved } = this.props;
    return internships.filter(({ RefNo }) => saved.includes(RefNo));
  };

  _renderItem = ({ item: internship }) => (
    <InternshipCard
      navigate={this.props.navigation.navigate}
      internship={internship}
      isSaved={this.props.saved.includes(internship.RefNo)}
    />
  );

  render() {
    const filteredInternships = this.filterInternships();
    return (
      <FlatList
        contentContainerStyle={styles.container}
        ListHeaderComponent={<Header />}
        ItemSeparatorComponent={Separator}
        ListEmptyComponent={<EmptyState />}
        data={filteredInternships}
        renderItem={this._renderItem}
        keyExtractor={item => item.RefNo}
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
  title: {
    fontSize: 32,
    fontWeight: "600",
    margin: 15
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
