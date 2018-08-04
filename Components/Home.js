import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

//library imports
import { Icon, Button, Container, Header, Content, Left } from "native-base";
import { createBottomTabNavigator } from "react-navigation";
//custom components imports
import CustomHeader from "./CustomHeader";
import HomeView from "./HomeView";
import Results from "./Results/";
import MapView from "react-native-maps";
import Go from "./Go";
import Ionicons from "react-native-vector-icons/Ionicons";

class Home extends Component {
  // static navigationOptions = ({ navigation }) => ({
  //   title: "Home",
  //   drawerIcon: () => <Ionicons name="md-home" size={24} />
  //   // (
  //   // <Image
  //   //   source="https://png.icons8.com/metro/1600/settings.png"
  //   //   style={[styles.icon]}
  //   // />
  //   //   <ion-icon ios="ios-log-in" md="md-log-in" />

  //   // )
  // });
  render() {
    return (
      <React.Fragment>
        {/* <CustomHeader title="Home" /> */}
        <HomeScreenTabNavigator
          screenProps={{ navigation: this.props.navigation }}
        />
      </React.Fragment>
    );
  }
}

export default Home;

const HomeScreenTabNavigator = new createBottomTabNavigator({
  Home: {
    screen: HomeView,
    navigationOptions: {
      tabBarLabel: "Home",
      tabBarIcon: () => <Ionicons name="md-home" size={24} />
    }
  },
  ListResults: {
    screen: Results,
    navigationOptions: {
      tabBarLabel: "View List",
      tabBarIcon: () => <Ionicons name="md-list" size={24} />
    }
  },
  Go: {
    screen: Go,
    navigationOptions: {
      tabBarLabel: "Go",
      tabBarIcon: () => <Ionicons name="md-locate" size={24} />
    }
  }
});

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24
  },
  map: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 100,
    position: "absolute"
  },
  radius: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    overflow: `hidden`,
    backgroundColor: "rgba(0,122,255,0.1)",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  marker: {
    height: 20,
    width: 20,
    borderWidth: 3,
    borderColor: "white",
    borderRadius: 20 / 2,
    overflow: "hidden",
    backgroundColor: "#007AFF"
  }
});
