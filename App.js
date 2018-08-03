import {
  createStackNavigator,
  createDrawerNavigator,
  DrawerMenu
} from "react-navigation";
import Home from "./Components/Home";
import ListResults from "./Components/ListResults";
import Login from "./Components/Forms/Login";
import SignUp from "./Components/Forms/SignUp";

// const rootNavigation = createStackNavigator({
//   Home: { screen: Home },
//   Login: { screen: Login },
//   SignUp: { screen: SignUp },
//   ListResults: { screen: ListResults }
// });

// export default App;

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
import Container from "./Container";
import React, { Component } from "react";
import { TabRouter } from "react-navigation";
import { withNavigation, NavigationActions } from "react-navigation";
import NavStack from "./Components/NavStack";

// const uiTheme = {
//   palette: {
//     primaryColor: COLOR.green500,
//     accentColor: COLOR.pink500
//   },
//   toolbar: {
//     container: {
//       height: 70,
//       paddingTop: 20
//     }
//   }
// };

// const TabRoute = TabRouter(
//   {
//     Home: { screen: Home },
//     Login: { screen: Login },
//     SignUp: { screen: SignUp },
//     ListResults: { screen: ListResults }
//   },
//   {
//     initialRouteName: "Home"
//   }
// );

// class TabContentNavigator extends Component {
//   constructor(props, context) {
//     super(props, context);
//     this.state = {
//       active: props.value.active
//     };
//   }

//   //this method will not get called first time
//   componentWillReceiveProps(newProps) {
//     this.setState({
//       active: newProps.value.active
//     });
//   }

//   render() {
//     const Component = TabRoute.getComponentForRouteName(this.state.active);
//     return <Component />;
//   }
// }

// const App = props => {
//   const { navigate } = props.navigation;
//   return (
//     <React.Fragment>
//       <BottomNavigation
//         // active={this.state.active}
//         hidden={false}
//         style={{
//           container: { position: "absolute", bottom: 0, left: 0, right: 0 }
//         }}
//       >
//         <BottomNavigation.Action
//           key="Home"
//           icon="map"
//           label="View Map"
//           onPress={() => {
//             navigate("Home");
//           }}
//         />
//         <BottomNavigation.Action
//           key="ListResults"
//           icon="map"
//           label="View List"
//           onPress={() => {
//             navigate("ListResults");
//           }}
//         />
//         <BottomNavigation.Action
//           key="GoHome"
//           icon="map"
//           label="Go"
//           onPress={() => {
//             navigate("Home");
//           }}
//         />
//       </BottomNavigation>
//     </React.Fragment>
//   );
// };
// export default App;

// const App = createStackNavigator({
//   Home: {
//     screen: Home,
//     navigationOptions: () => ({
//       title: `Welcome!`,
//       headerBackTitle: "Back",
//       headerTruncatedBackTitle: ``
//     })
//   },
//   ListResults: {
//     screen: ListResults,
//     navigationOptions: () => ({
//       title: `Near you`,
//       headerBackTitle: "Back",
//       headerTruncatedBackTitle: ``
//     })
//   },
//   Map: {
//     screen: Home,
//     navigationOptions: () => ({
//       title: `Near you`,
//       headerBackTitle: "Back",
//       headerTruncatedBackTitle: ``
//     })
//   },
//   Login: {
//     screen: Login,
//     navigationOptions: () => ({
//       title: `Login`,
//       headerBackTitle: "Back",
//       headerTruncatedBackTitle: ``
//     })
//   },
//   SignUp: {
//     screen: SignUp,
//     navigationOptions: () => ({
//       title: `Sign Up`,
//       headerBackTitle: "Back",
//       headerTruncatedBackTitle: ``
//     })
//   },
//   initialRouteName: "Home"
// });

// export default App;

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

const App = createDrawerNavigator({
  Home: {
    screen: MyHomeScreen
  },
  Notifications: {
    screen: MyNotificationsScreen
  },
  initialRouteName: MyHomeScreen
});

export default App;
