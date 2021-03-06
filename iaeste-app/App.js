import React from "react";
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
  SafeAreaView
} from "react-navigation";

import Internships from "./pages/Internships";
import InternshipDetails from "./pages/InternshipDetails";
import SavedInternships from "./pages/SavedInternships";
import FacebookFeed from './pages/FacebookFeed';

import {
  InternshipProvider,
  InternshipConsumer
} from "./components/InternshipContext";
import TabBarIcon from "./components/TabBarIcon";

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
        <Internships {...props} />
      </InternshipConsumer>
    ),
    Details: props => <InternshipDetails {...props} />
  },
  {
    initialRouteName: "Internships",
    ...configOptions
  }
);

const SavedStack = createStackNavigator(
  {
    Saved: props => (
      <InternshipConsumer>
        <SavedInternships {...props} />
      </InternshipConsumer>
    )
  },
  {
    initialRouteName: "Saved",
    ...configOptions
  }
);

const Tabs = createBottomTabNavigator(
  {
    News: FacebookFeed,
    Internships: HomeStack,
    Saved: SavedStack
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: props => (
        <InternshipConsumer>
          <TabBarIcon navigation={navigation} {...props} />
        </InternshipConsumer>
      )
    }),
    tabBarOptions: {
      activeTintColor: "tomato",
      inactiveTintColor: "gray"
    }
  }
);

const AppContainer = createAppContainer(Tabs);

export default App;
