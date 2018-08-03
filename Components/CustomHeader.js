import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import { Header, Body, Title, Content, Left, Icon, Right } from "native-base";
import { withNavigation, DrawerActions } from "react-navigation";

class CustomHeader extends Component {
  constructor(props) {
    super(props);
    this.toggleDrawer = this.toggleDrawer.bind(this);
  }
  toggleDrawer = () => {
    this.props.navigation.dispatch(DrawerActions.toggleDrawer());
  };
  render() {
    return (
      <Header>
        <Left>
          <Icon name="ios-menu" onPress={() => this.toggleDrawer()} />
        </Left>
        <Body>
          <Title>{this.props.title}</Title>
        </Body>
        <Right />
      </Header>
    );
  }
}
export default withNavigation(CustomHeader);
