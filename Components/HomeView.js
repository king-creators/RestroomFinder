import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

//library imports
import { Icon, Button, Container, Header, Content, Left } from "native-base";
import { TabNavigator } from "react-navigation";
//custom components imports
import CustomHeader from "./CustomHeader";
import ListResults from "./ListResults";
import MapView from "react-native-maps";

class HomeView extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Home",
    headerLeft: (
      <Icon
        name="ios-menu"
        style={{ paddingLeft: 10 }}
        onPress={() => navigation.navigate("DrawerOpen")}
      />
    ),
    drawerLabel: "Home",
    drawerIcon: ({ tintColor }) => (
      <Image
        source="https://png.icons8.com/metro/1600/settings.png"
        style={styles.icon}
      />
    )
  });

  // render() {
  //   return (
  //     <HomeScreenTabNavigator
  //       screenProps={{ navigation: this.props.navigation }}
  //     />
  //   );
  // }
  render() {
    return (
      <Container>
        <CustomHeader
          title="Home"
          drawerOpen={() => this.props.navigation.navigate("DrawerOpen")}
        />

        <Content
          contentContainerStyle={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            padding: 10
          }}
        >
          {/* <Button onPress={() => this.props.navigation.navigate("Login")} full> */}
          {/* <Text style={{ color: "Blue" }}>Home</Text> */}
          {/* </Button> */}
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421
            }}
          >
            <MapView.Marker
              coordinate={{
                latitude: 37.78825,
                longitude: -122.4324
              }}
            >
              <View style={styles.radius}>
                <View style={styles.marker} />
              </View>
            </MapView.Marker>
          </MapView>
        </Content>
      </Container>
    );
  }
}

export default HomeView;

// const HomeScreenTabNavigator = new TabNavigator({
//   Home: {
//     screen: HomeView,
//     navigationOptions: {
//       tabBarLabel: "Home",
//       tabBarIcon: () => <Ionicons name="md-compass" size={24} />
//     }
//   },
//   ListResults: {
//     screen: ListResults,
//     navigationOptions: {
//       tabBarLabel: "View List",
//       tabBarIcon: () => <Ionicons name="md-compass" size={24} />
//     }
//   },
//   HomeView: {
//     screen: HomeView,
//     navigationOptions: {
//       tabBarLabel: "Go",
//       tabBarIcon: () => <Ionicons name="md-compass" size={24} />
//     }
//   }
// });

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
