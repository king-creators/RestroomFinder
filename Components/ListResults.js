import React, { Component } from "react";
import { View, Text } from "react-native";

export default class ListResults extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>
          This is the list yo. This is the list yo. This is the list yo. This is
          the list yo. This is the list yo. This is the list yo. This is the
          list yo. This is the list yo. This is the list yo.
        </Text>
      </View>
    );
  }
}
