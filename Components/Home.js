import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

//library imports
import { Icon, Button, Container, Header, Content, Left } from "native-base";
import { createBottomTabNavigator } from "react-navigation";
//custom components imports
import CustomHeader from "./CustomHeader";
import HomeView from "./HomeView";
import ListResults from "./ListResults";
import MapView from "react-native-maps";
import Go from "./Go";
import Ionicons from "react-native-vector-icons/Ionicons";

class Home extends Component {
  // static navigationOptions = ({ navigation }) => {
  //   return {
  //     headerLeft: (
  //       <View style={{ padding: 10 }}>
  //         <Ionicons
  //           name="md-menu"
  //           size={24}
  //           onPress={() => navigation.navigate("DrawerOpen")}
  //         />
  //       </View>
  //     )
  //   };
  // };
  static navigationOptions = ({ navigation }) => ({
    title: "Home",
    headerLeft: (
      <Icon
        name="ios-menu"
        style={{ paddingLeft: 10 }}
        onPress={() => navigation.navigate("DrawerOpen")}
      />
    ),
    drawerLabel: "Notification",
    drawerIcon: ({ tintColor }) => (
      <Image
        source="https://camo.githubusercontent.com/f8ea5eab7494f955e90f60abc1d13f2ce2c2e540/68747470733a2f2f662e636c6f75642e6769746875622e636f6d2f6173736574732f323037383234352f3235393331332f35653833313336322d386362612d313165322d383435332d6536626439353663383961342e706e67"
        style={styles.icon}
      />
    )
  });
  // static navigationOptions = ({ navigation }) => ({
  //   title: "Home",
  //   headerLeft: (
  //     <Icon
  //       name="ios-menu"
  //       style={{ paddingLeft: 10 }}
  //       onPress={() => navigation.navigate("DrawerOpen")}
  //     />
  //   ),
  //   drawerLabel: "Home",
  //   drawerIcon: ({ tintColor }) => (
  //     <Image
  //       source="https://png.icons8.com/metro/1600/settings.png"
  //       style={styles.icon}
  //     />
  //   )
  // });

  // static navigationOptions = ({ navigation }) => {
  //   return {
  //     headerLeft: (
  //       <TouchableOpacity
  //         onPress={() => {
  //           navigation.toggleDrawer({
  //             side: "left"
  //           });
  //         }}
  //       >
  //         <View style={{ padding: 10 }}>
  //           <Ionicons name="md-menu" size={24} />
  //         </View>
  //       </TouchableOpacity>
  //     )
  //   };
  // };

  render() {
    // console.log(this.props);
    return (
      <React.Fragment>
        <CustomHeader
          title="Home"
          openDrawer={() => this.props.navigation.navigate("DrawerOpen")}
          screenProps={{ navigation: this.props.navigation }}
        />
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
      tabBarIcon: () => <Ionicons name="md-compass" size={24} />
    }
  },
  ListResults: {
    screen: ListResults,
    navigationOptions: {
      tabBarLabel: "View List",
      tabBarIcon: () => <Ionicons name="md-compass" size={24} />
    }
  },
  Go: {
    screen: Go,
    navigationOptions: {
      tabBarLabel: "Go",
      tabBarIcon: () => <Ionicons name="md-compass" size={24} />
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

// import React, { Component } from "react";
// import { Button } from "react-native";
// import { View, Text } from "react-native";
// import MapView from 'react-native-maps';
// import { StyleSheet } from 'react-native';

// class Home extends React.Component {
//   static navigationOptions = {
//     title: "Welcome"
//   };

//   render() {
//     const { navigate } = this.props.navigation;
//     return (
//         <MapView
//         style={styles.map}
//           initialRegion={{
//             latitude: 37.78825,
//             longitude: -122.4324,
//             latitudeDelta: 0.0922,
//             longitudeDelta: 0.0421,
//           }}
//         >
//         <MapView.Marker
//           coordinate={{
//             latitude: 37.78825,
//             longitude: -122.4324,
//           }}
//         >
//         <View style={styles.radius}>
//           <View style={styles.marker} />
//         </View>
//         </MapView.Marker>
//           </MapView>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   map : {
//     left: 0,
//     right: 0,
//     top : 0,
//     bottom: 100,
//     position: 'absolute'
//   },
//   radius : {
//     width: 50,
//     height: 50,
//     borderRadius: 50/2,
//     overflow : `hidden`,
//     backgroundColor : 'rgba(0,122,255,0.1)',
//     borderWidth: 1,
//     alignItems : 'center',
//     justifyContent: 'center'
//   },
//   marker : {
//     height: 20,
//     width: 20,
//     borderWidth : 3,
//     borderColor : 'white',
//     borderRadius : 20/2,
//     overflow : 'hidden',
//     backgroundColor: '#007AFF'
//   }

// })

// export default Home;
