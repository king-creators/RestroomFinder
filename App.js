import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

//library imports
import { Container, Content, Icon, Header, Body } from "native-base";
import { createDrawerNavigator, DrawerItems } from "react-navigation";

//custom files
import Home from "./Components/Home";
import SignUp from "./Components/Forms/SignUp";
import Login from "./Components/Forms/Login";
import Restroom from "./Components/Results/Restroom";
//Store
import {Provider} from 'react-redux'
import Store from './store/store'


export default class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <MyApp />
      </Provider>
  )
  }
}


const CustomDrawerContentComponent = props => (
  <Container>
    <Header style={styles.drawerHeader}>
      <Body>
        <Image
          style={styles.drawerImage}
          source={require("./Components/_assets/logo.png")}
        />
      </Body>
    </Header>
    <Content>
      <DrawerItems {...props} />
    </Content>
  </Container>
);

class Hidden extends React.Component {
  render() {
    return null;
  }
}

const MyApp = createDrawerNavigator(
  {
    // For each screen that you can navigate to, create a new entry like this:
    Home: {
      screen: Home
    },
    Login: {
      screen: Login
    },
    SignUp: {
      screen: SignUp
    },
    Restroom: {
      screen: Restroom,
      navigationOptions: {
        drawerLabel: <Hidden />
      }
    }
  },

  {
    initialRouteName: "Home",
    drawerPosition: "left",
    contentComponent: CustomDrawerContentComponent,
    drawerOpenRoute: "DrawerOpen",
    drawerCloseRoute: "DrawerClose",
    drawerToggleRoute: "DrawerToggle"
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1
    // justifyContent: "center",
    // alignItems: "center"
  },
  drawerHeader: {
    height: 200,
    backgroundColor: "white"
  },
  drawerImage: {
    height: 80,
    width: 212
  }
});
