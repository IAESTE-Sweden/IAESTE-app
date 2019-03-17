import React from "react";
import { Text, View } from "react-native";
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from "react-navigation";

import Internships from "./pages/Internships";
import InternshipDetails from "./pages/InternshipDetails";

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}

class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const defaultNavigationOptions = {
  headerStyle: {
    backgroundColor: "#f4511e"
  },
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontWeight: "bold"
  }
};

const HomeStack = createStackNavigator(
  {
    Internships,
    Details: props => <InternshipDetails {...props} />
  },
  {
    initialRouteName: "Internships",
    defaultNavigationOptions,
    navigationOptions: {
      tabBarLabel: "Internships"
    }
  }
);

const DetailsStack = createStackNavigator(
  {
    Bookmarked: DetailsScreen
  },
  {
    initialRouteName: "Bookmarked",
    defaultNavigationOptions: {
      ...defaultNavigationOptions,
      title: "Bookmarked"
    },
    navigationOptions: {
      tabBarLabel: "Bookmarked"
    }
  }
);

const Tabs = createBottomTabNavigator({
  Internships: HomeStack,
  Bookmarked: DetailsStack
});

const AppContainer = createAppContainer(Tabs);

export default App;
