import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Login from "./Forms/Login";
import Routes from "./routes";

export default class Main extends Component {
  render() {
    return (
      // <Router>
      //   <Scene key="root">
      //     <Scene key="login" component={Login} title="Login" initial />
      //   </Scene>
      // </Router>

      <Routes />
    );
  }
}
