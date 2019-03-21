import React from "react";
import { Text, View } from "react-native";

import Ionicons from '@expo/vector-icons/Ionicons';

class IconWithBadge extends React.Component {
  render() {
    const { name, badgeCount, color, size } = this.props;
    return (
      <View style={{ width: 24, height: 24, margin: 5 }}>
        <Ionicons name={name} size={size} color={color} />
        { badgeCount > 0 && (
          <View style={{
            position: 'absolute',
            right: 0,
            bottom: 0,
            backgroundColor: 'red',
            borderRadius: 6,
            width: 12,
            height: 12,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>{badgeCount}</Text>
          </View>
        )}
      </View>
    );
  }
}

const TabBarIcon = ({ focused, horizontal, tintColor, navigation, badgeCount }) => {
  const { routeName } = navigation.state;
  const IconComponent = routeName === "Saved" ? IconWithBadge : Ionicons;
  const iconNames = {
    Internships: "ios-globe",
    Saved: focused ? "ios-heart" : "ios-heart-empty",
    News: "logo-facebook"
  };
  return (
    <IconComponent
      name={iconNames[routeName]}
      size={25}
      color={tintColor}
      badgeCount={badgeCount}
    />
  );
};

export default TabBarIcon;
