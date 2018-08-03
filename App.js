import {
  createStackNavigator,
  createDrawerNavigator,
  DrawerMenu
} from "react-navigation";
import Home from "./Components/Home";
import ListResults from "./Components/ListResults";
import Login from "./Components/Forms/Login";
import SignUp from "./Components/Forms/SignUp";

import {
  AppRegistry,
  StyleSheet,
  Text,
  StatusBar,
  View,
  Button,
  Image
} from "react-native";
import { Navigator, NativeModules } from "react-native";

import { COLOR, ThemeProvider } from "react-native-material-ui";
import { Toolbar, BottomNavigation, Icon } from "react-native-material-ui";
import React, { Component } from "react";
import { TabRouter } from "react-navigation";
import { withNavigation, NavigationActions } from "react-navigation";



class MyHomeScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: "Home",
    drawerIcon: ({ tintColor }) => (
      <Image
        source="https://iconscout.com/iconscout_logo-1024x1024.png"
        style={[styles.icon, { tintColor: tintColor }]}
      />
    )
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.navigate("Notifications")}
        title="Go to notifications"
      />
    );
  }
}

class MyNotificationsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: "Notifications",
    drawerIcon: ({ tintColor }) => (
      <Image
        source="https://iconscout.com/iconscout_logo-1024x1024.png"
        style={[styles.icon, { tintColor: tintColor }]}
      />
    )
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.goBack()}
        title="Go back home"
      />
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24
  }
});


import MapView from 'react-native-maps';

const App = createStackNavigator({
  Home: { screen: Home },
  Login: { screen: Login },
  SignUp: { screen: SignUp }

});


import { StyleSheet } from 'react-native';



const styles = StyleSheet.create({
  map : {
    left: 0,
    right: 0,
    top : 0,
    bottom: 0,
    position: 'absolute'
  }
})


export default App;
