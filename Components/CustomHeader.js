import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import { Header, Body, Title, Content, Left, Icon, Right } from "native-base";

class CustomHeader extends Component {
  constructor(props) {
    super(props);
    this.toggleDrawer = this.toggleDrawer.bind(this);
  }
  toggleDrawer = () => {
    this.props.navigation.dispatch(DrawerActions.toggleDrawer());
  };
  render() {
    console.log(this.props);
    return (
      <Header>
        <Left>
          <Icon name="ios-menu" onPress={() => this.props.openDrawer()} />
        </Left>
        <Body>
          <Title>{this.props.title}</Title>
        </Body>
        <Right />
      </Header>
    );
  }
}
export default CustomHeader;
