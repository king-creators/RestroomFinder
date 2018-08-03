import React, { Component } from "react";
import { Button } from "react-native";

class Home extends React.Component {
  static navigationOptions = {
    title: "Do you have to go?"
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <React.Fragment>
        <Button title="View Map" onPress={() => navigate("Home")} />
        <Button title="Login" onPress={() => navigate("Login")} />
        <Button title="Sign Up" onPress={() => navigate("SignUp")} />{" "}
        <Button title="View List" onPress={() => navigate("ListResults")} />
        <Button title="Go" onPress={() => navigate("Home")} />
      </React.Fragment>
    );
  }
}

export default Home;
