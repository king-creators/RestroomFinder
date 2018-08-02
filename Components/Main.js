import { createStackNavigator } from "react-navigation";
import Home from "./Home";
import Login from "./Forms/Login";
import SignUp from "./Forms/SignUp";

// const Main = createStackNavigator({
//   Home: { screen: Home },
//   Login: { screen: Login },
//   SignUp: { screen: SignUp }
// });

import React, { Component } from 'react'
import { View, Text } from "react-native";

 class Main extends Component {
  render() {
    return (
      <View>
        <Text>
          Hi
        </Text>
      </View>
    )
  }
}


export default Main;
