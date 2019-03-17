import React from "react";
import { Text, View } from "react-native";
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from "react-navigation";
import Ionicons from "@expo/vector-icons/Ionicons";

import Internships from "./pages/Internships";
import InternshipDetails from "./pages/InternshipDetails";

import IconWithBadge from "./components/IconWithBadge";

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

const Tabs = createBottomTabNavigator(
  {
    Internships: HomeStack,
    Bookmarked: DetailsStack
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        const IconComponent =
          routeName === "Bookmarked" ? IconWithBadge : Ionicons;
        const iconNames = {
          Internships: "ios-globe",
          Bookmarked: "ios-bookmark"
        };
        return (
          <IconComponent
            name={iconNames[routeName]}
            size={25}
            color={tintColor}
            badgeCount={3}
          />
        );
      }
    }),
    tabBarOptions: {
      activeTintColor: "tomato",
      inactiveTintColor: "gray"
    }
  }
);

const AppContainer = createAppContainer(Tabs);

export default App;
