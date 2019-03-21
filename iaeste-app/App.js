import React from "react";
import { Text, View } from "react-native";
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
  SafeAreaView
} from "react-navigation";
import Ionicons from "@expo/vector-icons/Ionicons";

import Internships from "./pages/Internships";
import InternshipDetails from "./pages/InternshipDetails";

import { InternshipProvider, InternshipConsumer } from "./components/InternshipContext";
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

const App = () => (
  <InternshipProvider>
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#fff" }}
      forceInset={{ bottom: "never" }}
    >
      <AppContainer />
    </SafeAreaView>
  </InternshipProvider>
);

const TabBarIcon = ({ focused, horizontal, tintColor, navigation }) => {
  const { routeName } = navigation.state;
  const IconComponent = routeName === "Bookmarked" ? IconWithBadge : Ionicons;
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
};

const configOptions = {
  headerMode: "none",
  navigationOptions: {
    headerVisible: false
  }
};

const HomeStack = createStackNavigator(
  {
    Internships: props => (
      <InternshipConsumer>
        <Internships { ...props } />
      </InternshipConsumer>
    ),
    Details: props => <InternshipDetails {...props} />
  },
  {
    initialRouteName: "Internships",
    ...configOptions
  }
);

const DetailsStack = createStackNavigator(
  {
    Bookmarked: DetailsScreen
  },
  {
    initialRouteName: "Bookmarked",
    ...configOptions
  }
);

const Tabs = createBottomTabNavigator(
  {
    Internships: HomeStack,
    Bookmarked: DetailsStack
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: props => <TabBarIcon navigation={navigation} {...props} />
    }),
    tabBarOptions: {
      activeTintColor: "tomato",
      inactiveTintColor: "gray"
    }
  }
);

const AppContainer = createAppContainer(Tabs);

export default App;
