import { createStackNavigator } from "react-navigation";
import Home from "./Components/Home";
import Login from "./Components/Forms/Login";
import SignUp from "./Components/Forms/SignUp";

import MapView from 'react-native-maps';

const App = createStackNavigator({
  Home: { screen: Home },
  Login: { screen: Login },
  SignUp: { screen: SignUp }
});

// import { View, Text } from "react-native";
import { StyleSheet } from 'react-native';

// import React, { Component } from 'react'

// class App extends Component {
//   render() {
//     return (


//     )
//   }
// }

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
